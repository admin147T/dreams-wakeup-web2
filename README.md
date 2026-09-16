# Página web — Dreams WakeUp

Sitio web estático, adaptable a celulares y listo para publicar en Render.

## 1. Agregar el video de la prueba

1. Convierte el video a formato MP4, preferentemente con codificación H.264.
2. Renómbralo exactamente como `video-prueba.mp4`.
3. Copia el archivo dentro de la carpeta `assets`.

La ruta final debe ser:

`assets/video-prueba.mp4`

No es necesario modificar `index.html`. La página detectará y mostrará el video automáticamente.

Recomendaciones:

- Video horizontal 16:9.
- Resolución 1280×720 o 1920×1080.
- Duración entre 30 segundos y 2 minutos.
- Comprimirlo antes de publicarlo para evitar una carga lenta.
- No mostrar placas, números telefónicos ni otros datos personales.

## 2. Probar la página en Windows

Abre PowerShell o CMD dentro de esta carpeta y ejecuta:

```bash
python -m http.server 8000
```

Después abre en el navegador:

`http://localhost:8000`

## 3. Publicar en Render

### Opción recomendada: GitHub

1. Descomprime el proyecto.
2. Añade `assets/video-prueba.mp4`.
3. Sube toda la carpeta a un repositorio de GitHub.
4. En Render selecciona **New + → Static Site**.
5. Conecta el repositorio.
6. Configura:
   - **Build Command:** dejar vacío.
   - **Publish Directory:** `.`
7. Presiona **Create Static Site**.

El archivo `render.yaml` también permite desplegarlo como Blueprint.

## 4. Archivos principales

- `index.html`: contenido de la página.
- `styles.css`: diseño, colores y adaptación móvil.
- `script.js`: menú, video y ampliación del tríptico.
- `assets/`: imágenes y video.
- `render.yaml`: configuración para Render.

## Aviso

La reducción automática de velocidad se presenta únicamente como mejora futura. El prototipo actual no controla el vehículo.
