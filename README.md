# Student Management

This application has developed with Vue3, TypeScript , Vuetify and Vite.

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