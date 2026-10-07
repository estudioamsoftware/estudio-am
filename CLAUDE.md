# Estudio AM

Sitio de una sola página: todo está en `index.html` (CSS y JS inline, imágenes embebidas en base64). Textos en español con traducción en inglés en el atributo `data-en`; al cambiar un texto, actualizar los dos.

## Git

- Siempre hacer push directo a `main`.

## Piezas gráficas (flyers, tarjetas, posteos)

Referencia aprobada: `piezas/tarjeta-facebook.html` → `piezas/tarjeta-facebook.png` (1080×1080). Así le gusta que se vean:

- Breve y al grano, tipo tarjeta: logo, qué hace, para quién y un solo llamado a la acción. Nada de textos largos ni listas de ejemplos.
- Todo centrado (logo, título, frase, llamado); los renglones cortados a mano para que queden parejos.
- Espacios balanceados: nada de huecos grandes; el bloque de texto centrado en vertical, con el mismo aire arriba y abajo.
- Estética del sitio: fondo papel `#F5F1EA`, naranja `#C8761A` / `#A6600F`, tinta `#14110F`; Fraunces para títulos, Instrument Sans para texto, Azeret Mono para etiquetas.
- El llamado a la acción lleva a la web (`estudioamdev.com.ar`), grande en una franja naranja abajo.
- Para generar la imagen: renderizar el HTML con Playwright (Chromium) a PNG.
