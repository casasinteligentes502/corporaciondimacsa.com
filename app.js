const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#main-menu');

if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

document.querySelector('#year').textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('is-visible'));
}

const quoteForm = document.querySelector('#quote-form');
if (quoteForm) {
  quoteForm.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(quoteForm);
    const name = data.get('name') || '';
    const company = data.get('company') || 'No indicada';
    const phone = data.get('phone') || 'No indicado';
    const need = data.get('need') || 'Consulta general';
    const message = data.get('message') || '';

    const lang = document.documentElement.lang === 'en' ? 'en' : 'es';
    const text = lang === 'en' ? [
      'Hello DIMACSA, I would like to request a quotation.',
      '',
      `Name: ${name}`,
      `Company: ${company}`,
      `Phone: ${phone}`,
      `Requirement: ${need}`,
      `Details: ${message}`
    ].join('\n') : [
      'Hola DIMACSA, deseo solicitar una cotización.',
      '',
      `Nombre: ${name}`,
      `Empresa: ${company}`,
      `Teléfono: ${phone}`,
      `Necesidad: ${need}`,
      `Detalle: ${message}`
    ].join('\n');

    window.open(`https://wa.me/50280080624?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  });
}


// Bilingual ES/EN interface and social placeholders.
const translations = {
  "Soluciones industriales especializadas en Guatemala": "Specialized industrial solutions in Guatemala",
  "Lun–Vie · 9:00 a 16:00": "Mon–Fri · 9:00 AM to 4:00 PM",
  "Soluciones": "Solutions",
  "Aplicaciones": "Applications",
  "Nuestro legado": "Our legacy",
  "Empresa": "Company",
  "Contacto": "Contact",
  "Llamar": "Call",
  "Cotizar por WhatsApp": "Quote via WhatsApp",
  "Cuatro generaciones · Tradición desde c. 1910": "Four generations · Tradition since c. 1910",
  "Ingeniería en ": "Engineering in ",
  "cepillería industrial": "industrial brush manufacturing",
  " y soluciones de filtración.": " and filtration solutions.",
  "Transformamos más de un siglo de conocimiento familiar en soluciones para cepillería industrial, filtración, tejidos y componentes para procesos industriales.": "We transform more than a century of family knowledge into solutions for industrial brushes, filtration, fabrics and components for industrial processes.",
  "Solicitar asesoría": "Request advice",
  "Conocer soluciones": "Explore solutions",
  "Fabricación especializada": "Specialized manufacturing",
  "Soluciones según aplicación": "Application-specific solutions",
  "Atención técnica": "Technical support",
  "Para industria y mantenimiento": "For industry and maintenance",
  "Respuesta directa": "Direct response",
  "Contacto ágil por WhatsApp": "Fast contact via WhatsApp",
  "SOLUCIONES DIMACSA": "DIMACSA SOLUTIONS",
  "Especialización industrial que se adapta a su proceso.": "Industrial specialization tailored to your process.",
  "Desde cepillería técnica hasta repuestos de filtración, buscamos que cada solución responda a la función que realmente necesita su equipo.": "From technical brushes to filtration spare parts, we aim for every solution to match the function your equipment truly requires.",
  "CEPILLERÍA": "BRUSHES",
  "Cepillos industriales": "Industrial brushes",
  "Fabricación de soluciones de cepillado para aplicaciones de limpieza, arrastre, acabado, proceso y mantenimiento industrial.": "Manufacturing of brushing solutions for cleaning, conveying, finishing, processing and industrial maintenance applications.",
  "Opciones para equipos y procesos": "Options for equipment and processes",
  "Atención a requerimientos especiales": "Support for special requirements",
  "Consultar una aplicación": "Ask about an application",
  "FILTRACIÓN": "FILTRATION",
  "Repuestos de filtración": "Filtration spare parts",
  "Componentes y repuestos para apoyar el funcionamiento y mantenimiento de sistemas y equipos de filtración industrial.": "Components and spare parts to support the operation and maintenance of industrial filtration systems and equipment.",
  "Solicitar repuesto": "Request a spare part",
  "Soluciones especiales": "Special solutions",
  "Cuando una pieza estándar no resuelve el problema, evaluamos el requerimiento para proponer una solución adecuada a su operación.": "When a standard part does not solve the problem, we assess the requirement to propose a solution suited to your operation.",
  "Enviar requerimiento": "Send requirement",
  "Selección y cotización": "Selection and quotation",
  "Comparta fotografías, medidas, función del equipo o una muestra del repuesto para orientar la cotización de forma más precisa.": "Share photos, dimensions, equipment function or a sample of the spare part so we can prepare a more accurate quotation.",
  "Enviar por WhatsApp": "Send via WhatsApp",
  "APLICACIONES": "APPLICATIONS",
  "Diseñado para el entorno industrial.": "Designed for industrial environments.",
  "DIMACSA atiende necesidades donde la continuidad de operación, el mantenimiento y la adaptación al equipo son factores importantes.": "DIMACSA supports needs where operational continuity, maintenance and equipment adaptation are critical factors.",
  "Procesos de manufactura y líneas de producción": "Manufacturing processes and production lines",
  "Limpieza técnica y mantenimiento de maquinaria": "Technical cleaning and machinery maintenance",
  "Sistemas de aspiración, polvo y filtración": "Dust extraction, aspiration and filtration systems",
  "Equipos con requerimientos especiales o repuestos específicos": "Equipment with special requirements or specific spare parts",
  "Soluciones que trabajan con su industria.": "Solutions that work with your industry.",
  "CÓMO TRABAJAMOS": "HOW WE WORK",
  "De la necesidad a una solución clara.": "From a need to a clear solution.",
  "Comparta su necesidad": "Share your need",
  "Indique qué necesita resolver, el tipo de equipo y la función del componente.": "Tell us what you need to solve, the equipment type and the component's function.",
  "Revisamos la aplicación": "We review the application",
  "Fotografías, medidas, muestra o datos técnicos ayudan a orientar la solución.": "Photos, dimensions, samples or technical data help guide the solution.",
  "Preparamos la propuesta": "We prepare the proposal",
  "Se define el alcance y se presenta una cotización de acuerdo con el requerimiento.": "We define the scope and present a quotation based on the requirement.",
  "Fabricación o suministro": "Manufacturing or supply",
  "Se coordina la solución aprobada y el seguimiento correspondiente.": "We coordinate the approved solution and the corresponding follow-up.",
  "CRECIMIENTO DIGITAL": "DIGITAL GROWTH",
  "Preparada para evolucionar a ventas en línea.": "Ready to evolve into online sales.",
  "La estructura de esta página puede ampliarse en una segunda etapa con catálogo de productos de venta general, carrito de compra y pasarela de pago, manteniendo la imagen corporativa.": "This website structure can be expanded in a second phase with a general product catalog, shopping cart and payment gateway while preserving the corporate image.",
  "Catálogo": "Catalog",
  "Carrito": "Cart",
  "Pagos en línea": "Online payments",
  "Inventario": "Inventory",
  "NUESTRO LEGADO": "OUR LEGACY",
  "Cuatro generaciones transformando experiencia en soluciones industriales.": "Four generations transforming experience into industrial solutions.",
  "La tradición familiar en la fabricación de cepillos tiene antecedentes documentados alrededor de 1910. Desde entonces, el conocimiento se ha transmitido, perfeccionado y ampliado hasta convertirse en la capacidad industrial que hoy representa DIMACSA.": "Our family's brush-manufacturing tradition has documented roots dating to around 1910. Since then, knowledge has been passed down, refined and expanded into the industrial capability DIMACSA represents today.",
  "“La madurez de una empresa no se mide solo en años, sino en el conocimiento que logra transformar y transmitir de una generación a otra.”": "“A company's maturity is measured not only in years, but in the knowledge it transforms and passes from one generation to the next.”",
  "PRIMERA GENERACIÓN · c. 1910": "FIRST GENERATION · c. 1910",
  "Los primeros pasos — La Industria": "The first steps — La Industria",
  "Los primeros antecedentes familiares conocidos se vinculan a La Industria. Allí comenzó un oficio especializado que se mantuvo vivo mediante la experiencia transmitida dentro de la familia.": "The earliest known family roots are linked to La Industria. There, a specialized craft began and remained alive through experience passed down within the family.",
  "SEGUNDA GENERACIÓN": "SECOND GENERATION",
  "CEIMA — Cepillos Industriales Marroquín": "CEIMA — Cepillos Industriales Marroquín",
  "Nuestro abuelo ": "Our grandfather ",
  "Joaquín Marroquín": "Joaquín Marroquín",
  " continuó la tradición con CEIMA. Esta etapa consolidó el conocimiento familiar y representa un eslabón fundamental en la transmisión del oficio hacia las siguientes generaciones.": " continued the tradition with CEIMA. This stage consolidated the family's knowledge and became a key link in passing the craft to the generations that followed.",
  "TERCERA GENERACIÓN": "THIRD GENERATION",
  "Industria de Cepillos CALI": "Industria de Cepillos CALI",
  "La siguiente generación convirtió la experiencia heredada en una capacidad más industrial: nuevos procesos, materiales, diseños, acabados, aplicaciones y servicios de reparación y reacondicionamiento.": "The next generation turned inherited experience into a more industrial capability: new processes, materials, designs, finishes, applications, and repair and reconditioning services.",
  "CUARTA GENERACIÓN · 2023": "FOURTH GENERATION · 2023",
  "Una nueva visión — DIMACSA": "A new vision — DIMACSA",
  "DIMACSA toma todo lo aprendido durante generaciones y lo proyecta hacia una empresa con mayor estructura y capacidad de crecimiento, incorporando cepillería, filtración, telas y tejidos industriales, y accesorios para molinería.": "DIMACSA takes everything learned across generations and projects it into a company with greater structure and growth capacity, incorporating brushes, filtration, industrial fabrics and textiles, and milling accessories.",
  "De una generación a otra": "From one generation to the next",
  "El nombre ha cambiado. La experiencia permanece.": "The name has changed. The experience remains.",
  "Una historia que comenzó con un oficio, evolucionó con cada generación y hoy se transforma en soluciones técnicas para la industria.": "A story that began with a craft, evolved with each generation, and today becomes technical solutions for industry.",
  "EMPRESA": "COMPANY",
  "Experiencia heredada. Capacidad industrial para el presente.": "Inherited experience. Industrial capability for today.",
  "DIMACSA es la continuidad de cuatro generaciones vinculadas a la fabricación de cepillos y la evolución de ese conocimiento hacia nuevas soluciones industriales. Nuestro propósito es comprender cada necesidad técnica y convertirla en una respuesta confiable para el cliente.": "DIMACSA is the continuation of four generations connected to brush manufacturing and the evolution of that knowledge into new industrial solutions. Our purpose is to understand each technical need and turn it into a reliable answer for the customer.",
  "Razón social": "Legal name",
  "Marca": "Brand",
  "Ubicación": "Location",
  "Horario": "Hours",
  "Lunes a viernes · 9:00 a 16:00": "Monday to Friday · 9:00 AM to 4:00 PM",
  "CONTACTO": "CONTACT",
  "Cuéntenos qué necesita resolver.": "Tell us what you need to solve.",
  "Puede enviarnos una descripción, fotografías, medidas o referencias del equipo. Con esa información podremos orientar mejor la consulta.": "You can send us a description, photos, dimensions or equipment references. With that information we can better guide your inquiry.",
  "WhatsApp": "WhatsApp",
  "Correo": "Email",
  "Solicitar cotización": "Request a quotation",
  "Le ayudamos a estructurar su consulta.": "We help you structure your inquiry.",
  "Nombre y apellido": "Full name",
  "Teléfono": "Phone",
  "¿Qué necesita?": "What do you need?",
  "Seleccione una opción": "Select an option",
  "Cepillo industrial": "Industrial brush",
  "Repuesto de filtración": "Filtration spare part",
  "Solución especial": "Special solution",
  "Asesoría / cotización": "Advice / quotation",
  "Otro requerimiento": "Other requirement",
  "Detalle": "Details",
  "Enviar consulta por WhatsApp": "Send inquiry via WhatsApp",
  "El formulario abre WhatsApp con la información preparada; no almacena sus datos en este sitio.": "The form opens WhatsApp with the prepared information; it does not store your data on this website.",
  "Navegación": "Navigation",
  "Llamar +502 3877 3515": "Call +502 3877 3515",
  "Cuatro generaciones de experiencia aplicadas a soluciones industriales.": "Four generations of experience applied to industrial solutions."
 };

Object.assign(translations, {
  " y soluciones para procesos industriales.": " and solutions for industrial processes.",
  "Transformamos más de un siglo de conocimiento familiar en soluciones para cepillería industrial, mangas y filtración, telas y tejidos, accesorios para molinería y componentes para procesos industriales.": "We transform more than a century of family knowledge into solutions for industrial brushes, filter bags and filtration, fabrics and textiles, milling accessories, and components for industrial processes.",
  "Integramos cepillería técnica, filtración, mangas, tejidos y componentes para molinería, buscando que cada solución responda a la función que realmente necesita su proceso.": "We integrate technical brushes, filtration, filter bags, textiles and milling components, aiming for each solution to match the function your process truly requires.",
  "Mangas y productos de filtración": "Filter bags and filtration products",
  "Mangas, componentes y repuestos para apoyar procesos de captación, separación de partículas y mantenimiento de sistemas de filtración industrial.": "Filter bags, components and spare parts to support dust collection, particle separation and maintenance of industrial filtration systems.",
  "Consultar filtración": "Ask about filtration",
  "TEJIDOS Y MOLINERÍA": "TEXTILES & MILLING",
  "Telas, tejidos y accesorios": "Fabrics, textiles and accessories",
  "Telas y tejidos industriales, además de accesorios para molinería y componentes seleccionados de acuerdo con las necesidades del proceso.": "Industrial fabrics and textiles, plus milling accessories and components selected according to process requirements.",
  "Consultar aplicación": "Ask about an application",
  "SERVICIO TÉCNICO": "TECHNICAL SERVICE",
  "ASESORÍA": "ADVICE",
  "Reparación y reacondicionamiento": "Repair and reconditioning",
  "Evaluamos cepillos y componentes para determinar opciones de reparación, reacondicionamiento, sustitución o fabricación especial.": "We evaluate brushes and components to determine repair, reconditioning, replacement or custom manufacturing options.",
  "Enviar fotos y medidas": "Send photos and dimensions",
  "Sistemas de aspiración, mangas, polvo y filtración": "Dust extraction, filter bag and filtration systems",
  "Molinería, tejidos industriales y equipos con requerimientos especiales": "Milling, industrial textiles and equipment with special requirements",
  "TRABAJOS Y PRODUCTOS REALES": "REAL WORK & PRODUCTS",
  "Experiencia que se ve en cada solución.": "Experience you can see in every solution.",
  "Una muestra de cepillos fabricados, equipos atendidos y componentes para procesos industriales que forman parte de la capacidad técnica de DIMACSA.": "A sample of manufactured brushes, serviced equipment and industrial process components that reflect DIMACSA's technical capabilities.",
  "Cepillos instalados": "Installed brushes",
  "Soluciones adaptadas al equipo y a la función requerida.": "Solutions adapted to the equipment and required function.",
  "Cepillos cilíndricos": "Cylindrical brushes",
  "Configuraciones para limpieza, arrastre y proceso.": "Configurations for cleaning, conveying and processing.",
  "Cepillos circulares y de disco": "Circular and disc brushes",
  "Fabricación según diámetro, material y aplicación.": "Manufactured according to diameter, material and application.",
  "Fabricación especializada": "Specialized manufacturing",
  "Diferentes geometrías, materiales y acabados.": "Different geometries, materials and finishes.",
  "Cepillos rotativos": "Rotary brushes",
  "Opciones para mantenimiento y procesos específicos.": "Options for maintenance and specific processes.",
  "Filtración y molinería": "Filtration and milling",
  "Mangas, tejidos y componentes para apoyar diferentes procesos industriales.": "Filter bags, textiles and components to support different industrial processes.",
  "ARCHIVO HISTÓRICO FAMILIAR": "FAMILY HISTORICAL ARCHIVE",
  "El oficio que dio origen a una experiencia que continúa evolucionando.": "The craft that gave rise to experience that continues to evolve.",
  "Esta fotografía forma parte del archivo familiar y documenta la tradición cepillera que precede a la etapa actual de DIMACSA.": "This photograph is part of the family archive and documents the brush-making tradition that predates DIMACSA's current stage.",
  "Tradición": "Tradition",
  "Filtración / mangas": "Filtration / filter bags",
  "Telas / tejidos / molinería": "Fabrics / textiles / milling",
  "Reparación / reacondicionamiento": "Repair / reconditioning",
  "Cepillería industrial, filtración, tejidos y componentes para procesos industriales.": "Industrial brushes, filtration, textiles and components for industrial processes.",
  "Fotografías de productos, equipos y archivo histórico proporcionadas por DIMACSA.": "Product, equipment and historical archive photographs provided by DIMACSA."
});

const originalText = new WeakMap();
const originalPlaceholders = new WeakMap();

function walkTextNodes(root, callback) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      if (node.parentElement && ['SCRIPT','STYLE'].includes(node.parentElement.tagName)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  const nodes=[]; let node;
  while ((node=walker.nextNode())) nodes.push(node);
  nodes.forEach(callback);
}

Object.assign(translations, {"Inicio": "Home", "Nosotros": "About us", "Productos": "Products", "Blog": "Blog", "Tradición desde 1910": "Tradition since 1910", "Fabricación especializada": "Specialized manufacturing", "Ingeniería de precisión a su medida": "Precision engineering tailored to your needs", "Atención técnica": "Technical support", "Respaldo técnico especializado": "Specialized technical support", "Expertos a un clic de distancia": "Experts one click away", "Atención personalizada y ágil por WhatsApp": "Fast, personalized support via WhatsApp", "NUESTRO PROCESO TÉCNICO": "OUR TECHNICAL PROCESS", "Su necesidad, nuestra respuesta técnica.": "Your needs, our technical response.", "PROYECTOS Y APLICACIONES REALES": "REAL PROJECTS AND APPLICATIONS", "Experiencia aplicada en cada solución.": "Experience applied to every solution.", "VISIÓN": "VISION", "MISIÓN": "MISSION", "Conocimiento para la industria.": "Knowledge for industry.", "Próximamente compartiremos artículos sobre cepillería industrial, filtración, mantenimiento y aplicaciones técnicas.": "We will soon share articles on industrial brushes, filtration, maintenance and technical applications.", "Transformamos más de un siglo de conocimiento familiar en soluciones industriales de Cepillería, Filtración y Equipamiento.": "We transform over a century of family expertise into industrial solutions for brushing, filtration and equipment.", "Fabricamos soluciones técnicas a la medida de cada industria. Especialistas en cepillería, filtración y equipamiento industrial, combinamos nuestra trayectoria y capacidad técnica para garantizar la máxima eficiencia en sus operaciones.": "We manufacture technical solutions tailored to each industry. As specialists in industrial brushing, filtration and equipment, we combine experience and technical expertise to maximize operational efficiency.", "CEPILLERÍA INDUSTRIAL": "INDUSTRIAL BRUSHES", "FILTRACIÓN INDUSTRIAL": "INDUSTRIAL FILTRATION", "EQUIPAMIENTO INDUSTRIAL": "INDUSTRIAL EQUIPMENT", "REACONDICIONAMIENTO": "REFURBISHMENT", "Una solución para cada aplicación": "A solution for every application", "Filtración y Mantenimiento": "Filtration and Maintenance", "Optimice su inversión": "Optimize your investment", "Fabricamos cepillos industriales a medida, utilizando materiales y fibras seleccionados rigurosamente según las condiciones específicas de su operación para garantizar el máximo rendimiento.": "We manufacture custom industrial brushes using carefully selected materials and fibers to match operating conditions and maximize performance.", "Proveemos mangas, componentes y repuestos industriales. Fabricamos soluciones de filtración a medida, diseñadas para máxima eficiencia en la captación de polvo y calidad del aire.": "We supply filter bags, industrial components and spare parts. We manufacture customized filtration solutions for efficient dust collection and air quality.", "Integramos tecnología y repuestos especializados para sus procesos productivos. Ofrecemos equipamiento diseñado a la medida para garantizar operaciones fluidas, seguras y altamente eficientes.": "We integrate specialized technology and spare parts into your production processes, with custom equipment for smooth, safe and efficient operations.", "Evite gastos innecesarios de reemplazo. DIMACSA evalúa sus cepillos industriales y aplica procesos de restauración: reparación, cambio de fibra y ajustes de configuración. Restauramos el rendimiento de sus herramientas para que sigan operando al máximo nivel, reduciendo sus costos a largo plazo.": "Avoid unnecessary replacement costs. DIMACSA evaluates industrial brushes and restores them through repairs, fiber replacement and configuration adjustments to extend service life and reduce long-term costs.", "Soluciones bajo especificación.": "Solutions built to specification.", "Nuestra capacidad técnica": "Our technical capabilities", "Sectores y soluciones especializadas": "Specialized sectors and solutions", "¿Su industria no aparece en este listado?": "Is your industry not listed?", "Describa su requerimiento": "Describe your requirements", "Evaluación de viabilidad técnica": "Technical feasibility assessment", "Propuesta técnica personalizada": "Customized technical proposal", "Ejecución y suministro técnico": "Technical execution and supply", "Cepillos instalados": "Installed brushes", "Cepillos cilíndricos": "Cylindrical brushes", "Cepillos circulares": "Circular brushes", "Cepillos lineales y especiales": "Linear and specialty brushes", "Cepillos rotativos": "Rotary brushes", "Cepillos escobillones y filtración": "Industrial brushes and filtration", "Cuando el producto estándar no logra optimizar los ciclos operativos, nuestro departamento técnico desarrolla soluciones a medida. No limitamos nuestra propuesta a una simple fabricación; validamos técnicamente la viabilidad mecánica, térmica y operativa de cada uno de nuestros productos para garantizar su mejor desempeño.": "When standard products cannot optimize operating cycles, our technical team develops custom solutions. We assess mechanical, thermal and operating feasibility to achieve reliable performance.", "Condiciones de operación: temperatura, presión y ciclos de trabajo.": "Operating conditions: temperature, pressure and duty cycles.", "Compatibilidad de materiales: fibras técnicas, polímeros y metales.": "Material compatibility: technical fibers, polymers and metals.", "Validación de medidas y diseño eficiente para facilitar la instalación.": "Dimension validation and efficient design for easy installation.", "Precisión geométrica y mejora de mecanismos de sujeción.": "Geometric precision and improved fastening systems.", "Nuestra capacidad técnica y versatilidad nos permiten desarrollar soluciones de cepillería, filtración y equipamiento industrial adaptadas a las exigencias de diversos sectores.": "Our technical expertise enables custom brushing, filtration and equipment solutions for many industries.", "Agroindustria y Procesamiento de Alimentos:": "Agriculture and Food Processing:", "Manufactura, Construcción y Materiales:": "Manufacturing, Construction and Materials:", "Sector Público, Mantenimiento e Infraestructura:": "Public Sector, Maintenance and Infrastructure:", "Industria General:": "General Industry:", "alta higiene y eficiencia en el manejo de materia prima.": "high hygiene and efficient raw-material handling.", "procesos de transformación, producción de piezas y materiales de alto impacto.": "transformation processes, parts production and demanding materials.", "suministros técnicos para mantenimiento y operatividad.": "technical supplies for maintenance and operations.", "componentes de ingeniería aplicables a diversos procesos productivos.": "engineered components for a wide range of production processes.", "Nuestro equipo técnico está listo para analizar su requerimiento y validar una solución personalizada.": "Our technical team is ready to review your requirements and validate a custom solution.", "Ayúdenos a diseñar la pieza ideal para su proceso. Indíquenos qué problema necesita solucionar, en qué equipo operará el componente y cuál es su función principal. Nuestro equipo técnico evaluará sus datos para ofrecerle una solución hecha a la medida. ¿Cuenta con planos, fotos o muestras físicas? Compártalos para agilizar el análisis técnico.": "Help us design the right part for your process. Tell us about the problem, the equipment and the component’s purpose. Share drawings, photos or physical samples to speed up technical assessment.", "Su información es la base de nuestra solución. Evaluamos sus muestras físicas y especificaciones técnicas para desarrollar un producto que se ajuste con precisión a los requerimientos de su equipo y funciones de operación.": "Your information is the foundation of our solution. We assess samples and technical specifications to develop a product that precisely fits your equipment and operating requirements.", "Formalizamos el requerimiento mediante una oferta detallada. Definimos el alcance del proyecto para validar los alcances técnicos y asegurar la eficiencia operativa que su planta necesita.": "We formalize your requirements in a detailed proposal, defining project scope and technical criteria to support operational efficiency.", "Iniciamos la manufactura siguiendo los estándares técnicos validados, asegurando la trazabilidad y calidad en cada etapa. Gestionamos el proceso de producción y entrega con seguimiento para garantizar que la solución se integre correctamente en su cronograma operativo.": "We manufacture according to validated technical standards, with quality checks and traceability. We coordinate production and delivery to fit your operational schedule.", "Presentamos nuestro alcance técnico: proyectos de cepillería, sistemas de filtración y equipamiento de precisión. Soluciones reales fabricadas para elevar la eficiencia operativa de nuestros clientes. Cada pieza refleja nuestro compromiso con la optimización de los procesos industriales.": "Explore real industrial brush, filtration and precision equipment projects designed to improve our customers’ operational efficiency.", "Desde 1910, cuatro generaciones de nuestra familia han transmitido y perfeccionado su conocimiento en cepillería industrial. Hoy DIMACSA combina esa experiencia con soluciones de filtración y equipamiento para responder a las necesidades de la industria.": "Since 1910, four generations of our family have passed down and refined industrial brushing expertise. Today DIMACSA combines that legacy with filtration and equipment solutions.", "Ser el referente regional en cepillería y filtración industrial, reconocidos por nuestra capacidad de integrar soluciones técnicas que potencian la eficiencia operativa de nuestros clientes.": "To be a regional leader in industrial brushes and filtration, recognized for technical solutions that improve our customers’ operational efficiency.", "Optimizar la productividad industrial mediante la fabricación de cepillería y soluciones de filtración de alto desempeño, transformando necesidades técnicas en resultados confiables.": "To improve industrial productivity through high-performance brush and filtration solutions, transforming technical needs into reliable results.", "Comprometidos con su productividad industrial.": "Committed to industrial productivity.", "Combinamos experiencia familiar y atención técnica especializada para ofrecer soluciones confiables en cepillería, filtración y equipamiento industrial.": "We combine family expertise with specialized technical support to deliver reliable industrial brushing, filtration and equipment solutions."});
function setLanguage(lang) {
  document.documentElement.lang = lang;
  walkTextNodes(document.body, node => {
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
    const es = originalText.get(node);
    if (lang === 'en') {
      let translated = es;
      Object.keys(translations).sort((a,b)=>b.length-a.length).forEach(key => {
        if (translated.includes(key)) translated = translated.split(key).join(translations[key]);
      });
      node.nodeValue = translated;
    } else {
      node.nodeValue = es;
    }
  });

  document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(el => {
    if (!originalPlaceholders.has(el)) originalPlaceholders.set(el, el.placeholder);
    const es = originalPlaceholders.get(el);
    const placeholders = {
      'Su nombre':'Your name','Nombre de empresa':'Company name','Ej. 5555 5555':'E.g. 5555 5555',
      'Describa la aplicación, medidas, equipo o problema que desea resolver...':'Describe the application, dimensions, equipment or problem you need to solve...'
    };
    el.placeholder = lang === 'en' ? (placeholders[es] || es) : es;
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
  localStorage.setItem('dimacsa-lang', lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => btn.addEventListener('click', () => setLanguage(btn.dataset.lang)));
setLanguage(localStorage.getItem('dimacsa-lang') === 'en' ? 'en' : 'es');

const notice = document.createElement('div');
notice.className='site-notice';
document.body.appendChild(notice);
let noticeTimer;
function showNotice(message){
  notice.textContent=message;
  notice.classList.add('is-visible');
  clearTimeout(noticeTimer);
  noticeTimer=setTimeout(()=>notice.classList.remove('is-visible'),2600);
}
document.querySelectorAll('[data-social-pending]').forEach(btn => {
  btn.addEventListener('click', () => {
    const network=btn.dataset.socialPending;
    const lang=document.documentElement.lang;
    showNotice(lang==='en' ? `${network} link will be added soon.` : `El enlace de ${network} se agregará próximamente.`);
  });
});

// In-place galleries, keeping the original image cards and their positions.
const dimacsaGalleries = {"instalados": ["assets/images/cepillos-instalados1.JPG", "assets/images/cepillos-instalados2.JPG", "assets/images/cepillos-instalados3.JPG", "assets/images/cepillos-instalados4.JPG", "assets/images/cepillos-instalados5.JPG"], "cilindricos": ["assets/images/cepillos-cilindricos1.jpg", "assets/images/cepillos-cilindricos2.jpg", "assets/images/cepillos-cilindricos3.jpg", "assets/images/cepillos-cilindricos4.jpg", "assets/images/cepillos-cilindricos5.jpg", "assets/images/cepillos-cilindricos6.jpg"], "circulares": ["assets/images/cepillos-circulares1.jpg", "assets/images/cepillos-circulares2.jpg", "assets/images/cepillos-circulares3.jpg"], "especiales": ["assets/images/cepillos-varios1.JPG", "assets/images/cepillos-varios2.JPG", "assets/images/cepillos-trenzados1.jpg"], "rotativos": ["assets/images/cepillo-rotativo1.JPG", "assets/images/cepillo-rotativo2.JPG", "assets/images/cepillo-rotativo3.JPG", "assets/images/cepillo-rotativo4.JPG", "assets/images/cepillo-rotativo5.JPG", "assets/images/cepillo-rotativo6.JPG"], "escobillones": ["assets/images/cepillos-belleza1.JPG", "assets/images/cepillos-belleza2.JPG", "assets/images/molineria1.png", "assets/images/molineria2.png", "assets/images/molineria3.png", "assets/images/molineria4.png"]};

const galleryDialog=document.createElement('dialog');galleryDialog.className='dimacsa-gallery';galleryDialog.innerHTML='<button type="button" class="gallery-close" aria-label="Cerrar galería">×</button><button type="button" class="gallery-prev" aria-label="Anterior">‹</button><img alt="Producto DIMACSA"><button type="button" class="gallery-next" aria-label="Siguiente">›</button><p class="gallery-counter"></p>';document.body.appendChild(galleryDialog);
let currentPhotos=[], currentPhotoIndex=0;
function showGalleryPhoto(){const img=galleryDialog.querySelector('img');img.src=currentPhotos[currentPhotoIndex];galleryDialog.querySelector('.gallery-counter').textContent=(currentPhotoIndex+1)+' / '+currentPhotos.length;}
function openDimacsaGallery(key){currentPhotos=dimacsaGalleries[key]||[];if(!currentPhotos.length)return;currentPhotoIndex=0;showGalleryPhoto();galleryDialog.showModal();}
document.querySelectorAll('[data-gallery]').forEach(card=>{card.addEventListener('click',()=>openDimacsaGallery(card.dataset.gallery));card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openDimacsaGallery(card.dataset.gallery);}});});
galleryDialog.querySelector('.gallery-close').addEventListener('click',()=>galleryDialog.close());galleryDialog.querySelector('.gallery-prev').addEventListener('click',()=>{currentPhotoIndex=(currentPhotoIndex-1+currentPhotos.length)%currentPhotos.length;showGalleryPhoto();});galleryDialog.querySelector('.gallery-next').addEventListener('click',()=>{currentPhotoIndex=(currentPhotoIndex+1)%currentPhotos.length;showGalleryPhoto();});galleryDialog.addEventListener('click',e=>{if(e.target===galleryDialog)galleryDialog.close();});
document.querySelectorAll('.nav-social').forEach(b=>b.addEventListener('click',()=>showNotice(document.documentElement.lang==='en' ? b.dataset.socialPending+' link pending.' : 'Enlace de '+b.dataset.socialPending+' pendiente de confirmar.')));
