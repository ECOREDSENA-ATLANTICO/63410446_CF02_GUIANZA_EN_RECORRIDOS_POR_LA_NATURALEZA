<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Comunicación


    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La comunicación es un proceso mediante el cual se mandan y se reciben mensajes. Las informaciones se transmiten y se reciben a través de signos convenidos de antemano por quienes están en el proceso. Una comunicación es efectiva si logra implicar todos los elementos que la conforman. Sobre todo, si obtiene una respuesta teniendo en cuenta las mínimas condiciones necesarias:

    h4.mb-4.text-center Elementos de la comunicación

    ImagenInfografica.color-secundario.mb-5(data-aos="fade-right")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema2/img-2.svg', alt='Elementos de la comunicación')

      .tarjeta.fnd-1-2.p-3(x="11.7%" y="82%" numero="+")
        .h4.mb-2.tit-1 Condiciones
        .row.pe-lg-3.mb-2(data-aos="zoom-in")
          .col-auto.pe-2.mt-2
            img(src="@/assets/curso/temas/tema2/check.svg")
          .col.px-0
            p.mb-0 Persona capaz de expresar con claridad lo que desea comunicar.
        .row.pe-lg-3.mb-2(data-aos="zoom-in")
          .col-auto.pe-2.mt-1
            img(src="@/assets/curso/temas/tema2/check.svg")
          .col.px-0
            p.mb-0 Utiliza las palabras adecuadas para transmitir su mensaje.
        .row.pe-lg-3.mb-2(data-aos="zoom-in")
          .col-auto.pe-2.mt-2
            img(src="@/assets/curso/temas/tema2/check.svg")
          .col.px-0
            p.mb-0 Conoce el tema sobre el que va a expresarse.
        .row.pe-lg-3.mb-2(data-aos="zoom-in")
          .col-auto.pe-2.mt-2
            img(src="@/assets/curso/temas/tema2/check.svg")
          .col.px-0
            p.mb-0 Mantiene una actitud positiva hacia el receptor.
        .row.pe-lg-3.mb-2(data-aos="zoom-in")
          .col-auto.pe-2.mt-2
            img(src="@/assets/curso/temas/tema2/check.svg")
          .col.px-0
            p.mb-0 Conoce las características del receptor para adaptar su mensaje.
        .row.pe-lg-3.mb-2(data-aos="zoom-in")
          .col-auto.pe-2.mt-2
            img(src="@/assets/curso/temas/tema2/check.svg")
          .col.px-0
            p.mb-0 Usa el canal más adecuado y con el que tenga mayor dominio.

      .tarjeta.fnd-1-2.p-3(x="37%" y="67%" numero="+")
        .h4.mb-2.tit-1 Condiciones
        .row.pe-lg-3.mb-2(data-aos="zoom-in")
          .col-auto.pe-2.mt-1
            img(src="@/assets/curso/temas/tema2/check.svg")
          .col.px-0
            p.mb-0 Capaz de recibir el mensaje. 
        .row.pe-lg-3.mb-2(data-aos="zoom-in")
          .col-auto.pe-2.mt-1
            img(src="@/assets/curso/temas/tema2/check.svg")
          .col.px-0
            p.mb-0 Comprende lo que se le quiere decir.
        .row.pe-lg-3.mb-2(data-aos="zoom-in")
          .col-auto.pe-2.mt-1
            img(src="@/assets/curso/temas/tema2/check.svg")
          .col.px-0
            p.mb-0 Tiene una actitud positiva hacia el emisor.
        .row.pe-lg-3.mb-2(data-aos="zoom-in")
          .col-auto.pe-2.mt-1
            img(src="@/assets/curso/temas/tema2/check.svg")
          .col.px-0
            p.mb-0 Le interesa el tema de la comunicación.
        .row.pe-lg-3.mb-2(data-aos="zoom-in")
          .col-auto.pe-2.mt-1
            img(src="@/assets/curso/temas/tema2/check.svg")
          .col.px-0
            p.mb-0 Responde al mensaje.

      .tarjeta.fnd-1-2.p-3(x="62.8%" y="81%" numero="+")
        .h4.mb-2.tit-1 Condiciones
        .row.pe-lg-3.mb-2(data-aos="zoom-in")
          .col-auto.pe-2.mt-1
            img(src="@/assets/curso/temas/tema2/check.svg")
          .col.px-0
            p.mb-0 Las palabras adecuadas sean de uso común.
        .row.pe-lg-3.mb-2(data-aos="zoom-in")
          .col-auto.pe-2.mt-1
            img(src="@/assets/curso/temas/tema2/check.svg")
          .col.px-0
            p.mb-0 No transmitir muchas ideas de una sola vez.
        .row.pe-lg-3.mb-2(data-aos="zoom-in")
          .col-auto.pe-2.mt-1
            img(src="@/assets/curso/temas/tema2/check.svg")
          .col.px-0
            p.mb-0 No usar palabras innecesarias.
        .row.pe-lg-3.mb-2(data-aos="zoom-in")
          .col-auto.pe-2.mt-1
            img(src="@/assets/curso/temas/tema2/check.svg")
          .col.px-0
            p.mb-0 Presentar ideas en orden, ojalá de importancia.

      .tarjeta.fnd-1-2.p-3(x="88%" y="68%" numero="+")
        .h4.mb-2.tit-1 Condiciones
        .row.pe-lg-3.mb-2(data-aos="zoom-in")
          .col-auto.pe-2.mt-1
            img(src="@/assets/curso/temas/tema2/check.svg")
          .col.px-0
            p.mb-0 Que sera de uso común para el emisor y el receptor.
        .row.pe-lg-3.mb-2(data-aos="zoom-in")
          .col-auto.pe-2.mt-1
            img(src="@/assets/curso/temas/tema2/check.svg")
          .col.px-0
            p.mb-0 Estar en un mismo nivel de dificultad.
      
    .row.justify-content-start.align-items-center.mb-4
      .col-md-9.col-lg-6.col-xl-5
        .row.pe-lg-3.fnd-1-3.align-items-center(data-aos="zoom-in")
          .col-auto.pe-2
            img(src="@/assets/curso/temas/tema2/img-3.svg", alt="Icono")
          .col.px-0
            h4.mb-0.tit-2 Importancia de la Comunicación


    p.mb-4 La comunicación es esencial para transmitir información de manera clara y efectiva, formando conocimientos, proyectando una imagen profesional y difundiendo mensajes clave. Además, permite persuadir al público, ofreciendo un espacio de entretenimiento y conexión. A continuación, se presentan los aspectos principales que la comunicación cumple en diversas interacciones, asegurando su impacto en cada contexto.

    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-8.mb-5
        LineaTiempoD.color-acento-contenido
          p(numero="1" titulo="Comunicación") Informar: la gran carrera progresista del mundo en todos sus campos hace de la información una necesidad de cada día. La comunicación cumple así un papel importante.	
          p(numero="2" titulo="Conocimiento") Formar: el empleo de la comunicación como medio de formación es palpable en todos los campos del conocimiento humano.	
          p(numero="3" titulo="Idea") Dar Imagen: la comunicación se da y se percibe como una empresa, una compañía, una idea. Es una forma muy eficaz de publicidad y buenas relaciones públicas para una empresa.	
          p(numero="4" titulo="Opinión") Difundir: la comunicación permite esparcir no sólo la propia opinión, sino las ideas necesarias para lograr un objetivo determinado. Se difunden las ventajas de un producto, las bondades de una administración, la amabilidad de una empresa o su voluntad de servicio.	
          p(numero="5" titulo="Decisión") Persuadir: convencer a los demás para que se ejecute o no una acción, para que se compre o no un producto, para que se tome una decisión; es una misión necesaria en nuestro medio. Una buena comunicación debe servir para convencer a los demás y moverlos a la acción.	
          p(numero="6" titulo="Interés") Divertir: en la comunicación debe haber algo de interés para dar o recibir. A veces conviene recurrir a elementos agradables, visibles y jocosos con el objetivo de influir con mayor facilidad en los demás. La comunicación es, también, un vehículo de la alegría, el descanso, el solaz y la amabilidad.
      .col-lg-4.col-md-8.mb-5
        figure
          img(src='@/assets/curso/temas/tema2/img-4.png', alt='')

    .cajon.color-acento-botones.p-4.mb-5.fnd-1
      p.mb-0 La comunicación le permite al guía de turismo ser útil en los procesos de producción a nivel de empresa y de insumos, como fuente de actividad económica. Las técnicas de comunicación nos permiten interrelacionar turista- atractivo-guía logrando satisfacer la necesidad de recibir y dar información anexa, clara y veraz.         

    .row.justify-content-start.align-items-center.mb-4
      .col-xl-4.col-lg-5.col-md-7
        .row.pe-lg-3.mb-2.fnd-1-3.align-items-center(data-aos="zoom-in")
          .col-auto.pe-2
            img(src="@/assets/curso/temas/tema2/img-3.svg", alt="Icono")
          .col.px-0
            h4.mb-0.tit-2 Tipos de Comunicación


    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-12
        .tarjeta.p-4.mb-5.px-xl-5.px-mb-2.fnd-2-2.fnd-2
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-lg-4.col-md-8
                figure.mb-4
                  img(src='@/assets/curso/temas/tema2/img-5.png', alt='')
              .col-lg-8
                h4 Comunicación interpersonal
                p Se realiza con la presencia de los interlocutores en el mismo sitio; se conoce también como comunicación cara a cara. Como ejemplos de este tipo de comunicación tenemos nuestras conversaciones cotidianas con nuestros familiares o compañeros de trabajo.
                
            .row.justify-content-center.align-items-center
              .col-lg-4.col-md-8
                figure.mb-4
                  img(src='@/assets/curso/temas/tema2/img-6.png', alt='')
              .col-lg-8
                h4 Comunicación masiva
                p Desarrollada principalmente por los medios de comunicación colectivos como radio, televisión, Internet, periódicos y revistas. el mensaje es enviado por un emisor y no hay respuesta inmediata. No garantiza la atención necesaria de todos los receptores para interpretar el mensaje.

            .row.justify-content-center.align-items-center
              .col-lg-4.col-md-8
                figure.mb-4
                  img(src='@/assets/curso/temas/tema2/img-7.png', alt='')
              .col-lg-8
                h4 Comunicación organizacional
                p Es implementada por las instituciones como un elemento estructural que fortalece tanto la funcionalidad como el cumplimiento de normas internas. Esta forma de comunicación asegura que todos los miembros estén alineados con los objetivos y valores institucionales, facilitando la coordinación de tareas, el flujo de información y el seguimiento de procedimientos. Su correcta gestión promueve un ambiente organizacional cohesivo y eficiente, esencial para alcanzar las metas comunes.
                
            .row.justify-content-center.align-items-center
              .col-lg-4.col-md-8
                figure.mb-4
                  img(src='@/assets/curso/temas/tema2/img-8.png', alt='')
              .col-lg-8
                h4 Comunicación formal
                p Facilita el direccionamiento y agilización de procesos dentro de la organización, apoyando el cumplimiento de las metas establecidas. Esta comunicación puede ser descendente, cuando fluye de la dirección hacia el personal; ascendente, del personal hacia la dirección; horizontal, entre personas de igual nivel jerárquico; y diagonal, entre diferentes departamentos o áreas, promoviendo una colaboración integral y eficiente.
              
            .row.justify-content-center.align-items-center
              .col-lg-4.col-md-8
                figure.mb-4
                  img(src='@/assets/curso/temas/tema2/img-9.png', alt='')
              .col-lg-8
                h4 Comunicación informal
                p Surge de relaciones espontáneas entre miembros de la institución, sin seguir estructuras jerárquicas. Esta puede tener efectos positivos cuando fortalece las relaciones interpersonales y fomenta el trabajo en equipo. Sin embargo, también puede ser negativa si actúa como un distractor que distorsiona la información, afectando tanto a las personas como al rendimiento y la imagen de la institución.

    p A pesar de que la comunicación es un proceso inherente al ser humano y esencial para relacionarse con los demás, es fundamental aprender a comunicarse de manera efectiva. Esto se debe a que la comunicación puede contribuir a construir relaciones positivas o, por el contrario, causar daño y destruir tanto a las personas como a las instituciones.

    .row.justify-content-start.align-items-center.mb-4
      .col-xl-4.col-lg-5.col-md-7
        .row.pe-lg-3.mb-2.fnd-1-3.align-items-center(data-aos="zoom-in")
          .col-auto.pe-2
            img(src="@/assets/curso/temas/tema2/img-3.svg", alt="Icono")
          .col.px-0
            h4.mb-0.tit-2 Comunicación asertiva

    figure.mb-5
      img(src='@/assets/curso/temas/tema2/img-10.png', alt='')

    p.mb-4 La conducta asertiva se caracteriza por la expresión clara y honesta de sentimientos y necesidades, promoviendo relaciones saludables. En contraste, la conducta pasiva implica la transgresión de los propios derechos, llevando a la frustración y el malentendido. La persona no asertiva, al adoptar esta conducta, puede enfrentar dificultades en la comunicación, afectando tanto su bienestar como el de quienes la rodean.



    .row.justify-content-center.mb-5
      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img-11.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Conducta asertiva
            p.mb-0 La conducta asertiva no tiene siempre como resultado la ausencia de conflicto entre las dos partes; pero su objetivo es la potenciación de las consecuencias favorables y la minimización de las desfavorables.

      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt.crd-2(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img-12.png", alt="alt")
          .crd_hover_txt--body.crd-2
            h4.mb-3 Conducta pasiva
            p.mb-0 La conducta pasiva, según Marsellach, implica la transgresión de los propios derechos al no poder expresar abiertamente sentimientos, pensamientos y opiniones. A menudo, esto se manifiesta con disculpas y falta de confianza, buscando apaciguar a los demás y evitar conflictos, incluso a costa del propio bienestar y la autenticidad.

      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img-13.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Persona no asertiva
            p.mb-0 La falta de asertividad puede generar consecuencias negativas para quien la practica y para quienes interactúan con ella. La comunicación poco clara dificulta la satisfacción de necesidades y la comprensión de opiniones, lo que lleva a sentimientos de incomprensión y manipulación. Esto puede resultar en hostilidad e irritabilidad, dado que todos tienen un límite para manejar frustraciones.
      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt.crd-2(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img-14.png", alt="alt")
          .crd_hover_txt--body.crd-2
            h4.mb-3 Conducta no asertiva
            p.mb-0 Conducta no asertiva	Quien recibe una conducta no asertiva puede experimentar diversas consecuencias negativas. Constantemente descifrar lo que la otra persona intenta comunicar o tratar de leer sus pensamientos resulta ser una tarea difícil y abrumadora. Esto puede dar lugar a sentimientos de frustración, molestia e incluso ira hacia quien se comporta de manera pasiva.	 



    .row.justify-content-start.align-items-center.mb-5
      .col-lg-3.col-md-6
        .row.pe-lg-3.mb-2.fnd-1-4.align-items-center.mb-4(data-aos="zoom-in")
          .col.p-3
            h4.mb-0.tit-3 Conducta agresiva

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-8
        figure.mb-4
          img(src="@/assets/curso/temas/tema2/img-15.png", alt="alt")
      .col-lg-8
        p Se define como la defensa de los derechos personales y la expresión de pensamientos, sentimientos y opiniones de manera inapropiada e impositiva, lo que transgrede los derechos de los demás. Esta conducta puede clasificarse en:
        .row.pe-lg-3.mb-4.pnt.pb-3(data-aos="zoom-in")
          .col-auto.pe-2.mt-1
            img(src="@/assets/curso/temas/tema1/check.svg")
          .col.px-0
            p.mb-0 
              span.t-g Directa 
              | en forma verbal o no verbal. La agresión verbal incluye ofensas, insultos, amenazas y comentarios hostiles o humillantes. El componente no verbal puede incluir gestos hostiles o amenazantes, como esgrimir el puño a las miradas agresivas e incluso los ataques físicos.
        .row.pe-lg-3.mb-4(data-aos="zoom-in")
          .col-auto.pe-2.mt-1
            img(src="@/assets/curso/temas/tema1/check.svg")
          .col.px-0
            p.mb-0 
              span.t-g Indirecta 
              | a través de comentarios sarcásticos, rencorosos, murmuraciones maliciosas, chismes o cualquier expresión que indisponga a la persona, o a otros contra ella.

        .cajon.color-secundario.p-4.mb-4.fnd-1-1
          p.mb-0 De acuerdo con la conducta que se asuma para interactuar con los demás, se tienen y generan estados de bienestar o, por el contrario, puede convertirse en una fuente considerable de estrés en la vida.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p La persona asertiva se manifiesta auténticamente y se comunica con facilidad, sintiéndose libre para expresarse. Mantiene una actitud positiva hacia la vida y acepta respetuosamente sus limitaciones. Con alta autoestima y respeto por sí misma, es dueña de su tiempo y de su vida, lo que le permite interactuar de manera efectiva con los demás.

        .cajon.color-acento-botones.p-4.mb-4.fnd-1
          p.mb-0 La persona asertiva acepta o rechaza a los demás según el impacto positivo o negativo que tengan en su vida. Se siente libre para expresar sus pensamientos y sentimientos, sin confundir sus respuestas: dice “sí” cuando lo desea y “no” cuando es necesario. Además, reconoce sus fortalezas y áreas de oportunidad para continuar creciendo personalmente; reconoce, acepta y respeta sus derechos y los de los demás. Posee autoconfianza para tomar decisiones, elogia el trabajo ajeno y es sensible a diferentes contextos.
      .col-lg-4.col-md-8
        figure.mb-4
          img(src="@/assets/curso/temas/tema2/img-16.png", alt="alt")



    h4 Existen componentes que conforman la estructura de una conducta asertiva:

    p El respeto y la honestidad son fundamentales para la comunicación efectiva. Ser directo y apropiado facilita la comprensión, mientras que el control emocional y la capacidad de escuchar fomentan relaciones saludables. Además, mantener una actitud positiva y planificar los mensajes contribuyen a una interacción más clara y constructiva, permitiendo que se alcancen los objetivos comunicativos de manera efectiva. 



    .row.justify-content-center.align-items-center.mb-5.fnd-3-2
      .col-lg-4.col-md-8
        figure.mb-4
          img(src="@/assets/curso/temas/tema2/img-17.png", alt="alt")    
      .col-lg-8
        SlyderF.mb-5(columnas="col-lg-6 col-xl-6")
          .tarjeta.color-acento-botones.p-4.fnd-3-1
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/temas/tema2/img-18.svg' alt='AvatarTop')
            p.text-center Respetarse a sí mismo implica tomarse en serio, tener una buena autopercepción y cultivar la autoestima. Respetar a los demás significa reconocer su valor y apreciar sus acciones de manera genuina.
          .tarjeta.color-acento-botones.p-4.fnd-3-1
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/temas/tema2/img-19.svg' alt='AvatarTop')
            p.text-center Ser directo(a) implica transmitir mensajes de manera clara, sencilla y precisa.
          .tarjeta.color-acento-botones.p-4.fnd-3-1
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/temas/tema2/img-20.svg' alt='AvatarTop')
            p.text-center Ser honesto(a) significa que las acciones reflejan los sentimientos auténticos. Es preferible mantener la calma y, de manera educada pero firme, expresar la propia opinión sin desestimar la perspectiva de los demás.
          .tarjeta.color-acento-botones.p-4.fnd-3-1
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/temas/tema2/img-21.svg' alt='AvatarTop')
            p.text-center Ser apropiado(a) implica considerar el momento y el contexto en que se realiza la comunicación.
          .tarjeta.color-acento-botones.p-4.fnd-3-1
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/temas/tema2/img-22.svg' alt='AvatarTop')
            p.text-center El control emocional consiste en canalizar las emociones para evitar que alcancen niveles de intensidad que generen reacciones ineficaces. Presentar excusas cuando es necesario es valioso; de lo contrario, pierden su validez.
          .tarjeta.color-acento-botones.p-4.fnd-3-1
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/temas/tema2/img-23.svg' alt='AvatarTop')
            p.text-center Saber escuchar es un proceso activo que requiere atención para comprender lo que los demás desean transmitir. Ignorar o desestimar los comentarios ajenos puede generar ira y resentimiento en las relaciones.
          .tarjeta.color-acento-botones.p-4.fnd-3-1
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/temas/tema2/img-24.svg' alt='AvatarTop')
            p.text-center Tarjeta 7	Ser positivo(a) implica reconocer e informar a los demás que, al igual que nosotros, también buscan beneficiar y ayudar a los demás en sus acciones.	
          .tarjeta.color-acento-botones.p-4.fnd-3-1
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/temas/tema2/img-25.svg' alt='AvatarTop')
            p.text-center Planificar los mensajes implica aclarar todos los hechos y puntos con antelación, utilizando notas de referencia si es posible. Esto ahorra tiempo, genera confianza y puede reducir la intimidación en los demás.

    h4.mb-5 Recomendaciones para proyectar asertividad:  

    figure.mb-4
      img(src="@/assets/curso/temas/tema2/img-26.png", alt="alt")

    p.mb-5 Para proyectar seguridad, es importante mirar a los ojos al interlocutor, dar un saludo firme y hablar con buena dicción. Evitar arrinconar a las personas facilita la cooperación y reduce tensiones, ofreciendo una salida constructiva que beneficie a todos. Además, en lugar de recurrir a amenazas, es mejor negociar con calma para lograr credibilidad y colaboración en los objetivos comunes.


    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-27.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Cumplir los compromisos es esencial para ser tomado en serio. Aceptar la derrota con elegancia también es importante, canalizando las emociones de forma constructiva y evitando ser un mal perdedor. La ira genera confusión y transmite debilidad, afectando la credibilidad. Escuchar y considerar los puntos de vista ajenos demuestra comprensión y buena educación, lo cual facilita las relaciones, ya que, como dice el refrán, “la educación no pelea con nadie”.


    .cajon.color-acento-botones.p-4.mb-5.fnd-1
      p.mb-0 Relacionarse con los demás puede ser complicado por diferencias culturales, sociales y personales, pero es fundamental evitar prejuicios para no perder oportunidades de aprendizaje y conocer personas interesantes. Aunque las primeras impresiones pueden llevar a interpretaciones erróneas, las personas comparten necesidades comunes de afecto, participación y contribución. Al superar las apariencias y conectar desde la empatía, descubrimos que las diferencias no son tantas; una conversación positiva se convierte en una valiosa caricia psicológica.



</template>

<script>
export default {
  name: 'Tema2',
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
