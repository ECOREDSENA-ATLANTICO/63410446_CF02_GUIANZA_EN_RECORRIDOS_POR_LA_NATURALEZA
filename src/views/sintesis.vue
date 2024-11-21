<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se ofrece una visión general de los aspectos clave en la guianza turística. Esta labor exige un perfil especializado que combine liderazgo, conocimiento profundo del destino y una actitud proactiva. La comunicación efectiva es esencial para transmitir información clara y generar confianza entre los turistas. El manejo de grupos implica coordinar dinámicas y resolver conflictos, garantizando una experiencia segura y organizada. Durante las caminatas por senderos, el guía debe conocer la ruta y evaluar su nivel de dificultad, considerando las capacidades físicas de los participantes. El uso de equipos de seguridad, como cascos y botas adecuadas, es fundamental para proteger a los turistas en actividades de riesgo. Además, los conocimientos en primeros auxilios permiten una respuesta rápida ante emergencias menores. Finalmente, el adecuado manejo de residuos es crucial para reducir el impacto ambiental y promover un turismo sostenible, preservando el entorno natural.
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
