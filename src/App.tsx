import { Sprout, BarChart3, CloudRain, ShieldCheck, ArrowRight, Activity } from 'lucide-react';
import { useState } from 'react';

function App() {
  const whatsappNumber = "584121510662";
  const whatsappMessage = encodeURIComponent("Hola, equipo de Web Bonding. Estoy interesado en el sistema administrativo agrícola con tecnología satelital para mi finca. Me gustaría recibir más información.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const [activeTab, setActiveTab] = useState(0);

  const metodosData = [
    {
      id: 'ndvi',
      label: 'Índice NDVI (Nutrición)',
      title: 'Monitoreo de Cultivos EOSDA',
      desc: 'La agricultura de precisión utiliza datos satelitales, análisis de suelo y GPS para tomar decisiones informadas sobre las necesidades del campo. Con nuestra integración API de EOSDA, podrás ver la deficiencia de nitrógeno en tu maíz antes de que la hoja se ponga amarilla.',
      stat: '40%',
      statDesc: 'Ahorro en fertilizantes al aplicar solo donde el mapa lo indica.',
      badge: 'API Activa',
      image: 'https://images.unsplash.com/photo-1732112622699-fd32f6e7b19e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 'ndwi',
      label: 'Índice NDWI (Humedad)',
      title: 'Control de Estrés Hídrico',
      desc: 'El índice NDWI permite monitorear el contenido de agua en las hojas y el suelo. Es una herramienta vital para el cultivo de arroz en Portuguesa, donde mantener el nivel exacto de humedad en las terrazas determina el rendimiento final.',
      stat: '25%',
      statDesc: 'Reducción en costos de bombeo al optimizar las horas-máquina.',
      badge: 'Monitoreo Hídrico',
      image: 'https://images.unsplash.com/photo-1694333338673-6c5bc98880b1?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 'gestion',
      label: 'Gestión Administrativa',
      title: 'Tu oficina conectada al campo',
      desc: 'Se acabaron las hojas de cálculo desactualizadas. En Web Bonding cruzamos todos tus costos operativos (nómina de cuadrillas, agroquímicos, combustible) con los datos satelitales para entregarte la rentabilidad exacta por hectárea.',
      stat: '100%',
      statDesc: 'Trazabilidad financiera, desde la preparación de tierra hasta el silo.',
      badge: 'Software a Medida',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'clima',
      label: 'Clima Hiperlocal',
      title: 'Anticipa el clima de tu finca',
      desc: 'Recibe pronósticos meteorológicos exactos para las coordenadas de tus lotes con hasta 14 días de anticipación. Fundamental para el ciclo norte-verano, donde una lluvia inesperada puede dañar la cosecha de frijol o lavar un herbicida.',
      stat: '14 Días',
      statDesc: 'De predicción climática exacta para planificar ventanas de trabajo.',
      badge: 'Alertas Meteorológicas',
      image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-600 antialiased selection:bg-emerald-900 selection:text-white">
      
      {/* 1. HERO SECTION COMPLETA (Estilo EcoFarm) */}
      <div className="p-2 sm:p-6 lg:p-8">
        <div className="relative rounded-[2.5rem] overflow-hidden min-h-[85vh] flex flex-col shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop" 
            alt="Campos verdes Portuguesa" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>

          {/* NAVBAR */}
          <nav className="relative z-10 w-full pt-6 px-6 sm:px-12 flex items-center justify-between text-white">
            <div className="flex items-center gap-2">
              <Sprout size={28} className="text-emerald-400" />
              <span className="font-bold text-xl tracking-tight">Web Bonding</span>
            </div>
            
            <div className="hidden md:flex gap-8 text-sm font-medium bg-white/10 backdrop-blur-md px-8 py-3 rounded-full border border-white/20">
              <a href="#nosotros" className="hover:text-emerald-300 transition-colors">Nosotros</a>
              <a href="#metodos" className="hover:text-emerald-300 transition-colors">Tecnología</a>
              <a href="#resultados" className="hover:text-emerald-300 transition-colors">Resultados</a>
              <a href="#proceso" className="hover:text-emerald-300 transition-colors">Implementación</a>
            </div>

            <a 
              href={whatsappLink} target="_blank" rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-3 rounded-full font-bold transition-all text-sm shadow-lg shadow-emerald-500/30"
            >
              Consultoría Gratis
            </a>
          </nav>

          {/* CONTENIDO DEL HERO */}
          <div className="relative z-10 flex-1 flex flex-col justify-center px-4 py-4 sm:px-12 lg:px-24 max-w-5xl">
            <h1 className="text-5xl sm:text-7xl lg:text-[5rem] font-bold text-white leading-[1.05] mb-8 tracking-tight">
              Agricultura inteligente <br /> para un agro <span className="text-emerald-400">más rentable.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-10 max-w-3xl leading-relaxed font-light">
              Experimenta el control total de tu agro-negocio. Integramos sistemas administrativos a medida con monitoreo satelital EOSDA para las fincas de Portuguesa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#metodos"
                className="bg-white text-emerald-950 px-8 py-2 rounded-full font-bold text-center hover:bg-gray-100 transition-all text-lg"
              >
                Explorar Soluciones
              </a>
              <a 
                href={whatsappLink} target="_blank" rel="noopener noreferrer"
                className="bg-transparent border border-white/50 backdrop-blur-sm text-white px-8 py-2 rounded-full font-bold text-center hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-lg"
              >
                Contactar a Web Bonding <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. SECCIÓN ABOUT US (We're shaping the future...) */}
      <section id="nosotros" className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div>
            <p className="text-emerald-800 font-bold mb-6 tracking-widest uppercase text-sm">Sobre Web Bonding</p>
            <div className="rounded-[2rem] overflow-hidden mb-10 h-80 shadow-2xl shadow-emerald-900/10">
              <img 
                src="https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=1000&auto=format&fit=crop" 
                alt="Manos con tierra" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
              <div>
                <h3 className="text-5xl font-bold text-emerald-950 mb-2">+20%</h3>
                <p className="text-sm font-medium text-gray-500">Rendimiento Insumos</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold text-emerald-950 mb-2">100%</h3>
                <p className="text-sm font-medium text-gray-500">Control Financiero</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-emerald-950 leading-[1.1] mb-8 tracking-tight">
              Diseñamos el futuro de tu siembra con tecnología a medida.
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-600">
              La agricultura de precisión no es un lujo, es la única forma de asegurar rentabilidad hoy. En Web Bonding desarrollamos el software exacto que tu finca en Portuguesa necesita, eliminando las hojas de cálculo genéricas.
            </p>
            <p className="text-lg leading-relaxed mb-10 text-gray-600">
              Cruzamos los datos administrativos de tu oficina con mapas de calor satelitales (NDVI/NDWI) desde el espacio, dándote visibilidad total de tu cosecha.
            </p>
            <a 
              href={whatsappLink} target="_blank" rel="noopener noreferrer"
              className="bg-emerald-950 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-800 transition-all inline-flex items-center gap-3 shadow-lg"
            >
              Saber más de la Agencia <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </section>

      {/* 3. SECCIÓN MÉTODOS / TECNOLOGÍA */}
      <section id="metodos" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 border-t border-gray-100">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Menú Interactivo */}
          <div className="lg:col-span-3 space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 pl-4">Tecnologías Integradas</h3>
            <div className="flex flex-col gap-1">
              {metodosData.map((metodo, index) => (
                <button
                  key={metodo.id}
                  onClick={() => setActiveTab(index)}
                  className={`text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                    activeTab === index 
                      ? 'bg-emerald-50 text-emerald-900 font-bold border-l-4 border-emerald-500' 
                      : 'text-gray-500 font-medium hover:bg-gray-50 border-l-4 border-transparent'
                  }`}
                >
                  {metodo.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contenido Dinámico */}
          <div className="lg:col-span-9">
            {/* Animación de entrada suave basada en el cambio de estado */}
            <div key={activeTab} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl lg:text-4xl font-bold text-emerald-950 mb-6 tracking-tight">
                {metodosData[activeTab].title}
              </h2>
              <p className="text-lg text-gray-600 mb-10 max-w-3xl leading-relaxed">
                {metodosData[activeTab].desc}
              </p>
              
              <div className="bg-emerald-50 rounded-[2rem] p-6 lg:p-10 flex flex-col md:flex-row gap-8 items-center border border-emerald-100 relative overflow-hidden">
                <div className="flex-1 relative z-10">
                  <h4 className="text-5xl font-bold text-emerald-900 mb-2">
                    {metodosData[activeTab].stat}
                  </h4>
                  <p className="text-emerald-800 font-medium mb-6">
                    {metodosData[activeTab].statDesc}
                  </p>
                  <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-bold text-emerald-700">
                    <Activity size={16} /> {metodosData[activeTab].badge}
                  </div>
                </div>
                <div className="flex-1 w-full relative z-10">
                  <img 
                    src={metodosData[activeTab].image} 
                    alt={metodosData[activeTab].title} 
                    className="rounded-2xl shadow-xl w-full h-48 lg:h-56 object-cover"
                  />
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3"></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. SECCIÓN RESULTADOS */}
      <section id="resultados" className="py-12 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative rounded-[2.5rem] overflow-hidden min-h-[600px] flex items-center shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1592982537447-6f2a6a0a5015?q=80&w=2000&auto=format&fit=crop" 
            alt="Tierra fértil" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-emerald-950/80 backdrop-blur-sm"></div>

          <div className="relative z-10 w-full px-6 lg:px-16 py-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-16 tracking-tight max-w-2xl leading-tight">
              Control absoluto, desde la siembra hasta el silo.
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[2rem] hover:bg-white/20 transition-all cursor-pointer">
                <BarChart3 className="text-emerald-300 mb-6" size={36} />
                <h3 className="text-3xl font-bold text-white mb-3">Maíz</h3>
                <p className="text-emerald-50 text-base leading-relaxed">Cruzamos el inventario de Urea con los mapas de deficiencia de nitrógeno para el eje Araure - Turén.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[2rem] hover:bg-white/20 transition-all cursor-pointer">
                <ShieldCheck className="text-emerald-300 mb-6" size={36} />
                <h3 className="text-3xl font-bold text-white mb-3">Arroz</h3>
                <p className="text-emerald-50 text-base leading-relaxed">Monitoreo del nivel de inundación (NDWI) y control de horas-máquina de las bombas en Agua Blanca.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[2rem] hover:bg-white/20 transition-all cursor-pointer">
                <CloudRain className="text-emerald-300 mb-6" size={36} />
                <h3 className="text-3xl font-bold text-white mb-3">Frijol</h3>
                <p className="text-emerald-50 text-base leading-relaxed">Predicción climática para evitar que la lluvia dañe la cosecha y pago automático a cuadrillas eventuales.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECCIÓN PROCESO */}
      <section id="proceso" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 bg-white">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-emerald-950 mb-4 tracking-tight">Implementación Sencilla</h2>
          <p className="text-lg text-gray-500">Adaptamos la tecnología a tu forma de trabajar, no al revés. Así es como Web Bonding moderniza tu finca paso a paso.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <InsightCard 
            image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
            tag="Fase 1"
            title="Auditoría Administrativa"
            desc="Analizamos cómo llevas la nómina, el inventario y tus costos actuales para programar el software exactamente con tus reglas y fórmulas de negocio."
          />
          <InsightCard 
            image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
            tag="Fase 2"
            title="Integración Satelital (API)"
            desc="Cargamos las coordenadas exactas de tus lotes y terrazas en el sistema para activar el monitoreo EOSDA de clima y salud vegetal."
          />
          <InsightCard 
            image="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=800&auto=format&fit=crop"
            tag="Fase 3"
            title="Capacitación y Despliegue"
            desc="Te entregamos el sistema llave en mano y capacitamos a tu equipo administrativo. Todo respaldado con soporte técnico continuo."
          />
        </div>
      </section>

      {/* 7. FOOTER CORPORATIVO */}
      <footer className="bg-gray-50 pt-20 pb-10 text-center border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-emerald-950 mb-8">¿Listo para llevar tu agro-negocio al siguiente nivel?</h2>
          <a 
            href={whatsappLink} target="_blank" rel="noopener noreferrer"
            className="bg-emerald-950 text-white px-10 py-4 rounded-full font-bold hover:bg-emerald-800 transition-all inline-block mb-16 shadow-xl"
          >
            Obtener Consultoría Gratuita
          </a>
          
          <div className="flex flex-col items-center justify-center gap-4 text-emerald-950 mb-8 border-t border-gray-200 pt-10">
            <Sprout size={32} />
            <span className="font-bold text-2xl tracking-tight">Web Bonding<span className="text-emerald-500">.</span></span>
            <span className="text-sm font-semibold text-gray-500">RIF: J-508043626</span>
          </div>
          <p className="text-sm text-gray-500 mb-2">Desarrollo de Software y Tecnología Satelital Agrícola.</p>
          <div className="text-xs text-gray-400">
            © {new Date().getFullYear()} Web Bonding. Transformando el campo en Portuguesa, Venezuela.
          </div>
        </div>
      </footer>
    </div>
  );
}

function InsightCard({ image, tag, title, desc }: { image: string, tag: string, title: string, desc: string }) {
  return (
    <div className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group">
      <div className="h-48 overflow-hidden relative">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-emerald-900 shadow-sm">
          {tag}
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-xl font-bold text-emerald-950 mb-3 tracking-tight">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default App;