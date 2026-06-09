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
    - Problemas de instalación
  - Visual Studio Code
    - Extensiones recomendadas
- Instalación de Angular CLI.
- Workspace y proyectos en Angular.
  - Creación de un nuevo workspace Angular sin proyecto. `ng new`
  - Creación de un nuevo proyecto (app) Angular. `ng generate app`
  - Estructura de un workspace/proyecto Angular.
  - Añadiendo ESLint (`ng add`) y Prettier.

[descanso]: 11:05 - 11:35


- Angular CLI: Comandos básicos.
  - Servidor de desarrollo: `ng serve`.
  - Testing con Vitest: `ng test`.
  - Testing con Playwright: `ng e2e`.
    - Problemas de versiones. Actualización con Version Lens 
  - Construcción del proyecto: `ng build`.
- Generación de componentes: `ng generate`.
  - Elementos de un componente: HTML, CSS, TypeScript. 
  - Template y estilos inline o en ficheros.
  - Guía de estilos actualizada
  - Scaffolding

- Elementos básicos de TypeScript.
  - Tipos de datos. Inferencia y anotación de tipos.
  - Tipado de funciones.
  - Tipos personalizados. Interfaces y tipos.

## Día 2 (M-09): Componentes y Rutas


- Elementos básicos de TypeScript (continuación).

  - Clases ES6 en TypeScript.
    - Modificadores de acceso.
    - Getters y Setters.
    - Herencia.
    - Clases abstractas.
  - Módulos ES6 en TypeScript.
    - Import y Export.
    - Módulos por defecto y nombrados.

 <!--
 
 - Generación de componentes: `ng generate component <nombre>`.
    - Programación declarativa en el template: {{}}, [], ()
    - Signals en el estado del componente y en la plantilla.
  
- Testing de componentes. Pruebas unitarias

  - Test con Vitest. Conceptos básicos y ejemplo
  - Elementos de los test en Angular: TestBed, fixture, detectChanges()
  - Test de implementación v. test de comportamiento.
  - Tests para componentes básicos.

- Scaffolding. Core

  - Componentes Header y Footer.
  - Componente Menu. Proyección de contenido
  - Componentes Card y Layout. Aspecto visual básico.
  - App como contenedor principal.

- Testing de todos los componentes
  - Test de Header, Footer, Menu, Card y Layout. 

-->

- [Descanso]: ....

<!-- 

- Scaffolding. Features

  - Componentes (pages): Home, About.

- Componentes.
  - Componente Counter. Eventos. (click)
  - Componente Greeting. Input de usuario: data binding. [(ngModel)]
  - Componente Counter2. Condicionales @If. [class]
  - Modificamos Menu. @for
- Referencias locales. #ref
  - Componente GreetingRef. Referencias locales en el template. 
 
 -->

<!-- 

- Componentes: estado. Zone v. Zoneless
- Estado en los componentes con ZoneJS.
  - Componente Counter. Estado y eventos.
  - Detección del cambio: Zone v. Zoneless
  - Signals y estado
  - Zoneless y asincronía: uso de Signals

-->

## Día 3 (X-10). Comunicaciones y Arquitectura de componentes. Formularios TD


- Rutas básicas. `app.routes.ts`
  - Array de rutas.
  - Array de opciones de menu
  - RouterOutlet en AppComponent.
  - Navegación. Componente menu. @for
  - SPA: RouterLink y RouterLinkActive
- Rutas Lazy. Default import en las páginas

- Comunicación entre componentes

  - Input. Decoradores @Input. función input(). Drilling del título
  - Output. Decorador @Output. EventEmitter. Función output(). Eventos del contador
  - Agrupando contadores. Estado en el componente padre
  - Contadores. Eventos con valor. Computed signals


## Día 4 (J-11). Servicios. Providers e injectors. Formularios DD



## Día 5 (V-12). Servicios HTTP

