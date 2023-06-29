<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Canales de comunicación
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        p Los procesos de comunicación a nivel empresarial se han transformado gracias al mundo digital, es una realidad que la gestión de la comunicación es inseparable de la gestión organizacional, por eso implica la planificación, administración y evaluación de los flujos comunicativos, es decir, saber comunicarse a nivel organizacional representa un valor competitivo, ya que genera un impacto positivo en el desarrollo empresarial.
      .col-lg-8
        .row.justify-content-center.mb-5.g-0
          .col-lg-4
            img(src='@/assets/curso/temas/tema8/1.png', alt='')
          .col-lg-8
            .p-4(style="background-color: #EFFEFE").h-100
              p.mb-0 De manera elemental, se podría decir que los canales de comunicación son las vías, soportes, caminos, herramientas y demás elementos necesarios para compartir mensajes e información. En las organizaciones se asumen responsabilidades a través de la socialización de la información pertinente a cada función, cargo y perfil.
                br
                br
                | #[b Para esto se requiere de una plataforma que asegure total conectividad, integración, información, participación y solidaridad.]
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema8/2.png', alt='')
      .col-lg-8
        p Sobre los procesos de comunicación en las empresas u organizaciones, tenga en cuenta aspectos como:
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--red")
          div(titulo="Cantidad y calidad de la información")
            p.mb-0 La cantidad y la calidad de la información que se comunica entre las áreas funcionales de las organizaciones es importante en la medida que las reciban las personas que son, en el momento oportuno, que no estén incompletas, que sean veraces, y lo más valioso, que sea información pertinente y funcional.
          div(titulo="Aprovechamiento y uso de los datos")
            p.mb-0 Para mostrar un buen desempeño en las áreas funcionales es fundamental aprovechar de manera idónea los datos que contengan información importante, y que se compartan entre sí. Para esto, los canales utilizados para que esa información se desplace, y sea bien utilizada, son cruciales.
          div(titulo="Comunicación e indicadores")
            p.mb-0 Para evaluar el desempeño es indispensable conocer cifras de entradas, de procesos, y de resultados, todos estos indicadores ayudan a tomar decisiones acertadas, y se está cumpliendo con uno de los objetivos: realizar análisis para tomar las mejores acciones de mejora.
          div(titulo="Estructuras de red e intercomunicación")
            p.mb-0 Los datos solos o aislados no constituyen información, deben estar estructurados en una red o un sistema que les permita interactuar y convertirse en informes útiles.
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        p Sobre los procesos de comunicación en las empresas u organizaciones, tenga en cuenta aspectos como:
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--red")
          div(titulo="Frecuencia de uso")
            p.mb-0 Un sistema de comunicaciones o de información se ve justificado cuando la frecuencia con que se utiliza es alta y cuando los datos que transitan por allí son realmente utilizados, e intervienen el mejoramiento en la productividad y el cumplimiento de metas.
          div(titulo="Técnicas de comunicación")
            p.mb-0 Al evaluar el desempeño laboral se hace necesario emitir y dirigir un mensaje a los participantes, dando lineamientos claros sobre qué se espera de ellos, de su desempeño y de sus obligaciones. En la comunicación está la clave del éxito o el fracaso de un proceso de evaluación de desempeño.
          div(titulo="Formas comunicativas")
            p.mb-0 La comunicación, tanto escrita como verbal, es el elemento diferenciador de una gestión del rendimiento eficaz. Por eso se plantea que las principales funciones de la comunicación a nivel empresarial están relacionadas con manejo de información, motivación y control.
          div(titulo="Comunicación para la satisfacción")
            p.mb-0 Concebir un escenario de satisfacción, control, seguridad y cooperación a través de procesos eficaces de comunicación será una estrategia inestimable de mejoramiento y desarrollo del trabajador y por lo tanto de eficacia en la productividad.
        //todo! Añadir anexo 
        .tarjeta.color-secundario.p-3.mb-4
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema3/31.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Modelos de comunicación y liderazgo
                  p.mb-0.text-small Le invitamos a consultar el siguiente recurso descargable que le permitirá profundizar en la temática de los procesos de personal en las organizaciones.			
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/Anexo_5_ModelosDeComunicacionYLiderazgo.pdf')" target="_blank" type="application/pdf")
                    span Descargar
                    i.fas.fa-file-download
      .col-lg-4: img(src='@/assets/curso/temas/tema8/3.svg', alt='')

</template>

<script>
export default {
  name: 'Tema8',
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
