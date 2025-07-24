# 🎨 Estilos y Design Tokens de MussikOn Static Page

Este documento describe la estructura de estilos, las variables CSS (design tokens) y las mejores prácticas para personalizar la UI de la página estática de MussikOn.

## 📁 Ubicación principal
- Todos los estilos globales y tokens están en: `css/modern.css`

## 🎨 Variables CSS principales (`:root`)

```css
:root {
  /* Paleta principal */
  --primary-blue: #2563eb; /* Azul principal */
  --primary-blue-dark: #1e40af; /* Azul oscuro */
  --primary-blue-light: #60a5fa; /* Azul claro */
  --accent: #60a5fa; /* Azul acento */
  --background-light: #f6f8fa; /* Fondo claro */
  --background-dark: #181e29; /* Fondo oscuro */
  --glass-bg: rgba(255,255,255,0.82); /* Fondo glass claro */
  --glass-bg-dark: rgba(30,64,175,0.92); /* Fondo glass oscuro */
  --glass-blur: 18px;
  --glass-blur-strong: 28px;
  --glass-blur-medium: 22px;
  --glass-border: 1.5px solid #dbeafe;
  --glass-border-strong: 2px solid #60a5fa;
  --card-shadow: 0 4px 24px 0 rgba(37,99,235,0.10), 0 1.5px 6px 0 rgba(30,64,175,0.10);
  --card-shadow-strong: 0 8px 32px 0 rgba(37,99,235,0.18), 0 2px 8px 0 rgba(30,64,175,0.15);
  --quick-link-shadow: 0 4px 18px 0 rgba(37,99,235,0.10);
  --border-radius: 18px;
  --border-radius-small: 8px;
  /* Tipografía */
  --font-main: 'Inter', 'Poppins', Arial, sans-serif;
  --font-mono: 'Fira Mono', 'Consolas', monospace;
  --font-size-base: 1.08em;
  --font-size-small: 0.98em;
  --font-size-large: 1.2em;
  /* Colores de texto */
  --text-main: #1a1a1a;
  --text-contrast: #0a0a0a;
  --text-on-blue: #fff;
  --text-on-glass: #1a1a1a;
  --text-on-dark: #f3f4f6;
  --text-muted: #888;
  /* Gradientes */
  --gradient-main: linear-gradient(135deg, #e0e7ff 0%, #f6f8fa 100%);
  --gradient-blue: linear-gradient(90deg, #2563eb 60%, #60a5fa 100%);
  --gradient-blue-dark: linear-gradient(90deg, #1e40af 60%, #2563eb 100%);
  --gradient-glass: linear-gradient(120deg, var(--glass-bg) 70%, #e0e7ff 100%);
  --gradient-quicklink: linear-gradient(120deg, var(--glass-bg) 60%, #dbeafe 100%);
}
```

## 🌈 Gradientes y Glassmorphism
- Todos los fondos principales usan gradientes suaves para dar profundidad y modernidad.
- Las cards y quick-links usan glassmorphism: blur, opacidad y bordes sutiles.
- Puedes ajustar la intensidad del blur y los colores editando las variables.

## 🌙 Modo oscuro
- El modo oscuro se activa automáticamente por preferencia del sistema o manualmente con la clase `.dark-mode` en `<body>`.
- Todos los tokens tienen equivalentes para dark mode.

## 🖌️ Personalización rápida
- Cambia el branding modificando solo los valores de las variables en `:root`.
- Para nuevos componentes, usa los tokens existentes para mantener coherencia visual.

## 🧩 Ejemplo de uso de tokens en un componente
```css
.my-card {
  background: var(--gradient-glass);
  color: var(--text-on-glass);
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
}
```

## 📚 Recomendaciones
- Usa siempre los tokens para colores, fuentes y tamaños.
- No uses valores hardcodeados fuera de las variables.
- Documenta cualquier nuevo token que agregues.

--- 