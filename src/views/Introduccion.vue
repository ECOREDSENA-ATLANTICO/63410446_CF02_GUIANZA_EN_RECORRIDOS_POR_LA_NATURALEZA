<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4 El componente formativo "Prácticas de guía ecológica en entornos naturales", se enfoca en el perfil del guía turístico, que debe incluir habilidades en comunicación efectiva, manejo de grupos y conocimiento de caminos y senderos. Además, es esencial el uso adecuado de equipos de seguridad, la capacitación en primeros auxilios y una correcta gestión de residuos. Estas competencias garantizan una experiencia segura y enriquecedora para los visitantes. Bienvenido a este componente formativo: 

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Fuente: Sena 2024.    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
