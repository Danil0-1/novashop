# Pasos de Git y evidencias obligatorias

## 1. Preparar repositorio
En la terminal de VS Code dentro de NovaShop:

```bash
git init
git branch -M main
git status
git add .
git commit -m "Crea estructura y catalogo Bootstrap NovaShop"
git log --oneline
```

Crea un repositorio **vacío** llamado `novashop-udes` en GitHub (sin README automático) y copia su URL real. Luego:

```bash
git remote add origin https://github.com/TU_USUARIO/novashop-udes.git
git push -u origin main
```

## 2. Rama experimental real
La implementación de localStorage está incluida en el ZIP. Para registrar una mejora real y no fingir un historial, crea una rama y modifica una característica pequeña, por ejemplo el texto de confirmación de pedido en `js/app.js`:

```bash
git checkout -b mejoras-carrito
# Edita y guarda un cambio real en js/app.js
git status
git add js/app.js
git commit -m "Mejora mensajes de confirmacion del carrito"
git push -u origin mejoras-carrito
git fetch origin
git checkout main
git merge mejoras-carrito
git push origin main
git log --oneline --graph --all
```

En GitHub puedes abrir un Pull Request de `mejoras-carrito` antes de hacer el merge local; si haces merge en GitHub, usa `git pull origin main` en vez de fusionar otra vez localmente.

## 3. Evidencias con capturas auténticas
- Aplicación abierta en escritorio y móvil (modo responsivo del navegador).
- Carrito con productos, cantidad y total; recarga y muestra persistencia.
- DevTools > Application > Local Storage > `novashop-cart-v1`.
- Terminal: `npm test` pasando.
- GitHub: repositorio, commits, rama `mejoras-carrito`, Pull Request si lo realizaste, y rama `main` actualizada.
- GitHub Pages: URL pública que cargue sin errores.
- Consola/red: consumo API REST si responde, o captura del modo local y explicación de contingencia.

## 4. Ejercicio de conflicto (solo si el docente lo solicita)
En una rama de práctica, modifica la misma línea en dos ramas, fusiona para provocar un conflicto, resuélvelo editando manualmente, usa `git add` y `git commit`, y captura la terminal. **No afirmes haberlo hecho si no ocurrió.**

## 5. Informe
Abre `docs/Danilo_Muskus_Entregable_Producto_Final.docx`, inserta capturas y enlaces reales en las secciones correspondientes. No presentes comandos descritos como ejecuciones verificadas hasta haberlos ejecutado. Revisa las instrucciones del video del docente si las tienes.
