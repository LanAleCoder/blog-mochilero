export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
}

export const blogArticles: Record<string, BlogArticle> = {
  "transporte-publico-guatemala": {
    id: "transporte-publico-guatemala",
    title: "Transporte Público en Guatemala: Todo lo que Necesitas Saber",
    excerpt:
      "Una guía práctica sobre los famosos chicken buses, buses de primera clase y consejos de seguridad para viajar como un local.",
    image:
      "https://images.unsplash.com/photo-1745182477705-b8979cbf42b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHdWF0ZW1hbGElMjBjaGlja2VuJTIwYnVzJTIwY29sb3JmdWx8ZW58MXx8fHwxNzU4OTU3MTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    author: "Carlos Morales",
    date: "12 Nov 2024",
    readTime: "6 min",
    category: "Consejos",
    tags: [
      "Transporte público",
      "Chicken bus",
      "Seguridad",
      "Presupuesto",
      "Viajes locales",
    ],
    featured: true,
    content: `
      <h2>Introducción al Transporte Público Guatemalteco</h2>
      <p>Guatemala cuenta con un sistema de transporte público único en Centroamérica, caracterizado por sus coloridos "chicken buses" y una red extensa que conecta todo el país. En esta guía te explicamos todo lo que necesitas saber para moverte como un local.</p>

      <h2>Los Famosos Chicken Buses</h2>
      <p>Los chicken buses son antiguos autobuses escolares estadounidenses que han sido transformados en obras de arte móviles. Estos vehículos son:</p>
      <ul>
        <li><strong>Económicos:</strong> Los viajes cuestan entre Q3-Q30 dependiendo de la distancia</li>
        <li><strong>Coloridos:</strong> Decorados con colores brillantes y diseños únicos</li>
        <li><strong>Frecuentes:</strong> Salen cuando se llenan, usualmente cada 15-30 minutos</li>
        <li><strong>Auténticos:</strong> Una experiencia cultural genuina</li>
      </ul>

      <h2>Buses de Primera Clase</h2>
      <p>Para trayectos largos, Guatemala también ofrece buses de primera clase con:</p>
      <ul>
        <li>Aire acondicionado</li>
        <li>Asientos cómodos</li>
        <li>Horarios fijos</li>
        <li>Servicio directo</li>
        <li>Mayor seguridad</li>
      </ul>

      <h3>Principales Empresas</h3>
      <ul>
        <li><strong>Pullman:</strong> Rutas hacia Antigua, Panajachel, Quetzaltenango</li>
        <li><strong>Fuente del Norte:</strong> Especializada en rutas al Petén (Tikal)</li>
        <li><strong>Mundo Maya:</strong> Servicios premium a destinos turísticos</li>
      </ul>

      <h2>Consejos de Seguridad</h2>
      <p>Viajar en transporte público en Guatemala es seguro si sigues estas recomendaciones:</p>

      <h3>Antes del Viaje</h3>
      <ul>
        <li>Viaja durante el día siempre que sea posible</li>
        <li>Informa a alguien tu itinerario</li>
        <li>Lleva solo el dinero necesario</li>
        <li>Evita mostrar objetos de valor</li>
      </ul>

      <h3>Durante el Viaje</h3>
      <ul>
        <li>Mantén tu mochila o bolsa en tu regazo</li>
        <li>Está atento a tus pertenencias</li>
        <li>No duermas en chicken buses</li>
        <li>Confía en tu instinto</li>
      </ul>

      <h2>Costos y Presupuesto</h2>
      <p>El transporte público en Guatemala es extremadamente económico:</p>

      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <thead>
          <tr style="background-color: #f5f5f5;">
            <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Ruta</th>
            <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Chicken Bus</th>
            <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Primera Clase</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px;">Guatemala - Antigua</td>
            <td style="border: 1px solid #ddd; padding: 12px;">Q20-30</td>
            <td style="border: 1px solid #ddd; padding: 12px;">Q50-150</td>
          </tr>
          
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px;">Guatemala - Flores</td>
            <td style="border: 1px solid #ddd; padding: 12px;">Q80-120</td>
            <td style="border: 1px solid #ddd; padding: 12px;">Q150-200</td>
          </tr>
        </tbody>
      </table>

      <h2>Terminales Principales</h2>
      <p>En Ciudad de Guatemala, los principales puntos de partida son:</p>

      <h3>Terminal CENMA</h3>
      <p>Ubicada en la Zona 12, sirve principalmente destinos del sur:</p>
      <ul>
        <li>Escuintla y costa pacífica</li>
        <li>El Paredón</li>
        <li>Puerto San José</li>
        <li>Retalhuleu</li>
      </ul>

      <h2>Consejos Prácticos para Viajeros</h2>

      <h3>Qué Llevar</h3>
      <ul>
        <li>Billetes pequeños (Q1, Q5, Q10)</li>
        <li>Agua y snacks</li>
        <li>Chaqueta ligera (puede hacer frío en las montañas)</li>
        <li>Tapones para los oídos (la música puede ser alta)</li>
      </ul>

      <h3>Etiqueta del Chicken Bus</h3>
      <ul>
        <li>Ofrece tu asiento a personas mayores o embarazadas</li>
        <li>Mantén tus pertenencias en tu espacio</li>
        <li>Está preparado para paradas frecuentes</li>
        <li>Disfruta la música y el ambiente</li>
      </ul>

      <h2>Rutas Populares para Turistas</h2>

      <h3>Guatemala City → Antigua</h3>
      <p><strong>Duración:</strong> 1-2 horas<br>
      <strong>Frecuencia:</strong> Cada 15 minutos<br>
      <strong>Costo:</strong> Q20-30 (chicken bus), Q50-150 (primera clase)</p>

      <h2>Alternativas de Transporte</h2>
      <p>Además del transporte público tradicional, considera:</p>

      <h3>Shuttles Turísticos</h3>
      <ul>
        <li>Más cómodos y directos</li>
        <li>Recogida en hoteles</li>
        <li>Costo: $15-40 por persona</li>
        <li>Ideal para equipaje pesado</li>
      </ul>

      <h3>Taxis y Uber</h3>
      <ul>
        <li>Disponibles en ciudades principales</li>
        <li>Convenientes para distancias cortas</li>
        <li>Nego cia tarifas con taxis</li>
        <li>Uber solo en Ciudad de Guatemala y Antigua</li>
      </ul>

      <h2>Conclusión</h2>
      <p>El transporte público en Guatemala es una experiencia auténtica y económica que te permitirá conocer la cultura local de primera mano. Con la preparación adecuada y siguiendo nuestros consejos de seguridad, podrás moverte por todo el país de manera segura y divertida.</p>

      <p>Los chicken buses no son solo un medio de transporte, sino una ventana a la cultura guatemalteca. ¡Anímate a vivirla!</p>
    `,
  },

  // "como-llegar-tikal-guatemala": {
  //   id: "como-llegar-tikal-guatemala",
  //   title: "Guía Completa: Cómo Llegar a Tikal Desde Guatemala City",
  //   excerpt:
  //     "Descubre todas las opciones de transporte para llegar a las ruinas mayas más impresionantes de Guatemala, incluyendo vuelos, buses nocturnos y tours organizados.",
  //   image:
  //     "https://images.unsplash.com/photo-1681686587641-45cd5bd876d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUaWthbCUyMEd1YXRlbWFsYSUyME1heWElMjB0ZW1wbGV8ZW58MXx8fHwxNzU4OTY3MTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //   author: "María García",
  //   date: "15 Nov 2024",
  //   readTime: "8 min",
  //   category: "Rutas",
  //   tags: [
  //     "Tikal",
  //     "Petén",
  //     "Ruinas mayas",
  //     "Vuelos domésticos",
  //     "Buses nocturnos",
  //   ],
  //   featured: false,
  //   content: `
  //     <h2>Introducción a Tikal</h2>
  //     <p>Tikal es uno de los sitios arqueológicos más importantes de la civilización maya y una de las atracciones principales de Guatemala. Ubicado en el corazón de la selva del Petén, este Patrimonio de la Humanidad por la UNESCO ofrece una experiencia única que combina historia, naturaleza y aventura.</p>

  //     <h2>Opciones de Transporte</h2>
  //     <p>Existen tres formas principales de llegar a Tikal desde Ciudad de Guatemala:</p>

  //     <h3>1. Vuelo Doméstico + Transporte Terrestre</h3>
  //     <p><strong>La opción más rápida y cómoda</strong></p>

  //     <h4>Vuelo Guatemala City → Flores</h4>
  //     <ul>
  //       <li><strong>Duración:</strong> 1 hora y 15 minutos</li>
  //       <li><strong>Aerolíneas:</strong> TAG Airlines, Avianca</li>
  //       <li><strong>Frecuencia:</strong> 2-3 vuelos diarios</li>
  //       <li><strong>Costo:</strong> $120-180 ida y vuelta</li>
  //       <li><strong>Mejor horario:</strong> Vuelo de 6:00 AM para maximizar tiempo en Tikal</li>
  //     </ul>

  //     <h4>Flores → Tikal</h4>
  //     <ul>
  //       <li><strong>Distancia:</strong> 65 km</li>
  //       <li><strong>Duración:</strong> 1 hora en carro</li>
  //       <li><strong>Opciones:</strong> Shuttle, taxi, tour organizado</li>
  //       <li><strong>Costo:</strong> $15-30 por persona</li>
  //     </ul>

  //     <p><strong>Ventajas:</strong> Rápido, cómodo, más tiempo en Tikal<br>
  //     <strong>Desventajas:</strong> Más costoso, dependes de horarios de vuelos</p>

  //     <h3>2. Bus Nocturno Directo</h3>
  //     <p><strong>La opción más económica</strong></p>

  //     <h4>Empresas Principales</h4>
  //     <ul>
  //       <li><strong>Fuente del Norte:</strong> La más recomendada, buses cómodos con aire acondicionado</li>
  //       <li><strong>Mundo Maya:</strong> Servicio premium con asientos reclinables</li>
  //       <li><strong>Linea Dorada:</strong> Opción económica estándar</li>
  //     </ul>

  //     <h4>Detalles del Viaje</h4>
  //     <ul>
  //       <li><strong>Duración:</strong> 8-10 horas</li>
  //       <li><strong>Horario de salida:</strong> 9:00 PM - 10:00 PM</li>
  //       <li><strong>Llegada:</strong> 5:00 AM - 7:00 AM a Santa Elena/Flores</li>
  //       <li><strong>Costo:</strong> $15-25 dependiendo de la empresa</li>
  //       <li><strong>Incluye:</strong> Asiento reclinable, aire acondicionado, baño</li>
  //     </ul>

  //     <p><strong>Ventajas:</strong> Económico, llegas temprano para visitar Tikal<br>
  //     <strong>Desventajas:</strong> Viaje largo, puede ser incómodo para dormir</p>

  //     <h3>3. Tours Organizados</h3>
  //     <p><strong>La opción más conveniente</strong></p>

  //     <h4>Tipos de Tours</h4>
  //     <ul>
  //       <li><strong>Tour de 2 días/1 noche:</strong> $180-250 por persona</li>
  //       <li><strong>Tour de 3 días/2 noches:</strong> $280-350 por persona</li>
  //       <li><strong>Tour de lujo:</strong> $400-600 por persona</li>
  //     </ul>

  //     <h4>Incluye Típicamente</h4>
  //     <ul>
  //       <li>Transporte ida y vuelta</li>
  //       <li>Alojamiento en Flores</li>
  //       <li>Guía especializado</li>
  //       <li>Entradas a Tikal</li>
  //       <li>Algunas comidas</li>
  //     </ul>

  //     <p><strong>Ventajas:</strong> Todo organizado, guía experto, sin preocupaciones<br>
  //     <strong>Desventajas:</strong> Más costoso, menos flexibilidad</p>

  //     <h2>Recomendaciones por Perfil de Viajero</h2>

  //     <h3>Para Viajeros con Presupuesto Limitado</h3>
  //     <p><strong>Opción recomendada:</strong> Bus nocturno</p>
  //     <ul>
  //       <li>Reserva con Fuente del Norte para mayor comodidad</li>
  //       <li>Lleva almohada y manta</li>
  //       <li>Cena ligera antes del viaje</li>
  //       <li>Hospédate en Flores para descansar al llegar</li>
  //     </ul>

  //     <h3>Para Viajeros con Tiempo Limitado</h3>
  //     <p><strong>Opción recomendada:</strong> Vuelo doméstico</p>
  //     <ul>
  //       <li>Reserva el vuelo de 6:00 AM</li>
  //       <li>Organiza shuttle desde el aeropuerto</li>
  //       <li>Considera regresar el mismo día (tour de amanecer)</li>
  //       <li>Lleva solo equipaje de mano</li>
  //     </ul>

  //     <h3>Para Familias o Grupos</h3>
  //     <p><strong>Opción recomendada:</strong> Tour organizado</p>
  //     <ul>
  //       <li>Busca tours familiares con actividades para niños</li>
  //       <li>Considera hospedaje en eco-lodges</li>
  //       <li>Incluye actividades adicionales (Yaxhá, navegación)</li>
  //     </ul>

  //     <h2>Planificación del Viaje</h2>

  //     <h3>Mejor Época para Visitar</h3>
  //     <ul>
  //       <li><strong>Temporada seca (Diciembre-Abril):</strong> Mejor clima, menos lluvia</li>
  //       <li><strong>Temporada lluviosa (Mayo-Noviembre):</strong> Menos turistas, precios más bajos</li>
  //       <li><strong>Evitar:</strong> Semana Santa y fin de año (muy concurrido)</li>
  //     </ul>

  //     <h3>Qué Llevar</h3>
  //     <ul>
  //       <li>Repelente de insectos (fundamental)</li>
  //       <li>Protector solar</li>
  //       <li>Sombrero o gorra</li>
  //       <li>Agua abundante</li>
  //       <li>Calzado cómodo para caminar</li>
  //       <li>Cámara con baterías extra</li>
  //       <li>Dinero en efectivo</li>
  //     </ul>

  //     <h3>Documentos Necesarios</h3>
  //     <ul>
  //       <li>Pasaporte o DPI (para guatemaltecos)</li>
  //       <li>No se requiere visa adicional</li>
  //       <li>Certificado de vacuna contra fiebre amarilla (recomendado)</li>
  //     </ul>

  //     <h2>Costos Aproximados del Viaje</h2>

  //     <h3>Opción Económica (Bus)</h3>
  //     <ul>
  //       <li>Transporte: $15-25</li>
  //       <li>Alojamiento en Flores: $15-25/noche</li>
  //       <li>Entrada a Tikal: $20</li>
  //       <li>Comidas: $20-30/día</li>
  //       <li><strong>Total: $70-100 por persona</strong></li>
  //     </ul>

  //     <h3>Opción Cómoda (Vuelo)</h3>
  //     <ul>
  //       <li>Vuelo: $120-180</li>
  //       <li>Shuttle a Tikal: $30</li>
  //       <li>Alojamiento: $30-50/noche</li>
  //       <li>Entrada a Tikal: $20</li>
  //       <li>Comidas: $30-40/día</li>
  //       <li><strong>Total: $230-320 por persona</strong></li>
  //     </ul>

  //     <h3>Tour Organizado</h3>
  //     <ul>
  //       <li>Tour 2 días/1 noche: $180-250</li>
  //       <li>Comidas adicionales: $20-30</li>
  //       <li>Propinas: $10-20</li>
  //       <li><strong>Total: $210-300 por persona</strong></li>
  //     </ul>

  //     <h2>Consejos Adicionales</h2>

  //     <h3>Para el Vuelo</h3>
  //     <ul>
  //       <li>Reserva con al menos 2 semanas de anticipación</li>
  //       <li>Confirma tu vuelo 24 horas antes</li>
  //       <li>Llega al aeropuerto 1 hora antes (vuelos domésticos)</li>
  //       <li>Ten en cuenta que los vuelos pueden cancelarse por mal clima</li>
  //     </ul>

  //     <h3>Para el Bus</h3>
  //     <ul>
  //       <li>Compra boletos con anticipación en temporada alta</li>
  //       <li>Lleva identificación</li>
  //       <li>Guarda tu equipaje en la bodega si es necesario</li>
  //       <li>El bus hace paradas para comida y baño</li>
  //     </ul>

  //     <h3>En Tikal</h3>
  //     <ul>
  //       <li>Contrata guía al llegar (recomendado para primera visita)</li>
  //       <li>Comienza temprano para evitar calor y multitudes</li>
  //       <li>Lleva suficiente agua (no hay venta dentro del parque)</li>
  //       <li>Respeta la fauna y flora del lugar</li>
  //     </ul>

  //     <h2>Itinerario Sugerido</h2>

  //     <h3>Día 1</h3>
  //     <ul>
  //       <li><strong>6:00 AM:</strong> Vuelo Guatemala-Flores (o llegada en bus)</li>
  //       <li><strong>8:00 AM:</strong> Traslado a hotel en Flores</li>
  //       <li><strong>9:00 AM:</strong> Desayuno y descanso</li>
  //       <li><strong>11:00 AM:</strong> Traslado a Tikal</li>
  //       <li><strong>12:00 PM:</strong> Inicio del recorrido</li>
  //       <li><strong>6:00 PM:</strong> Regreso a Flores</li>
  //       <li><strong>8:00 PM:</strong> Cena en Flores</li>
  //     </ul>

  //     <h3>Día 2</h3>
  //     <ul>
  //       <li><strong>4:30 AM:</strong> Tour de amanecer en Tikal (opcional)</li>
  //       <li><strong>8:00 AM:</strong> Desayuno</li>
  //       <li><strong>10:00 AM:</strong> Tiempo libre en Flores</li>
  //       <li><strong>2:00 PM:</strong> Vuelo de regreso (o bus nocturno)</li>
  //     </ul>

  //     <h2>Conclusión</h2>
  //     <p>Llegar a Tikal desde Ciudad de Guatemala es más fácil de lo que muchos piensan. Ya sea que elijas volar por comodidad, tomar el bus por economía, o unirte a un tour por conveniencia, la experiencia de visitar estas magníficas ruinas mayas en medio de la selva tropical será inolvidable.</p>

  //     <p>Planifica con anticipación, especialmente en temporada alta, y no olvides que Tikal no es solo un sitio arqueológico, sino también un parque nacional con increíble biodiversidad. ¡Prepárate para una aventura que combina historia, naturaleza y cultura maya!</p>
  //   `,
  // },
};

export const getBlogArticleBySlug = (slug: string): BlogArticle | undefined => {
  return blogArticles[slug];
};

export const getAllBlogArticles = (): BlogArticle[] => {
  return Object.values(blogArticles);
};

export const getBlogArticlesByCategory = (category: string): BlogArticle[] => {
  return Object.values(blogArticles).filter(
    (article) => article.category === category
  );
};

export const getFeaturedBlogArticles = (): BlogArticle[] => {
  return Object.values(blogArticles).filter((article) => article.featured);
};

// Helper function to get article by title
export const getBlogArticleByTitle = (
  title: string
): BlogArticle | undefined => {
  return Object.values(blogArticles).find((article) => article.title === title);
};
