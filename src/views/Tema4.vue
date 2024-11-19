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
      .col-lg-4
        .row.pe-lg-3.mb-2.fnd-1-3.align-items-center(data-aos="zoom-in")
          .col-auto.pe-2
            img(src="@/assets/curso/temas/tema2/img-3.svg", alt="Icono")
          .col.px-0
            h4.mb-0.tit-2 Marco histórico de los caminos

    p.mb-4 En la historia de Colombia, los caminos y senderos han sido fundamentales para la conexión entre regiones y el desarrollo cultural y económico del país. Desde tiempos precolombinos, los pueblos indígenas construyeron rutas que permitían el intercambio de bienes y saberes a través de diversas regiones, desde la costa hasta los Andes y la Amazonía. Estos caminos, conocidos como caminos ancestrales o "caminos de herradura", facilitaban el comercio, la comunicación y el movimiento de personas entre pueblos indígenas.  

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-4.col-md-8
        figure
          img(src='@/assets/curso/temas/tema4/img-2.png', alt='')
      .col-lg-8
        p Algunos de estos caminos se integraron en la vasta red de caminos del Qhapaq Ñan o Camino Inca, un sistema de rutas que se extendía desde el sur de Colombia hasta el sur del Imperio Inca en Sudamérica. Estos caminos indígenas fueron esenciales en la construcción de un sentido de identidad y conexión entre los pueblos originarios y, en muchos casos, eran los únicos accesos a territorios remotos.
        .cajon.color-acento-botones.p-4.mb-4.fnd-1
          p.mb-0 Con la llegada de los colonizadores españoles, muchos de estos senderos indígenas se adaptaron y expandieron para facilitar el movimiento de tropas, bienes y pobladores entre los centros urbanos que comenzaban a formarse. Durante la colonia, se desarrollaron caminos reales, que conectaban las principales ciudades y puertos, facilitando el transporte de mercancías como oro, tabaco y alimentos hacia los mercados internacionales. Los caminos coloniales también fueron clave en los movimientos de independencia, pues los libertadores, como Simón Bolívar, usaron estas rutas para las campañas militares que llevaron a la independencia del país.
          
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8       
        .cajon.color-acento-botones.p-4.mb-4.fnd-1
          p.mb-0 En la época republicana y a medida que el país avanzaba hacia la modernidad, se construyeron carreteras y ferrocarriles para facilitar la conexión entre ciudades. Sin embargo, los senderos y caminos rurales continuaron siendo esenciales en zonas remotas donde la infraestructura moderna no llegaba. En el siglo XX, especialmente en la década de 1960, se promovió la construcción de carreteras y redes de transporte para unir aún más las regiones, pero muchos senderos rurales y caminos secundarios siguieron en uso, manteniendo la tradición y la conexión cultural entre comunidades.
      .col-lg-4.col-md-8
        figure
          img(src='@/assets/curso/temas/tema4/img-3.png', alt='')

    p Hoy en día, algunos de estos caminos históricos han sido recuperados como senderos ecoturísticos y rutas culturales, valorizando su importancia como patrimonio cultural e histórico. Rutas como el Camino Teyuna (hacia la Ciudad Perdida de los taironas en la Sierra Nevada de Santa Marta) y la Ruta Libertadora son ejemplo de ello, y permiten a locales y visitantes recorrer y explorar la historia y cultura del país.
    
    .row.justify-content-start.align-items-center.mb-4
      .col-lg-5
        .row.pe-lg-3.mb-2.fnd-1-3.align-items-center(data-aos="zoom-in")
          .col-auto.pe-2
            img(src="@/assets/curso/temas/tema2/img-3.svg", alt="Icono")
          .col.px-0
            h4.mb-0.tit-2 Normas de utilización Precauciones

    .row.justify-content-center.align-items-center.mb-5  
      figure
        img(src="@/assets/curso/temas/tema4/img-4.png", alt="alt")

    .row.justify-content-center.mb-5
      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema4/img-5.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Fuegos
            p.mb-0 se recomienda utilizar las zonas demarcadas para el fuego y solo en caso necesario puesto que resulta ser una actividad muy peligrosa.
      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt.crd-2(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema4/img-6.png", alt="alt")
          .crd_hover_txt--body.crd-2
            h4.mb-3 Basuras
            p.mb-0 evitar al máximo dejar basuras; puede resultar peligrosa para los animales o para los próximos visitantes. No es difícil traer a casa la basura para ser eliminada con la basura diaria.
      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt.crd-2(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema4/img-7.png", alt="alt")
          .crd_hover_txt--body.crd-2
            h4.mb-3 Flores, plantas, fauna
            p.mb-0 los valores de la naturaleza están dados por el respeto que nosotros tenemos ante una comunidad totalmente frágil. Se debe caminar con precaución, caminar por los senderos y caminos de herradura para evitar la erosión. No molestar ni destruir la fauna. Arrancar las flores impide su reproducción.

       

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-4.col-md-8
        figure
          img(src='@/assets/curso/temas/tema4/img-8.png', alt='') 
      .col-lg-8
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

    h4 Caminata 
    p.mb-3 Es la actividad que realiza un visitante o turista, sobre senderos bordeados de un entorno natural y/o rural. Es en el presente la actividad más representativa del ecoturismo. Las caminatas se realizan con el propósito de recrearse en el tránsito de parajes naturales y/o rurales.
    p.mb-3 Se considera un instrumento socioeconómico y pedagógico de gran aporte para la apropiación de conceptos ecosistémicos, para el descubrimiento e interpretación y articulación de valores culturales e históricos, tanto del presente como del pasado.
    p.mb-0 Es una de las prácticas que cada día toman fuerza con el apoyo de instituciones estatales y privadas, con el compromiso de las comunidades de ayudar a preservar y el compromiso de un turismo responsable. 
    p Ritmos de marcha






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
