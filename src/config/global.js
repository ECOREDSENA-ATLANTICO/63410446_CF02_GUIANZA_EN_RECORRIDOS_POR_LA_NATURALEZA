export default {
  global: {
    componenteFormativo: 'Prácticas de guía ecológica en entornos naturales',
    descripcionCurso:
      'El guía turístico debe comenzar su labor con un profundo autoconocimiento, seguido del dominio de conceptos fundamentales para construir una relación sólida con el grupo guiado. Este enfoque es crucial para desarrollar un perfil integral que potencie las técnicas de guianza.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal-.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'Perfil del guía turístico ',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Comunicación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Manejo de Grupos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Camino, Sendero y Caminata',
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
        download: 'downloads/CF02_63410446_CFA.pdf',
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
      tema: 'Manejo de Grupos',
      referencia: 'Tecnólogo en Guianza Turística 2017 SENA(Video)-YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Qk2Wl4bwSv0',
    },
    {
      tema: 'Camino, Sendero y Caminata',
      referencia: 'SENA (2023). Sendero ecológico. Noticias SENA.',
      tipo: 'Página <i>web</i>',
      link:
        'https://www.sena.edu.co/es-co/Noticias/Paginas/noticia.aspx?IdNoticia=6507',
    },
  ],
  glosario: [
    {
      termino: 'Atractivos turísticos',
      significado:
        'lugares o actividades de interés que motivan a los turistas a visitar un destino específico. Pueden incluir sitios históricos, parques naturales, o eventos culturales.',
    },
    {
      termino: 'Camino, sendero y caminata',
      significado:
        'términos que hacen referencia a las rutas predefinidas que el guía debe conocer y evaluar previamente, asegurando que sean seguras y adecuadas para los participantes, según sus condiciones físicas',
    },
    {
      termino: 'Comunicación efectiva',
      significado:
        'capacidad del guía para transmitir información clara, precisa y comprensible a los turistas, asegurando que el mensaje sea entendido y genere confianza en el grupo.',
    },
    {
      termino: 'Cultura local',
      significado:
        'conjunto de costumbres, tradiciones, creencias y prácticas propias de una región o comunidad que el guía debe presentar de manera respetuosa y auténtica.',
    },
    {
      termino: 'Itinerario',
      significado:
        'plan detallado de actividades y tiempos que el guía sigue para organizar la visita, asegurando que se cumplan todos los objetivos del recorrido y se respete el cronograma.',
    },
    {
      termino: 'Manejo de residuos',
      significado:
        'prácticas responsables promovidas por el guía para la correcta recolección y eliminación de desechos durante las actividades, con el fin de minimizar el impacto ambiental.',
    },
    {
      termino: 'Manejo de grupos',
      significado:
        'habilidad para gestionar dinámicas grupales, asegurando la participación activa de todos los integrantes, resolviendo conflictos y manteniendo el orden durante la actividad.',
    },
    {
      termino: 'Normas de seguridad',
      significado:
        'reglas y procedimientos establecidos para proteger a los turistas durante las actividades, minimizando riesgos y garantizando un entorno seguro en todo momento.',
    },
    {
      termino: 'Perfil del guía turístico',
      significado:
        'conjunto de habilidades, conocimientos y actitudes que un guía debe poseer, como liderazgo, comunicación efectiva y amplio conocimiento del destino turístico.',
    },
    {
      termino: 'Planificación turística',
      significado:
        'proceso de organización y preparación de las actividades, recursos y tiempos, con el objetivo de optimizar la experiencia del turista y asegurar que todas las actividades se desarrollen de forma adecuada.',
    },
  ],
  referencias: [
    {
      referencia:
        'Castro, J. V., & et al. (1994). Manual de selección de residuos sólidos en la hotelería y uso de algunos productos biodegradables.',
    },
    {
      referencia:
        'Corporación Nacional de Turismo - Colombia. (1996). Rutas camineras de Colombia: Boyacá. Bogotá.',
    },
    {
      referencia:
        'Corporación Nacional de Turismo - Colombia. (1996). Rutas camineras de Colombia: Cundinamarca. Bogotá.',
    },
    {
      referencia:
        'Corporación Clorofila Urbana. (2003). Manual de guianza. Bogotá.',
    },
    {
      referencia:
        'Cruz Roja Colombiana. (n.d.). Guía de primeros auxilios. Bogotá: Ediciones Ltda.',
    },
    {
      referencia:
        'González, M. Y. (n.d.). Manejo efectivo de un grupo. México: Editorial Trillas.',
    },
    {
      referencia: 'Ley 1558 del 10 de julio de 2012. (n.d.). Ley de Colombia.',
    },
    {
      referencia:
        'Martínez, M. J. (n.d.). Acampada y supervivencia. Bogotá: Ediciones Perea.',
    },
    {
      referencia:
        'Picazo, C. (1996). Asistencia y guía a grupos turísticos: Gestión turística. Madrid: Editorial Síntesis.',
    },
    {
      referencia:
        'Primer Congreso Nacional de Ecoturismo - Memorias. (1995). Santa Marta: Publicaciones SENA.',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje SENA. Fundación para la Conservación del Medio Ambiente. (n.d.). Curso para guías turísticos.',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje SENA. Centro Nacional de Hotelería, Turismo y Alimentos. (1994). Castro, J. V., & et al. Manual de selección de residuos sólidos en la hotelería y uso de algunos productos biodegradables. Bogotá.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ángela Viviana Páez Perilla',
          cargo: 'Experta temática',
          centro: 'Agroindustrial Regional -  Quindío ',
        },
        {
          nombre: 'Gilberto Herrera Delgans',
          cargo: 'Evaluador instruccional',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Miguel Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Antonio Vecino Valero',
          cargo: 'Diseñor web',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Jorge Leonardo Camacho Pardo',
          cargo: 'Desarrollador <em> full stack</em>',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Nelson Ivan Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Juan Carlos Cardona Acosta',
          cargo: 'Validador y vinculador de recursos digitales',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales ',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga -  Regional Atlántico',
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
