# Angular 22

- Nombre: Angular AF 75828 – GR 97831
- Duración: 30 horas
- Modalidad: On-line
- Fechas/Horario:
  - Días 8, 9, 10, 11 y 12 Junio 2026
  - Horario 9:00 – 15:00 hs  (8:30 - 15:30 hs)

- Instructor: Alejandro Cerezo Lasne <alce65@hotmail.es>

- Repositorio: https://github.com/IconoTC/Angular-AF-75828-GR-97831

Curso de Angular 22, versión publicada el 3 de Junio de 2026.

## Día 1 (L-08): Introducción a Typescript y Angular

- Introducción a Angular y su ecosistema.

- Entornos de desarrollo para Angular: 
  - Node: nvm (Node Version Manager)
  - Visual Studio Code
- Instalación de Angular CLI.
- Creación de un nuevo workspace Angular sin proyecto. `ng new`
- Creación de un nuevo proyecto (app) Angular. `ng generate app`
- Estructura de un workspace/proyecto Angular.
- Añadiendo ESLint y Prettier.

[descanso]: 11:05 - 11:35


- Angular CLI: Comandos básicos.
  - Servidor de desarrollo: `ng serve`.
  - Testing con Karma y Jasmine: `ng test`.
  - Construcción del proyecto: `ng build`.
- Generación de componentes: `ng generate`.
  - Elementos de un componente: HTML, CSS, TypeScript. 

- Elementos básicos de TypeScript.
  - Tipos de datos. Inferencia y anotación de tipos.
  - Tipado de funciones.
  - Tipos personalizados. Interfaces y tipos.

## Día 2 (M-09): Componentes y Rutas

<!-- 
- Elementos básicos de TypeScript (continuación).

  - Clases ES6 en TypeScript.
    - Modificadores de acceso.
    - Getters y Setters.
    - Herencia.
    - Clases abstractas.
-->

<!-- - Componentes: estado. Zone v. Zoneless
- Estado en los componentes con ZoneJS.
  - Componente Counter. Estado y eventos.
  - Detección del cambio: Zone v. Zoneless
  - Signals y estado
  - Zoneless y asincronía: uso de Signals
- Scaffolding. Core y Features
  - Componentes (pages): Home, Tasks, About.
- Rutas básicas. `app.routes.ts`
  - Array de rutas.
  - Array de opciones de menu
  - RouterOutlet en AppComponent.
  - Navegación. Componente menu. @for
  - SPA: RouterLink y RouterLinkActive
- Rutas Lazy. Default import en las páginas
- Componentes.
  - Componente Counter. Condicionales @If. [class]
  - Componente Greeting. Input de usuario: data binding. [(ngModel)]
  - Componente Layout. Proyección de contenido
    - Componente Header.
    - Componente Footer.
- Pipes. Location "es"
- Testing de componentes
  - Configuración de Karma y Jasmine.
  - Coverage istambul
  - Creación de pruebas unitarias para componentes. -->

## Día 3 (X-10). Comunicaciones y Arquitectura de componentes. Formularios TD

<!-- - Testing de componentes (continuación)
  - Pruebas unitarias para componentes con eventos y data binding.
- Debugging
- Comunicación entre componentes
  - Input. Decoradores @Input. función input(). Drilling del título
  - Output. Decorador @Output. EventEmitter. Función output(). Eventos del contador
  - Agrupando contadores.
  - Contadores. Eventos con valor
  - Testing de componentes con comunicación.
- Arquitectura de componentes
  - Componentes de presentación vs contenedores.
  - Componentes inteligentes vs tontos.
- Ejemplo: ToDo List
  - Entidad ToDo. Modelo y mock de datos.
  - Componente Tasks. Lógica del estado
  - Componente TodoItem. Input y Output (Eventos)
  - Componente TodoCreate. Output (Eventos). Forms Template Driven (TD) -->

## Día 4 (J-11). Servicios. Providers e injectors. Formularios DD

<!-- - Forms TD (review)
- Introducción a los servicios en Angular.
- Servicios y Providers. DI (Dependency Injection)
  - Provider root v. provider en un componente
- Servicios y patrón Repository
  - Servicio InMemoryTaskRepository. Mock de datos.
  - Uso de promesas y observables (RxJs)
  - Testing de servicios.
  - Uso en los componentes. Inyección de dependencias.
  - Repositorio y lógica de negocio (estado). 
- Formularios reactivos (DD)
  - FormGroup, FormControl, FormBuilder
  - Validaciones síncronas y asíncronas.
  - Testing de formularios reactivos. -->

## Día 5 (V-12). Servicios HTTP

<!-- - Repositorio y lógica de negocio (estado). Estrategias
  - Estrategia no optimista 1 repositorio / 2 estado   -->

<!-- - Formularios reactivos (review). Mensajes de validación
- Introducción a los servicios HTTP en Angular.ç
- Servicio fake basado en JSONServer.
  - Prueba con Postman
- Servicio HttpClientModule. Observables (RxJs).
  - Creación de un ApiRepositoryService.
  - Configuración del servicio HTTP: provider
  - Uso desde la feature Tasks.
- Servicios stateful: patrón Flux
  - Estado con RxJS: Subjects
  - Clonado de ToDo como ToDo-Flux
  - Uso del estado desde los componentes ToDo...
  - Uso desde cualquier parte de la aplicación.
  - Signals y estado -->