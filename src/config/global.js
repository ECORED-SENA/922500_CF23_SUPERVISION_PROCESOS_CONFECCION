export default {
  global: {
    componenteFormativo: 'Proceso de personal y evaluación de desempeño',
    descripcionCurso:
      'Este componente formativo aborda aspectos generales y claves sobre la gestión del talento humano en la empresa, específicamente en procesos de vinculación-desvinculación y administración de las áreas de gestión del talento humano. De igual manera, se orientarán los contenidos a la evaluación del desempeño del personal para la optimización de los talentos y las competencias de empleados, la cualificación de actividades, procedimientos y procesos organizacionales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Retos en el área de gestión del talento humano',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Reclutamiento de personal',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Selección de personal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Modelo de colocación, selección y clasificación de candidatos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Fases de selección por competencias',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Entrevista de selección por competencias',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Contratación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Evaluación de desempeño',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Medición en la evaluación del desempeño',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Áreas funcionales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Canales de comunicación',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/922500-CF23-DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Retos en el área de gestión del talento humano',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Definición, clasificaciones, naturaleza y estructura de las organizaciones [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/yvEoYhSCaV8',
    },
    {
      tema: 'Selección de personal',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2020). El autodesarrollo y liderazgo personal [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/TolibG_bfNY',
    },
    {
      tema: 'Selección de personal',
      referencia: 'Selección de personal',
      tipo: 'PDF',
      link: '',
    },
    {
      tema: 'Selección de personal',
      referencia:
        'Filosofía y educación para todos. (2017). Gestión del talento humano por competencias [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=TEtoq-nDlvE&ab_channel=Filosof%C3%ADayEducaci%C3%B3nParaTodos',
    },
    {
      tema: 'Contratación',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Contratación [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/F5UmoAJorVU',
    },
    {
      tema: 'Contratación',
      referencia:
        'Cañaverales International School. (2017). Procedimiento Desvinculación del Personal.',
      tipo: 'PDF',
      link: '',
    },
    {
      tema: 'Evaluación de desempeño',
      referencia:
        'Chiavenato, I. (2020). <em>Gestión del talento humano el nuevo papel de los recursos humanos en las organizaciones.</em> McGraw-Hill.',
      tipo: 'Libro Biblioteca SENA',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=9350&pg=264',
    },
    {
      tema: 'Evaluación de desempeño',
      referencia: 'SENA. (2021). <em>Formato evaluación del desempeño.</em>',
      tipo: 'Archivo Excel',
      link: '',
    },
    {
      tema: 'Canales de comunicación',
      referencia:
        'EAE Business School. (2017). <em>Medios y canales para la comunicación interna corporativa.</em>',
      tipo: 'Página web',
      link:
        'https://www.eae.es/actualidad/noticias/medios-y-canales-para-la-comunicacion-interna-corporativa',
    },
    {
      tema: 'Canales de comunicación',
      referencia:
        'Economía desde casa. (2021). <em>La comunicación interna y sus tipos Economía de la empresa 157#.</em> [Video] YouTube.',
      tipo: 'Video YouTube',
      link: 'https://youtu.be/BcnNHFIaRgI',
    },
    {
      tema: 'Canales de comunicación',
      referencia:
        'Arroyo Tovar, R. (2012). <em>Habilidades gerenciales: desarrollo de destrezas, competencias y actitud.</em> Ecoe Ediciones.',
      tipo: 'Libro Biblioteca SENA',
      link:
        'https://www-digitaliapublishing-com.bdigital.sena.edu.co/visor/29968',
    },
  ],
  glosario: [
    {
      termino: 'Adiestramiento',
      significado:
        'acción de capacitar o enseñar a hacer una determinada actividad.',
    },
    {
      termino: 'Ascenso',
      significado:
        'reconocimiento otorgado a un empleado de una organización hacia una categoría superior al puesto que ocupa en el momento.',
    },
    {
      termino: 'Código Sustantivo del Trabajo',
      significado:
        'conjunto de normas establecidas por el Gobierno Nacional que regula las distintas relaciones laborales y sus derivados en Colombia, el cual se encuentra vigente desde el año 1950.',
    },
    {
      termino: 'Conmutativo',
      significado:
        'hace referencia al hecho de mantener la igualdad entre los elementos que se ofrecen y los mismos que son recibidos.',
    },
    {
      termino: 'Consensual',
      significado:
        'se refiere a todo aquello que se ha pactado por mutuo acuerdo entre las partes implicadas en un escenario definido.',
    },
    {
      termino: 'Contrato',
      significado:
        'es el pacto, que puede ser oral o escrito, donde se establecen los acuerdos legales entre dos o más partes, con relación a un contexto determinado. Se hace uso de este elemento en distintos escenarios para mantener una institucionalidad y legalidad entre los contratantes.',
    },
    {
      termino: 'Compensación',
      significado:
        'referente a la indemnización económica que se le da a un miembro de una empresa por su esfuerzo o por actividades como horas extras.',
    },
    {
      termino: 'Cuestionario',
      significado:
        'documento físico o digital, con preguntas estructuradas o semiestructuradas, con la finalidad de obtener información de acuerdo con los objetivos que persiga el mismo.',
    },
    {
      termino: 'Empleo',
      significado:
        'ocupación referente a una labor que una persona desempeña en una unidad o puesto de trabajo.',
    },
    {
      termino: 'Estándar',
      significado:
        'se refiere al lineamiento o punto de referencia para medir la calidad de un elemento o evento determinado.',
    },
    {
      termino: 'Evaluación',
      significado:
        'valoración de la ejecución de las competencias, apreciación de la efectividad.',
    },
    {
      termino: 'Evaluación de desempeño',
      significado:
        'es un proceso que no puede ser subjetivo, por ello es importante la contribución de los colaboradores de la empresa con el fin de buscar el cumplimiento de las metas u objetivos planteados en el desarrollo de las actividades que realiza la organización.',
    },
    {
      termino: 'Idóneo',
      significado:
        'es adecuado o cumple con todas las condiciones necesarias que se le exigen.',
    },
    {
      termino: 'Incentivos',
      significado:
        'pueden ser económicos o emocionales y se dan si se cumplen algunos objetivos de la organización.',
    },
    {
      termino: 'Indemnización',
      significado:
        'es la compensación a la que tiene derecho una persona que ha sido víctima de un acto que ha vulnerado algún aspecto de su vida.',
    },
    {
      termino: 'Indicador',
      significado:
        'métrica que sirve para verificar el cumplimiento de las metas en una empresa.',
    },
    {
      termino: 'Información',
      significado:
        'dato, documento, apunte, noticia, que es relevante para que sea compartida.',
    },
    {
      termino: 'Jerarquización',
      significado:
        'concepto aplicado en las organizaciones para identificar cadenas de mano respecto a su posición dentro de la estructura organizacional.',
    },
    {
      termino: 'Métricas',
      significado:
        'unidad de medida utilizada para colocar parámetros en los indicadores de acuerdo con los objetivos planteados.',
    },
    {
      termino: 'Oneroso',
      significado:
        'todo acto que implica la generación de prestaciones económicas por común acuerdo entre dos partes.',
    },
    {
      termino: 'Trabajo',
      significado:
        'ocupación que ejerce una persona, en la que obtiene una remuneración o pago.',
    },
    {
      termino: 'Vacante',
      significado:
        'hace referencia a un puesto de trabajo que no se encuentra ocupado por alguna persona y está disponible para que haya postulaciones por internos o externos de una organización.',
    },
    {
      termino: 'Verificación',
      significado:
        'comprobación, o confirmación de que se cumple lo previamente pactado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Actualícese. (2020). <em>Contrato de trabajo y proceso de contratación laboral en Colombia.</em> Actualícese.com.',
      link: 'https://actualicese.com/contratacion-laboral/',
    },
    {
      referencia:
        'Álvarez, G. (2015). <em>Gestión de desvinculación forzada en masa, como mecanismo para evitar la protesta social de los trabajadores.</em> Caso: Amazonic Mad S. R. L. Universidad Andina Simón Bolívar.',
      link: 'http://repositorio.uasb.edu.bo/handle/54000/1076',
    },
    {
      referencia:
        'Amo, A. (2019). <em>Reclutamiento y selección de personal.</em> Editorial Elearning S.L.',
      link:
        'https://books.google.com.co/books?id=63flDwAAQBAJ&printsec=frontcover&dq=seleccion+de+personal&hl=es-419&sa=X&redir_esc=y#v=onepage&q&f=false',
    },
    {
      referencia:
        'Arroyo Tovar, R. (2012). <em>Habilidades gerenciales: desarrollo de destrezas, competencias y actitud–.</em> Ecoe Ediciones',
      link:
        'https://www-digitaliapublishing-com.bdigital.sena.edu.co/visor/29968',
    },
    {
      referencia:
        'Avalo, Rosados, M.C (2016) <em>¿Cómo funciona la comunicación?</em>',
      link:
        'http://www.marcocarlosavalos.com/comunicacin-organizacional/2016/4/27/6-cmo-funciona-la-comunicacin',
    },
    {
      referencia:
        'Bizneo HR Software. (2019a). <em>>6 desafíos de la gestión del capital humano en RR.HH.</em Bizneo blog.',
      link:
        'https://www.bizneo.com/blog/6-retos-y-tendencias-de-la-gestion-de-recursos-humanos/',
    },
    {
      referencia:
        'Bizneo HR Software. (2019b). <em>Entrevista por competencias. ¿Qué son y qué tipos existen?</em> Bizneo blog.',
      link: 'https://www.bizneo.com/blog/entrevista-por-competencias/',
    },
    {
      referencia:
        'Chiavenato, I. (2020). Gestión del talento humano. <em>El nuevo papel de los recursos humanos en las organizaciones.</em> McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Chiavenato, A. (s.f.). <em>Administración de recursos humanos El capital humano de las organizaciones, 5. ed.</em> Mc Graw Hill Interamericana.',
      link: '',
    },
    {
      referencia:
        'Decreto 3743 de 1950. [Ministerio de Gobierno]. <em>Por el cual se modifica el Decreto número 2663 de 1950, sobre Código Sustantivo del Trabajo.</em> Diciembre 20 de 1950. DO. Nº 27.504.',
      link:
        'https://www.redjurista.com/Documents/decreto_3743_de_1950_poder_ejecutivo.aspx#/',
    },
    {
      referencia:
        'Dessler, G. (2009). <em>Administración de recursos humanos (11 ed.).</em> Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Dolan, S., Valle, R. y López, A. (2014). <em>La gestión de personas y del talento. La gestión de los recursos humanos en el siglo XXI.</em> McGraw-Hill',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=7590',
    },
    {
      referencia:
        'EAE Business School. (2017). <em>Medios y canales para la comunicación interna corporativa.</em>',
      link:
        'https://www.eae.es/actualidad/noticias/medios-y-canales-para-la-comunicacion-interna-corporativa',
    },
    {
      referencia:
        'Economía desde casa. (2021).<em>La comunicación interna y sus tipos.</em> [Video] YouTube.',
      link: 'https://www.youtube.com/watch?v=BcnNHFIaRgI',
    },
    {
      referencia:
        'Giraldo, L. (2018). <em>Tipos de contratos en Colombia.</em> ALIMENTOS.',
      link: 'https://www.revistaialimentos.com/tipos-de-contratos-en-colombia/',
    },
    {
      referencia:
        'Gonzáles, Mármol. A, (2010) <em>¿Por qué es tan importante hoy la evaluación del desempeño del personal? Revista Debates IESA</em> , volumen XV . Número 2.',
      link:
        'http://virtual.iesa.edu.ve/servicios/wordpress/wp-content/uploads/2013/09/a-10marmol.pdf',
    },
    {
      referencia:
        'Grados, J. (2013). <em>Reclutamiento, selección, contratación e inducción del personal.</em> Editorial El Manual Moderno.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=1398',
    },
    {
      referencia:
        'Koontz, H. y Weihvich, H. (2018) <em>Administración una Perspectiva Global</em>, 12. ed. Mc Graw-Hill.',
      link: '',
    },
    {
      referencia:
        'Pascual Bravo Virtual. (2021). <em>Liderazgo y trabajo en equipo.</em> [Video] YouTube.',
      link: 'https://www.youtube.com/watch?v=_rPJ_eZzlcw',
    },
    {
      referencia:
        'Rubio, G., López, L. y Parra, M. (2020). <em>Gerencia del talento humano.</em> Ediciones de la U.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=11716',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Angélica Castro Salazar',
          cargo: 'Experta temática',
          centro: 'Centro Regional Antioquia',
        },
        {
          nombre: 'María Camila Álvarez Trujillo',
          cargo: 'Experta temática',
          centro: 'Centro Regional Antioquia',
        },
        {
          nombre: 'Liliana María Ceballos Gutiérrez',
          cargo: 'Asesora metodóloga Diseño y desarrollo curricular',
          centro: 'Diseño, confección y moda -  Regional Antioquia',
        },
        {
          nombre: 'Pedro Luis Sossa Ramírez',
          cargo: 'Diseño y desarrollo curricular',
          centro: 'Diseño, confección y moda - Regional Antioquia',
        },
        {
          nombre: 'Fernelis Mauricio Echeverri',
          cargo: 'Experto temático',
          centro: 'Diseño, confección y moda - Regional Antioquia',
        },
        {
          nombre: 'Vilma Perilla',
          cargo: 'Diseñadora Instruccional',
          centro: 'Centro de Gestión Industria - Regional Distrito Capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Metodóloga para la formación virtual',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrección de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesora Metodológica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Corrector de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Camilo Andres Bolaño Rey',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Emilcen Jaimes Caballero',
          cargo: 'Actividad Didáctica',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
