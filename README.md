# Student Management

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

## Scrypt commands

* `yarn start:dev` or `npm run start:dev`
* `yarn build` or `npm run build`
* `yarn vite:preview` or `npm run vite:preview`

## For use on local development

* Use 'start:dev' command for serve it in development mode.

## For use on production

* Use 'build' command and export 'dist' directory for you space and serve it.

## Project pattern used

In this project, the Vue 3 TypeScript Setup structure was used to 
develop all the pages and components of the application. 
And also SASS SCSS for compose components style.

## Path structures

### How to use paths

* aseets
    * For implements app assets
* components
    * For develop app components
* layouts
    * For develop app layouts
* pages
    * For develop app pages and your internal pages
* routes
    * For create isolated route modules
* store
    * For create app global state and isolated route modules
* utils
    * For develop development helpers

### All application paths

1. aseets
   * scss
2. components
   * _layout
3. layouts
4. pages
   * dashboard
     * _student
   * login
5. routes
   * student
6. store
   * alert
   * layouts
   * student
   * user
7. utils

## Dependences

* @devindex/vue-mask
  * For apply input masks
* @mdi/font
  * For complement vuetify icons
* axios
  * For create a custom Api
* vue
  * For use vue framework
* vue-router
  * For implement internal routes
* vuetify
  * For use vuetify UI material
* vuex
  * for implement application state

## Dev dependences

* @vitejs/plugin-vue
  * For use vite with vue
* @types/@devindex/vue-mask
  * For get Types of vue-mask
* prettier
  * For code format
* sass
  * For use sass in vue components
* typescript
  * For use typescript with vue
* vite
  * For serve and build application
* vue-tsc
  * For compile vue with typescript


## Proposed improvements

* Do Header Component for apply on App Layout and use this for compose mobile responsive design.
* Implement Index Dashboard for increment any future application modules.
* Implement RefreshToken for update AccessToken.
* Implement this application in Docker container for serve this in production mode.
* Implement authentication middleware on application routes to verify session on internal route exchanges.
* Implement Users Modules and Administration panel for this.