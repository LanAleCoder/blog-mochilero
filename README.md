
  # Blog Turístico Guatemala - Guía de Transporte

  Un blog turístico completo para Guatemala con información detallada sobre transporte, destinos y consejos de viaje. Incluye soporte multiidioma (Español/Inglés) y optimización SEO avanzada.

  ## Características Principales

  ### 🌐 Internacionalización (i18n)
  - Soporte completo para **Español** e **Inglés**
  - Selector de idioma en el header
  - Traducciones organizadas en archivos JSON separados
  - Persistencia del idioma seleccionado en localStorage
  - Meta tags y URLs específicos por idioma

  ### 🎯 Optimización SEO
  - **Meta tags completos**: título, descripción, keywords, autor
  - **Open Graph**: optimización para Facebook y redes sociales
  - **Twitter Cards**: meta tags específicos para Twitter
  - **Structured Data (JSON-LD)**: schema markup para mejor indexación
  - **Sitemap XML**: mapeo completo del sitio en ambos idiomas
  - **Robots.txt**: configuración para crawlers de búsqueda
  - **Canonical URLs**: prevención de contenido duplicado
  - **Hreflang**: etiquetas para sitios multiidioma

  ### 📱 Funcionalidades del Blog
  - Página principal con destinos destacados
  - Guías detalladas de transporte
  - Sección de blog con artículos
  - Consejos de viaje
  - Diseño responsive
  - Modo oscuro/claro
  - Banners publicitarios integrados

  ## Instalación y Uso

  ### Requisitos
  - Node.js 18+
  - npm

  ### Comandos

  ```bash
  # Instalar dependencias
  npm install

  # Desarrollo
  npm run dev

  # Construir para producción
  npm run build
  ```

  ## SEO y Configuración

  ### URLs Multiidioma
  - Español (por defecto): `https://guatemala-mochilero.vercel.app/`
  - Inglés: `https://guatemala-mochilero.vercel.app/en`

  ### Meta Tags Dinámicos
  El componente `SEO` permite personalizar meta tags por página:

  ```tsx
  <SEO
    title="Título personalizado"
    description="Descripción específica"
    keywords="palabras, clave, específicas"
    type="article"
    url="/ruta-especifica"
  />
  ```

  ## Tecnologías

  - **React 18** con TypeScript
  - **Vite** para desarrollo y build
  - **Tailwind CSS** para estilos
  - **Radix UI** para componentes
  - **Lucide React** para iconos

  ## SEO Checklist ✅

  - [x] Meta tags completos (título, descripción, keywords)
  - [x] Open Graph para redes sociales
  - [x] Twitter Cards
  - [x] Structured Data (JSON-LD)
  - [x] Sitemap XML multiidioma
  - [x] Robots.txt optimizado
  - [x] Canonical URLs
  - [x] Hreflang para multiidioma
  - [x] URLs amigables
  - [x] Performance optimizado
  