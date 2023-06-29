<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Contratación
    .row.justify-content-center.mb-5
      .col-lg-4.col-8: img(src='@/assets/curso/temas/tema4/1.png', alt='')
      .col-lg-8
        .bloque-texto-d.color-primario.p-4
          .bloque-texto-d__texto.mb-2
            h3.text-regular Después de haber realizado el proceso de reclutamiento y selección en el área de gestión humana, continúa la etapa de la contratación, la cual según Grados (2013) se define como el momento en que se formaliza al candidato como nuevo integrante de la empresa. Por otro lado, según el artículo 22 del Código Sustantivo del Trabajo, se establece que el contrato de trabajo es “aquel por el cual una persona natural se obliga a prestar un servicio personal a otra persona, natural o jurídica, bajo la continuada dependencia o subordinación de la segunda y mediante remuneración” 
            .d-flex.justify-content-end.align-items-center
              .h5.mb-0 (CST, 1951).
              i.fas.fa-quote-right.text-end(style="color: #9F0925 ")
        p De esta manera, en la contratación se determina, como tal, la relación laboral entre el trabajador y el empleador, estableciendo una remuneración a la que tiene derecho el trabajador gracias a la labor que este desempeña dentro del contexto en el que se desarrolla.
          br
          br
          | El Código Sustantivo del Trabajo regula la normatividad vigente, en cuanto al aspecto laboral, donde se incluyen los procesos de contratación en Colombia; se establece dicha información desde el artículo 22 al 75, donde se definen los diferentes tipos de contrataciones, su modalidad, duración y finalización. Por lo tanto, todas las empresas del país deben regirse a lo que dictaminan estas normas para llevar a cabo los distintos tipos de contratación.
    .titulo-icono.mb-4
        .titulo-icono__texto: h4.text-white.mb-0 Tipos de contratación
    .row.justify-content-center.mb-5
      .col-lg-9.mb-lg-0.mb-3
        p La contratación puede ser de distintos tipos, según los requerimientos específicos del empleador. De esta manera, según el Código Sustantivo del Trabajo, se puede establecer un contrato de manera verbal o escrita y, por lo general, lo más adecuado es definir esta última opción. Por otro lado, un contrato de trabajo también se puede definir por su duración, es decir, podrá tener un término fijo, indefinido o por obra o labor.
          br
          br
          | El primero está respaldado por el artículo 46 del CST y el tiempo pactado no podrá exceder a los 3 años. Por su parte, el término indefinido se respalda por el artículo 47 del CST y establece que el contrato no tiene un tiempo límite, puesto que se mantendrá vigente mientras continúen las causas que le dieron inicio. El término por obra o labor realizada se desarrolla, como su nombre lo indica y establece, exactamente el tiempo en que el empleado demorará para la entrega del trabajo pactado, una vez finalice, es cuando el contrato termina. 
          br
          br
          span.color-acento-contenido.fw-bold Se debe tener en cuenta que en las anteriores modalidades el empleado goza de las prestaciones sociales definidas por la ley y los beneficios que se establezcan en la empresa.
      .col-lg-3.col-7: img(src='@/assets/curso/temas/tema4/2.png', alt='')
    p.mb-5(data-aos='fade-right') Sobre las modalidades de contratación, se pueden tener en cuenta, algunas consideraciones y elementos como:
    .p-5.mn.mb-5(style="background-color: #F5E6E9")
      .row.justify-content-center.align-items-center
        .col-lg-3.col-8: img(src='@/assets/curso/temas/tema4/3.png', alt='')
        .col-lg-9
          ul.lista-ul--color
            li.d-flex.mb-3
              i.fas.fa-tshirt(style="color: #9B1F36")
              p.mb-0 Al igual que las modalidades de contratación mencionadas anteriormente, existen otras que poseen diferentes características según su contexto. 

            li.d-flex.mb-3
              i.fas.fa-tshirt(style="color: #9B1F36")
              p.mb-0 Aquí se incluye el contrato civil por prestación de servicios, el contrato de aprendizaje y el contrato ocasional.

            li.d-flex.mb-3
              i.fas.fa-tshirt(style="color: #9B1F36")
              p.mb-0 En el contrato civil por prestación de servicios, se acuerda el pago entre las partes, pero no se establece una relación laboral y no obliga al empleador a pagar seguridad social, por lo que el empleado debe hacerlo, además, la duración se define según el trabajo que se realizará.

            li.d-flex.mb-3
              i.fas.fa-tshirt(style="color: #9B1F36")
              p.mb-0 El contrato de aprendizaje se establece exclusivamente con practicantes que empiezan a incursionar en el mundo laboral.

            li.d-flex.mb-3
              i.fas.fa-tshirt(style="color: #9B1F36")
              p.mb-0 Al pago de este tipo de contrato de aprendizaje se le denomina auxilio de sostenimiento y es pactado por mutuo acuerdo. 

            li.d-flex.mb-3
              i.fas.fa-tshirt(style="color: #9B1F36")
              p.mb-0 El contrato ocasional se desarrolla para llevar a cabo una labor específica y no puede exceder los 30 días, aunque, como su nombre lo indica, no es de siempre, solo de cuando se requiere.
          //todo! Añadir documento 
          .tarjeta.color-secundario.p-3.mb-4
            .row.justify-content-around.align-items-center
              .col-auto
                img(src="@/assets/curso/temas/tema3/31.svg").img65
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4.mb-1 Modalidades de contratos
                    p.mb-0.text-small Le invitamos a consultar el siguiente recurso descargable que le permitirá profundizar en las generalidades y aspectos clave sobre las modalidades de contratos de trabajo y los procesos de vinculación.		
                  .col-sm-auto
                    a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/Anexo_2_ModalidadesDeContratos.pdf')" target="_blank" type="application/pdf")
                      span Descargar
                      i.fas.fa-file-download
                    















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

<style lang="sass">
.bloque-texto-d.color-primario:before
  background-color: #FEE7DD
</style>
