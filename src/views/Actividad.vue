<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Prácticas de guía ecológica en entornos naturales.',
      titulo: 'Cuestionario',
      introduccion:
        'Lea cada enunciado referente a los temas desarrollados en el componente formativo y elija una opción según corresponda.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es una cualidad esencial en un guía turístico?',
          imagen: require('@/assets/actividad/img-1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Impaciencia', esCorrecta: false },
            { id: 'b', texto: 'Conocimiento del área', esCorrecta: true },
            { id: 'c', texto: 'Falta de liderazgo', esCorrecta: false },
            { id: 'd', texto: 'Ser poco comunicativo', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué debe tener un guía turístico en cuanto a conocimientos?',
          imagen: require('@/assets/actividad/img-2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Conocimiento general.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Información precisa y actualizada sobre la ruta.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Experiencia en primeros auxilios.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Ninguno.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Cuál es un deber del guía turístico?',
          imagen: require('@/assets/actividad/img-3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Exagerar la información.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Garantizar la seguridad del grupo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ignorar las preguntas de los turistas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Priorizar el horario sobre la seguridad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cuál es el rol principal de un guía durante un recorrido?',
          imagen: require('@/assets/actividad/img-4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Vender productos turísticos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Proveer información y seguridad.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Tomar fotografías.', esCorrecta: false },
            { id: 'd', texto: 'Liderar sin preparación.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de las siguientes habilidades es esencial para un guía turístico?',
          imagen: require('@/assets/actividad/img-5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Uso de lenguaje técnico.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Ser elocuente sin necesidad de retroalimentación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Hablar de forma clara, directa y escuchar activamente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Hablar continuamente para mantener la atención.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué acción debe realizar un guía turístico al manejar un grupo numeroso?',
          imagen: require('@/assets/actividad/img-6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorar las preguntas para mantener el ritmo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Dividir el grupo en subgrupos y asignar responsabilidades.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'No preocuparse por las necesidades individuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Avanzar rápidamente para no perder tiempo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Cómo debe comunicarse el guía en situaciones de emergencia?',
          imagen: require('@/assets/actividad/img-7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Callarse y observar.', esCorrecta: false },
            { id: 'b', texto: 'Con calma y claridad.', esCorrecta: true },
            { id: 'c', texto: 'Rápido y sin detalle.', esCorrecta: false },
            { id: 'd', texto: 'De forma agresiva.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cómo debe actuar el guía frente a conflictos en el grupo?',
          imagen: require('@/assets/actividad/img-1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ignorar el conflicto.', esCorrecta: false },
            { id: 'b', texto: 'Escuchar y mediar.', esCorrecta: true },
            {
              id: 'c',
              texto: 'Actuar de manera autoritaria.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'No involucrarse.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué aspecto es fundamental en el manejo de grupos?',
          imagen: require('@/assets/actividad/img-2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Liderazgo y organización.', esCorrecta: true },
            {
              id: 'b',
              texto: 'Priorizar a un miembro del grupo.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Ignorar las opiniones.', esCorrecta: false },
            { id: 'd', texto: 'Mantenerse en silencio.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué NO es adecuado en el manejo de grupos?',
          imagen: require('@/assets/actividad/img-3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Escuchar a todos.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Adaptarse a sus necesidades.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Crear favoritismos.', esCorrecta: true },
            {
              id: 'd',
              texto: 'Brindar instrucciones claras.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué implica conocer el camino?',
          imagen: require('@/assets/actividad/img-4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Entender riesgos y alternativas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo el nombre del sendero.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Nada, improvisación es suficiente.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Solo el destino final.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Por qué es importante la preparación del recorrido?',
          imagen: require('@/assets/actividad/img-5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Para evitar desviaciones.', esCorrecta: true },
            {
              id: 'b',
              texto: 'Porque así lo exige el reglamento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para que el grupo no se aburra.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Para perder tiempo.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Cuál es una práctica segura al iniciar una caminata?',
          imagen: require('@/assets/actividad/img-6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No planificar el itinerario.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Llevar equipo adecuado.', esCorrecta: true },
            { id: 'c', texto: 'Dejar el grupo a su ritmo.', esCorrecta: false },
            { id: 'd', texto: 'No hacer pausas.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Cuál es una pieza esencial en el equipo de seguridad?',
          imagen: require('@/assets/actividad/img-7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Radio de comunicación.', esCorrecta: true },
            { id: 'b', texto: 'Teléfono celular.', esCorrecta: false },
            { id: 'c', texto: 'Reproductor de música.', esCorrecta: false },
            { id: 'd', texto: 'Libreta de apuntes.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué debe hacer el guía en caso de lesión?',
          imagen: require('@/assets/actividad/img-1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Proveer primeros auxilios básicos.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Continuar sin atender.', esCorrecta: false },
            { id: 'c', texto: 'Ignorar la situación.', esCorrecta: false },
            { id: 'd', texto: 'Buscar ayuda en el grupo.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Por qué es importante no dejar residuos en la naturaleza?',
          imagen: require('@/assets/actividad/img-2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Para mantener el entorno.', esCorrecta: true },
            { id: 'b', texto: 'Para atraer animales.', esCorrecta: false },
            { id: 'c', texto: 'Para llenar el espacio.', esCorrecta: false },
            { id: 'd', texto: 'Para que otros limpien.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Qué diferencia a un camino de un sendero en turismo?',
          imagen: require('@/assets/actividad/img-3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El camino es más largo que el sendero.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El sendero es más natural y menos intervenido que el camino.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los caminos están destinados solo para vehículos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los senderos son rutas urbanas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué debe hacer un guía con los desechos del grupo?',
          imagen: require('@/assets/actividad/img-4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ignorarlos.', esCorrecta: false },
            { id: 'b', texto: 'Asegurar su recolección.', esCorrecta: true },
            { id: 'c', texto: 'Dejar en el sitio.', esCorrecta: false },
            { id: 'd', texto: 'Esconderlos.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Cuál es una práctica responsable con los residuos?',
          imagen: require('@/assets/actividad/img-5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Dejarlos en el camino.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Llevar bolsas para recogerlos.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Ignorarlos.', esCorrecta: false },
            { id: 'd', texto: 'Tirarlos en arroyos.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es la regla básica en áreas naturales sobre los residuos?',
          imagen: require('@/assets/actividad/img-6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '"No dejes rastro".', esCorrecta: true },
            { id: 'b', texto: '"Deséchalos".', esCorrecta: false },
            { id: 'c', texto: '"Tíralos donde sea".', esCorrecta: false },
            { id: 'd', texto: '"Ignóralos".', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
