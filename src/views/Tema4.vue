<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Camino, Sendero y Caminata
      
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Un sendero es un camino estrecho y generalmente natural, creado por el paso de personas o animales, o diseñado para actividades al aire libre, como caminatas y paseos. Los senderos suelen estar rodeados de naturaleza y pueden atravesar distintos tipos de terreno, como montañas, bosques, ríos o campos. Su propósito es facilitar el acceso a áreas naturales de una manera que minimice el impacto ambiental, permitiendo que las personas disfruten del entorno sin dañarlo.:
        p Además de sus funciones recreativas, los senderos también pueden tener un valor cultural, educativo o histórico, ya que en ocasiones siguen rutas antiguas o llevan a lugares de interés.
    .row.justify-content-start.align-items-center.mb-4
      .col-xl-5.col-lg-6.col-md-8
        .row.pe-lg-3.mb-2.fnd-1-3.align-items-center(data-aos="zoom-in")
          .col-auto.pe-2
            img(src="@/assets/curso/temas/tema2/img-3.svg", alt="Icono")
          .col.px-0
            h4.mb-0.tit-2 Marco histórico de los caminos

    p.mb-4 En la historia de Colombia, los caminos y senderos han sido fundamentales para la conexión entre regiones y el desarrollo cultural y económico del país. Desde tiempos precolombinos, los pueblos indígenas construyeron rutas que permitían el intercambio de bienes y saberes a través de diversas regiones, desde la costa hasta los Andes y la Amazonía. Estos caminos, conocidos como caminos ancestrales o "caminos de herradura", facilitaban el comercio, la comunicación y el movimiento de personas entre pueblos indígenas.  

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-3.col-md-8
        figure.mb-5
          img(src='@/assets/curso/temas/tema4/img-2.png', alt='')
      .col-lg-9
        p Algunos de estos caminos se integraron en la vasta red de caminos del Qhapaq Ñan o Camino Inca, un sistema de rutas que se extendía desde el sur de Colombia hasta el sur del Imperio Inca en Sudamérica. Estos caminos indígenas fueron esenciales en la construcción de un sentido de identidad y conexión entre los pueblos originarios y, en muchos casos, eran los únicos accesos a territorios remotos.
        .cajon.color-acento-botones.p-4.mb-4.fnd-1
          p.mb-0 Con la llegada de los colonizadores españoles, muchos de estos senderos indígenas se adaptaron y expandieron para facilitar el movimiento de tropas, bienes y pobladores entre los centros urbanos que comenzaban a formarse. Durante la colonia, se desarrollaron caminos reales, que conectaban las principales ciudades y puertos, facilitando el transporte de mercancías como oro, tabaco y alimentos hacia los mercados internacionales. Los caminos coloniales también fueron clave en los movimientos de independencia, pues los libertadores, como Simón Bolívar, usaron estas rutas para las campañas militares que llevaron a la independencia del país.
          
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-9
        .cajon.color-secundario.p-4.mb-4.fnd-1-1
          p.mb-0 En la época republicana y a medida que el país avanzaba hacia la modernidad, se construyeron carreteras y ferrocarriles para facilitar la conexión entre ciudades. Sin embargo, los senderos y caminos rurales continuaron siendo esenciales en zonas remotas donde la infraestructura moderna no llegaba. En el siglo XX, especialmente en la década de 1960, se promovió la construcción de carreteras y redes de transporte para unir aún más las regiones, pero muchos senderos rurales y caminos secundarios siguieron en uso, manteniendo la tradición y la conexión cultural entre comunidades.
      .col-lg-3.col-md-8
        figure
          img(src='@/assets/curso/temas/tema4/img-3.png', alt='')

    p.mb-4 Hoy en día, algunos de estos caminos históricos han sido recuperados como senderos ecoturísticos y rutas culturales, valorizando su importancia como patrimonio cultural e histórico. Rutas como el Camino Teyuna (hacia la Ciudad Perdida de los taironas en la Sierra Nevada de Santa Marta) y la Ruta Libertadora son ejemplo de ello, y permiten a locales y visitantes recorrer y explorar la historia y cultura del país.
    
    .row.justify-content-start.align-items-center.mb-4
      .col-lg-7.col-md-10.col-xl-5
        .row.pe-lg-3.mb-2.fnd-1-3.align-items-center(data-aos="zoom-in")
          .col-auto.pe-2
            img(src="@/assets/curso/temas/tema2/img-3.svg", alt="Icono")
          .col.px-0
            h4.mb-0.tit-2 Normas de utilización Precauciones

    .row.justify-content-center.align-items-center.mb-5  
      figure
        img(src="@/assets/curso/temas/tema4/img-4.png", alt="alt")

    .row.justify-content-center.align-items-center.mb-5
      .col-xl-10

        .row.justify-content-center
          .col-xl-4.col-lg-4.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema4/img-5.png", alt="alt")
              .crd_hover_txt--body
                h4.mb-3 Fuegos
                p.mb-0 se recomienda utilizar las zonas demarcadas para el fuego y solo en caso necesario puesto que resulta ser una actividad muy peligrosa.
          .col-xl-4.col-lg-4.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt.crd-2(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema4/img-6.png", alt="alt")
              .crd_hover_txt--body.crd-2
                h4.mb-3 Basuras
                p.mb-0 evitar al máximo dejar basuras; puede resultar peligrosa para los animales o para los próximos visitantes. No es difícil traer a casa la basura para ser eliminada con la basura diaria.
          .col-xl-4.col-lg-4.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt.crd-2(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema4/img-7.png", alt="alt")
              .crd_hover_txt--body.crd-3
                h4.mb-3.mb-lg-1 Flores, plantas, fauna
                p.mb-0 los valores de la naturaleza están dados por el respeto que nosotros tenemos ante una comunidad totalmente frágil. Se debe caminar con precaución, caminar por los senderos y caminos de herradura para evitar la erosión. No molestar ni destruir la fauna. Arrancar las flores impide su reproducción.

       

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-xl-4.col-md-8.mb-lg-4
        figure.mb-5
          img(src='@/assets/curso/temas/tema4/img-8.png', alt='') 
      .col-xl-8
        .row.pe-lg-3.mb-4.pnt.pb-3(data-aos="zoom-in")
          h4 Senderismo
          p Senderismo es un itinerario de excursión diseñado por caminos y senderos de forma original. Une la cultura y el deporte, y se considera de interés socio-económico, histórico, cultural, deportivo y turístico.
          h4 Objetivos
          .col-auto.pe-2.mt-1          
            img(src="@/assets/curso/temas/tema1/check.svg")
          .col.px-0
            p.mb-0   
              | Conocer el país con su historia, costumbres, folklore, y cultura de forma fácil y práctica. 
        .row.pe-lg-3.mb-4.pnt.pb-3(data-aos="zoom-in")
          .col-auto.pe-2.mt-1
            img(src="@/assets/curso/temas/tema1/check.svg")
          .col.px-0
            p.mb-0  
              | Ayudar a la recuperación y conservación de viejos caminos que conforman el patrimonio nacional.
        .row.pe-lg-3.mb-4.pnt.pb-3(data-aos="zoom-in")
          .col-auto.pe-2.mt-1
            img(src="@/assets/curso/temas/tema1/check.svg")
          .col.px-0
            p.mb-0  
              | Fomentar la actividad deportiva, recreativa, cultural y de salud en nuestro país.
        .row.pe-lg-3.mb-4.pnt.pb-3(data-aos="zoom-in")
          .col-auto.pe-2.mt-1
            img(src="@/assets/curso/temas/tema1/check.svg")
          .col.px-0
            p.mb-0  
              | Fomentar el valor de los recursos naturales.
        .row.pe-lg-3.mb-4.pnt.pb-3(data-aos="zoom-in")
          .col-auto.pe-2.mt-1
            img(src="@/assets/curso/temas/tema1/check.svg")
          .col.px-0
            p.mb-0  
              | Ayudar a crear alternativas recreativas y económicas.Ayudar a crear alternativas recreativas y económicas.


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-8
        h4 Caminata 
        p.mb-3 Es la actividad que realiza un visitante o turista, sobre senderos bordeados de un entorno natural y/o rural. Es en el presente la actividad más representativa del ecoturismo. Las caminatas se realizan con el propósito de recrearse en el tránsito de parajes naturales y/o rurales.
        p.mb-3 Se considera un instrumento socioeconómico y pedagógico de gran aporte para la apropiación de conceptos ecosistémicos, para el descubrimiento e interpretación y articulación de valores culturales e históricos, tanto del presente como del pasado.
        p.mb-5 Es una de las prácticas que cada día toman fuerza con el apoyo de instituciones estatales y privadas, con el compromiso de las comunidades de ayudar a preservar y el compromiso de un turismo responsable. 
        
      .col-lg-4.col-md-8
        figure
          img(src='@/assets/curso/temas/tema4/img-9.png', alt='')         
        
    .cajon.color-acento-botones.p-4.mb-5.fnd-1-5
      h4 Ritmos de marcha
      p.mb-0 De acuerdo con la experiencia, el hombre camina aproximadamente (3) kilómetros por hora en promedio. Con el ritmo de marcha se recomienda aprender a manejar el ritmo respiratorio y la frecuencia cardíaca. Se recomienda que cada caminante obtenga su propio ritmo de marcha de acuerdo con su capacidad física, siendo el ritmo respiratorio y la frecuencia cardiaca los dos principales orientadores en la búsqueda del ritmo apropiado.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img-10.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Hay que tener en cuenta la topografía del terreno y la duración de la caminata (grado de dificultad), en estos momentos, la preparación y disposición mental del individuo es mejor cuando cuenta con la información necesaria en términos de distancia y altitud.
        p.mb-0 En cuanto al estado físico se recomiendan las Técnicas de calentamiento que consiste en un estiramiento y preparación muscular teniendo en cuenta las piernas, tobillos, cadera, espalda y cuello para evitar accidentes o calambres durante la caminata. Así mismo, al terminar se recomienda un estiramiento de los músculos y articulaciones más usados durante el recorrido; este estiramiento garantiza un buen descanso y hace que desaparezcan molestias al día siguiente.

    h4 Equipo básico para una caminata
    p.mb-5 El morral: morral grande (60 a 90 kilos) y uno pequeño para caminatas por el sector (20 kilos), con tiras acolchadas para los hombros. Se debe cargar la cuarta parte del peso del caminante más un kilo, se debe cuidar la columna vertebral, el morral debe quedar ajustado al cuerpo y el mayor peso en la parte media alta.

    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-7
        .tarjeta.p-4.mb-5.px-xl-5.px-mb-2.fnd-2
          SlyderA(tipo="b")
            .row
              .h4 Dormir
              p.mb-0 Saco de dormir adecuado para la temperatura y el clima de la zona. Es recomendable elegir un saco de dormir ligero, fácil de comprimir, y con capacidad de mantener el calor en temperaturas bajas. Si la caminata se realiza en clima cálido, un saco de dormir de menor grosor será suficiente, mientras que para climas fríos, un saco de dormir con buena retención térmica y resistencia a la humedad es esencial.
            .row
              .h4 Aseo
              p.mb-0 Elementos de higiene personal compactos y ligeros, como un cepillo de dientes pequeño, jabón biodegradable, una toalla de microfibra (que se seca rápidamente y ocupa poco espacio), y papel higiénico. Es recomendable llevar el papel en una bolsa hermética para protegerlo de la humedad, y una bolsa adicional para desecharlo si es necesario.
            .row
              .h4 Calzado
              p.mb-0 Botas o zapatos de caminata con suela antideslizante y labrado profundo, que proporcionen tracción y estabilidad en terrenos irregulares o resbaladizos. Es importante que el calzado sea resistente al agua o de secado rápido, y que brinde soporte adecuado para el tobillo. Se recomienda probar el calzado con antelación para evitar rozaduras o incomodidades durante la caminata.
            .row
              .h4 Calzado de campamento
              p.mb-0 Sandalias o zapatos ligeros y cómodos para usar en el campamento, permitiendo que los pies descansen después de la caminata. Deben ser fáciles de empacar y ofrecer buena ventilación. Las sandalias con suela antideslizante son una excelente opción, ya que permiten movilidad en terrenos irregulares del campamento.
            .row
              .h4 Aislante térmico
              p.mb-0 Esterilla o colchoneta que proporcione aislamiento del suelo frío o húmedo. Un aislante térmico de espuma o inflable es ideal, ya que mejora la comodidad y ayuda a mantener el calor al dormir. Es recomendable elegir un aislante compacto y liviano para facilitar su transporte.
            .row
              .h4 Protección contra la lluvia
              p.mb-0 Plástico o poncho impermeable de buen tamaño para proteger tanto a la persona como a la mochila en caso de lluvia. Si se espera lluvia intensa, es ideal contar con un poncho resistente y de alta cobertura, o con fundas impermeables para la mochila.
            .row
              .h4 Sombrero o gorra
              p.mb-0 Sombrero de ala ancha o cachucha para proteger la cara y el cuello del sol. Es ideal que el material sea ligero, transpirable y con factor de protección solar (UPF). Los sombreros de ala ancha brindan mayor protección en climas soleados y calurosos.
            .row
              .h4 Protección solar e insectos
              p.mb-0 Bloqueador solar de amplio espectro (SPF 30 o superior) para evitar quemaduras solares, y repelente de insectos con ingredientes como DEET o picaridina, eficaces contra mosquitos y otros insectos. Se recomienda aplicarlos regularmente, especialmente en zonas de alta exposición al sol o con abundante vegetación.
            .row
              .h4 Bolsa para basura
              p.mb-0 Bolsa resistente para recoger toda la basura generada durante la caminata. Es importante recoger todos los residuos, incluyendo envoltorios de alimentos y materiales biodegradables, para dejar el entorno natural limpio. Llevar varias bolsas herméticas puede ayudar a mantener la mochila organizada y libre de olores.

      .col-lg-5.col-md-8
        figure.mb-5
          img(src='@/assets/curso/temas/tema4/img-11.png', alt='')

    h4.mb-5(data-aos="zoom-in") Equipo grupal
    
    figure.mb-5
      img(src='@/assets/curso/temas/tema4/img-12.png', alt='')

    .row.mb-5
      .col-md-6.col-xl-4.mb-4
        .tarjeta-numerada.color-acento-contenido.py-4.px-5.ter-n-1
          .tarjeta-numerada__numero
            .h2 1
          p.mb-0
            b Carpa, preferiblemente tipo iglú y sobre carpa hasta el piso.

      .col-md-6.col-xl-4.mb-4
        .tarjeta-numerada.color-acento-contenido.py-4.px-5.ter-n-2
          .tarjeta-numerada__numero
            .h2 2
          p.mb-0
            b Plástico grande como aislante de humedad: se coloca bajo la carpa.    
      .col-md-6.col-xl-4.mb-4
        .tarjeta-numerada.color-acento-contenido.py-4.px-5.ter-n-1
          .tarjeta-numerada__numero
            .h2 3
          p.mb-0
            b Estufa portátil de campamento o de gas.

      .col-md-6.col-xl-4.mb-4
        .tarjeta-numerada.color-acento-contenido.py-4.px-5.ter-n-2
          .tarjeta-numerada__numero
            .h2 4
          p.mb-0
            b Recipientes para preparar alimentos.

      .col-md-6.col-xl-4.mb-4
        .tarjeta-numerada.color-acento-contenido.py-4.px-5.ter-n-1
          .tarjeta-numerada__numero
            .h2 5
          p.mb-0 
            b Recipientes y agua potable. 
      .col-md-6.col-xl-4.mb-4
        .tarjeta-numerada.color-acento-contenido.py-4.px-5.ter-n-2
          .tarjeta-numerada__numero
            .h2 6
          p.mb-0 
            b Equipo no indispensable para los participantes.  

    h4.mb-5(data-aos="zoom-in") Equipo no indispensable para los participantes

    .row.justify-content-center.align-items-center.mb-5
      .col-xl-10
        .row.justify-content-center
          .col-xl-4.col-lg-4.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema4/img-13.png", alt="alt")
              .crd_hover_txt--body
                h4.mb-3 Comida
                p.mb-0 Si es para varios días o uno solo, hay que tener en cuenta el modo de almacenarla, la cantidad y el clima para hacer el requerimiento de manera que no se pierda. Respetar los productos de las huertas de los campesinos.
          .col-xl-4.col-lg-4.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt.crd-2(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema4/img-14.png", alt="alt")
              .crd_hover_txt--body.crd-2
                h4.mb-3 Cantimplora
                p.mb-0 Se recomienda tomar dos litros de agua como mínimo al día durante el esfuerzo físico. No desocupar la cantimplora hasta tener la seguridad de encontrar nuevamente líquido.
          .col-xl-4.col-lg-4.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt.crd-2(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema4/img-15.png", alt="alt")
              .crd_hover_txt--body.crd-3
                h4.mb-3 Botiquín
                p.mb-0 La palabra botiquín significa prevención a cargo de una persona responsable e idónea para su manejo.

    h4(data-aos="zoom-in") Ejemplo de preparación de una caminata
    p.mb-5 Preparar una caminata requiere atención a detalles y una buena planificación.

    h4(data-aos="zoom-in") La Preparación de una Caminata Segura y Responsable
    p.mb-5 Una caminata exitosa no solo depende de disfrutar del paisaje, sino también de la preparación y la seguridad. A continuación, se presentan los elementos esenciales a considerar antes, durante y después de la caminata.

    h4(data-aos="zoom-in") Equipos de Seguridad
    p.mb-5 Los equipos de seguridad son fundamentales para reducir las posibilidades de accidentes y garantizar que, en caso de que se presenten, las víctimas puedan recibir asistencia pronta y oportuna. 

    .row.justify-content-center.align-items-center.mb-5
      .col-xl-10
        .tabla-a.color-acento-contenido.mb-5 
          table.tbl
            caption Fuente: Sena 2024
            thead
              tr
                th(colspan="2") Clases de   Equipos
              tr
                td Tipo de   Equipo
                td Descripció                
            tbody
              
              tr
                td Equipos de Seguridad
                td Incluyen brújulas, mapas, guías   de ruta o turísticas, binoculares, linternas, etc.
              tr
                td Equipos de Comunicación
                td Comprenden pitos, teléfonos   móviles, radios, intercomunicadores y bengalas.
              tr
                td Equipos de Rescate y Salvamento
                td Compuestos por cuerdas   resistentes, arneses, picos, herramientas multiusos, ganchos y navajas.
              tr
                td Equipos de Primeros Auxilios
                td Incluyen un botiquín con vendas,   desinfectantes y analgésicos.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-xl-4.col-md-8.mb-5
        figure
          img(src='@/assets/curso/temas/tema4/img-16.png', alt='')       
      .col-xl-8
        h4 Los Primeros Auxilios
        p.mb-0 Concepto
        p Son medidas y cuidados aplicados de forma rápida a una persona hasta que se disponga de tratamiento especializado en un centro asistencial.

        h4 Objetivos 
        .row.pe-lg-3.mb-1.pnt.pb-1(data-aos="zoom-in")
          .col-auto.pe-2.mt-1
            img(src="@/assets/curso/temas/tema1/check.svg")
          .col.px-0
            p.mb-0 Conservar la vida.
        .row.pe-lg-3.mb-1.pnt.pb-1(data-aos="zoom-in")
          .col-auto.pe-2.mt-1
            img(src="@/assets/curso/temas/tema1/check.svg")
          .col.px-0
            p.mb-0 Aliviar el dolor y la ansiedad del herido.
        .row.pe-lg-3.mb-1.pnt.pb-1(data-aos="zoom-in")
          .col-auto.pe-2.mt-1
            img(src="@/assets/curso/temas/tema1/check.svg")
          .col.px-0
            p.mb-0 Evitar el agravamiento del estado del paciente.
        .row.pe-lg-3.mb-1.pnt.pb-1(data-aos="zoom-in")
          .col-auto.pe-2.mt-1
            img(src="@/assets/curso/temas/tema1/check.svg")
          .col.px-0
            p.mb-0 Proveer asistencia en caso extremo para evitar la muerte.
        .row.pe-lg-3.mb-1.pnt.pb-1(data-aos="zoom-in")
          .col-auto.pe-2.mt-1
            img(src="@/assets/curso/temas/tema1/check.svg")
          .col.px-0
            p.mb-0 Clasificar los primeros auxilios según las prioridades de las víctimas.
        .row.pe-lg-3.mb-1.pnt.pb-1(data-aos="zoom-in")
          .col-auto.pe-2.mt-1
            img(src="@/assets/curso/temas/tema1/check.svg")
          .col.px-0
            p.mb-0 Prevenir el pánico y las complicaciones físicas o psicológicas.
        .row.pe-lg-3.mb-1.pnt.pb-1(data-aos="zoom-in")
          .col-auto.pe-2.mt-1
            img(src="@/assets/curso/temas/tema1/check.svg")
          .col.px-0
            p.mb-0 Asegurar el traslado de los accidentados a un centro asistencial.


    .cajon.color-acento-botones.p-4.mb-5.fnd-1-5
      p.mb-0 <b> Nota:</b> Se recomienda que los guías tomen cursos de primeros auxilios de forma continua con entidades reconocidas. Actuar rápidamente para conseguir asistencia médica es clave.
 
    h4.mb-4(data-aos="zoom-in") Manejo de Residuos
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img-17.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los residuos son desechos que pueden causar riesgos a la salud humana o deteriorar la calidad ambiental. Es esencial manejar estos residuos de forma adecuada. Las acciones deben enfocarse en prevenir, mitigar y corregir efectos ambientales negativos. Esto incluye planes de seguimiento, evaluación y monitoreo.

    .row.justify-content-center.align-items-center.mb-5
      .col-xl-10
        .tabla-a.color-acento-contenido
          table.tbl
            caption Fuente: Sena 2024
            thead
              tr
                th(colspan="4") Clasificación de Residuos
              tr
                th Tipo de Residuo
                th Descripción
                th Ejemplos
                th Recomendaciones de Manejo
            tbody
              tr
                td Residuos Orgánicos
                td Desechos biodegradables que pueden descomponerse de forma natural, enriqueciendo el suelo.
                td Restos de alimentos (frutas, verduras), cáscaras.
                td Llevar una bolsa para recolectar los residuos; si es seguro, compostar en áreas designadas. No dejar residuos orgánicos en la naturaleza.
              tr
                td Residuos No Orgánicos
                td Desechos que no se descomponen fácilmente y pueden causar contaminación ambiental significativa si no se gestionan adecuadamente.
                td Plásticos (botellas, envoltorios), papel higiénico, servilletas desechables.
                td Llevar bolsas para recoger todos los residuos y llevarlos de vuelta. Usar productos reutilizables siempre que sea posible.
              tr
                td Residuos Líquidos
                td Materiales en estado líquido que pueden contener sustancias perjudiciales para el medio ambiente si se desechan de manera inapropiada.
                td Restos de bebidas, aceites, productos de limpieza.
                td Evitar verter líquidos en el suelo o cuerpos de agua. Llevar recipientes que hermeticen cualquier residuo líquido.
              tr
                td Residuos Lixiviados
                td Líquidos generados por la descomposición de otros residuos, que pueden ser contaminantes y dañinos si no se gestionan correctamente.
                td Fluidos que escapan de residuos mal gestionados o en campamentos.
                td Asegurarse de que todos los residuos estén bien dispuestos en contenedores sellados. Notificar a las autoridades sobre contaminación.


    p.mb-5 La preparación y un manejo responsable de residuos, además de tener equipos de seguridad y conocimientos de primeros auxilios, son esenciales para garantizar una experiencia segura y agradable en cualquier caminata. Al seguir estas recomendaciones, se puede disfrutar plenamente de la aventura al aire libre.






</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
