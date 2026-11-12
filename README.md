# NovaShop — Proyecto final de Bootstrap (UDES)

**Estudiante:** Danilo Muskus Tarazona  
**Docente:** Carlos Alberto Carrascal Avendano  
**Universidad:** Universidad de Santander (UDES)  
**Asignatura:** Bootstrap

## Funciones implementadas
- Bootstrap 5 y diseño adaptable.
- Catálogo local de 12 productos ficticios en COP.
- Búsqueda, categorías y ordenamiento.
- Carrito con añadir, aumentar, disminuir, eliminar, vaciar y simulación de pedido.
- Persistencia del carrito en `localStorage`.
- Consumo de API REST pública `https://fakestoreapi.com/products?limit=8`, con timeout y recuperación al catálogo local.
- Pruebas automáticas de lógica del carrito y datos.
- Workflow de GitHub Actions para ejecutar pruebas.

**No es una tienda comercial:** no procesa pagos, envíos ni pedidos reales. La conversión de precios de la API REST es ficticia (USD x 4.000 COP), únicamente para fines de demostración.

## Cómo ejecutar
1. Abre esta carpeta en VS Code.
2. Usa la extensión **Live Server** sobre `index.html`, o abre la terminal aquí y ejecuta `python -m http.server 5500`.
3. Visita `http://localhost:5500`.
4. Requiere internet para Bootstrap CDN y productos externos; el catálogo local funciona sin la API.
5. Ejecuta `npm test` con Node.js 18+ para verificar las pruebas.

## Demostración de localStorage
1. Agrega un producto al carrito.
2. Recarga la página y comprueba que se conserva.
3. Modifica cantidades, elimina productos y vacía el carrito.
4. Abre las herramientas de desarrollador > Aplicación > Almacenamiento local > `novashop-cart-v1`.

## Git / evidencia que debe producir el estudiante
La carpeta ZIP **no contiene un historial Git real**. Para acreditar la guía de la UDES, crea tu propio repositorio y realiza commits, rama y merge reales. Sigue `docs/PASOS_GIT_Y_EVIDENCIAS.md`.

## Despliegue
Publica desde GitHub > Settings > Pages > Deploy from a branch > `main` / `(root)` > Save. Comprueba la URL pública antes de ponerla en el informe. GitHub Pages sirve archivos estáticos y no necesita servidor backend para este proyecto.

## Limitaciones
- API REST externa depende de internet y puede fallar.
- El carrito solo se guarda en el navegador del usuario, no se sincroniza entre dispositivos.
- La guía describe un conflicto con una colaboradora ficticia; **no se inventan conflictos ni capturas**. Para evidenciar resolución de conflictos, realiza la práctica opcional indicada en la guía de evidencias.
