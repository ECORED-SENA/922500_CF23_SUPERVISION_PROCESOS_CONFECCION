<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5(data-aos='fade-right') Aquí comienza el estudio del componente formativo #[span.color-acento-contenido.fw-bold “Procesos de personal y evaluación de desempeño”.] Inicie observando con suma atención el vídeo que se muestra enseguida. #[span.color-acento-contenido.fw-bold ¡Adelante!]
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/1KQAXAa2Xlk?si=OYmv2t7Suui9C3AW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Proceso de personal y evaluación de desempeño
    
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
