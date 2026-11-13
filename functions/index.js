// Cloudflare Pages Function para la portada (/).
// Con ?lang=en entrega la página ya traducida al inglés, para que Google vea dos páginas
// distintas (español e inglés) y no tome la versión en inglés como copia de la española.
// Los textos salen de los atributos data-en de index.html: no hay que tocar nada acá
// cuando cambia un texto.

function decode(s) {
  return s
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

export async function onRequestGet(context) {
  const url = new URL(context.request.url);
  const response = await context.next();
  if (url.searchParams.get('lang') !== 'en') return response;
  const type = response.headers.get('content-type') || '';
  if (!type.includes('text/html')) return response;

  const swapAttr = (from, to) => ({
    element(el) {
      el.setAttribute(to, decode(el.getAttribute(from)));
    },
  });

  return new HTMLRewriter()
    .on('html', {
      element(el) {
        el.setAttribute('lang', 'en');
        el.setAttribute('data-served-lang', 'en');
      },
    })
    .on('title[data-en]', {
      element(el) {
        el.setInnerContent(decode(el.getAttribute('data-en')));
      },
    })
    .on('body [data-en]', {
      element(el) {
        el.setInnerContent(decode(el.getAttribute('data-en')), { html: true });
      },
    })
    .on('[data-en-content]', swapAttr('data-en-content', 'content'))
    .on('[data-en-href]', swapAttr('data-en-href', 'href'))
    .on('[data-en-placeholder]', swapAttr('data-en-placeholder', 'placeholder'))
    .transform(response);
}
