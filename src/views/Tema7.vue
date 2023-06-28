<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Áreas funcionales
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        p Una empresa es una organización socioeconómica, lo cual significa relacionar personas, actividades y dinero. En medio de esa relación se realizan una serie de actividades, necesarias para cumplir con unos objetivos y propósitos previamente establecidos.
        .p-5(style="background-color: #FEE7DD ")
          p.mb-0 Para lograr caracterizar y clasificar esas actividades, se identifican las áreas y departamentos donde se realizará cada una, esto es importante para poder intervenirlas de manera individual (cuando así se requiera) y se gana en efectividad.
      .col-lg-5.col-8: img(src='@/assets/curso/temas/tema7/1.png', alt='')
    p.mb-5(data-aos='fade-right') De acuerdo con la naturaleza de las empresas y con su actividad económica, se organizan y/o discriminan estas actividades, departamentos, áreas o funciones:
    .row.justify-content-center.mb-5
      .col-lg-3.col-8: img(src='@/assets/curso/temas/tema7/2.png', alt='')
      .col-lg-9
        .acordion-2
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            div(titulo="Área de Gestión Financiera")
              p.mb-0
            div(titulo="Área de Recursos Humanos")
              p.mb-0
            div(titulo="Mercadeo y Ventas")
              p.mb-0 Estos están estrechamente vinculados a los procesos y la operación de la empresa en su conjunto. Los indicadores operativos se asignan a los equipos de trabajo o a las personas directamente, involucrando a cada empleado de la empresa de tal manera que contribuyan activamente a los objetivos estratégicos de la organización, para seguir con nuestro ejemplo en este caso propondremos un indicador operativo como el número de productos fabricados por módulo o por persona, en donde también tendría como objetivo aumentar, para asegurar el cumplimiento de los indicadores tácticos y estratégicos.
            div(titulo="Área de Producción")
              p.mb-0
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3
        .p-5(style="background-color: #FEE7DD").h-100
          img(src='@/assets/curso/temas/tema7/3.svg', alt='' style="width: 85px").mb-3
          h5 ¡Funciones de las áreas!
          p Cada una de estas áreas tiene unas funciones y responsabilidades definidas y, entendiéndolas como un sistema, deben funcionar. El cumplimiento de los objetivos depende del desempeño de cada una de las áreas, del grado de cumplimiento, del mejor uso de los recursos con que disponen, y de lograr mejor satisfacción de los clientes.
      .col-lg-6.mb-lg-0.mb-3
        .p-5(style="background-color: #F5E6E9").h-100
          img(src='@/assets/curso/temas/tema7/4.svg', alt='' style="width: 85px").mb-3
          h5 ¡Cuadros comparativos!
          p De acuerdo con las funciones que tiene cada área se pueden hacer cuadros comparativos entre lo que se espera y lo que realmente se logra, teniendo en cuenta cuál es la actividad más representativa de esa área. De esta manera, se establece cuál va a ser el indicador más representativo, y con ese criterio, pasar a calificar.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        //todo! Añadir documento 
        .tarjeta.color-secundario.p-3.mb-4
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema3/31.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Desempeño de áreas funcionales
                  p.mb-0.text-small Le invitamos a consultar el siguiente recurso donde se presentan algunos ejemplo de desempeño de las diferente áreas.		
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://docs.google.com/document/d/1wD3oByzOhsH4c0oWnUb4DWNBc0hmCOhrMDWG0-nCtyo/edit?usp=sharing" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
      .col-lg-4: img(src='@/assets/curso/temas/tema7/5.png', alt='')
            
</template>

<script>
export default {
  name: 'Tema7',
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

<style lang="sass">
.acordion-2
  .acordion__activo
    background-color: #ABF6F8 !important
.tarjeta--azul
  background-color: #D9FBFC
</style>
