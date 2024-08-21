# Ilmastodieetti.fi frontend

This repository contains the Vue frontend code for the ilmastodieetti.fi/climatediet.fi application.
This version of the code was initially written in 2019 and the source was opened in 2024. The git history before the opening has been removed to simplify the opening process.

## Project structure

```
├───dist                                // the release build directory. Files are put here on npm run build
├───public                              // an "escape hatch" for static content. Put into the output as-is
├───src                                 // the source code directory
│   │   App.vue                         // Vue entry point, defines the whole page layout
│   │   main.ts                         // initializer script
│   │   router.ts                       // manages vue-router for transfers between tabs
│   ├───assets                          // static files (images, css...). These are managed in webpack during build
│   ├───components                      // generic UI components
│   ├───locale                          // localization files
│   ├───store                           // state management (Vuex) files
│   │   └───modules                     // view specific state files
│   ├───views                           // the higher level view components (i.e. tabs)
│   │   ├───housing
│   │   │   ├───modules
│   │   │   │  HousingView.vue
│   │   │   ...
└───tests
    └───unit                            // unit tests. Can be run with npm run test
            housingview.spec.ts
            startview.spec.ts
            ...
```

## Project setup

Use Node 18

```
npm install
```

## Enable autoformatting in VS Code

```
Install "Prettier - Code Formatter" to VS Code (restart VS Code)
Open settings.json (Ctrl + P -> search for settings.json)
Add following settings:

"[vue]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[typescript]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[javascript]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
},
"editor.formatOnSave": true,

If you want to autoformat all types of files, then just add:
  "editor.defaultFormatter": "esbenp.prettier-vscode",
```

### Compiles and hot-reloads for development

```
npm run dev
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Formats code using Prettier.

```
npm run format
```

### Run your unit tests

```
npm run test:unit
```
