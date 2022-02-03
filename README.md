# dynafios


## Project setup
This project is at the moment only set up in the frontend, so the following steps need to be performed in the `frontend` directory 

1. Before starting the project you need to add the VUE_APP_API_KEY enviromental variable. This variable contains the google API key that will be used. To add this you can either create a `.env` file in the root directory of `frontend` or add it via the export command `export VUE_APP_API_KEY={your api key}`.

2. Second step would be to install the node_modules from the package.json 
```
npm install
```

### Compiles and hot-reloads for development
3.A To build for testing and development please run the following command
```
npm run serve
```

### Compiles and minifies for production
3.B To build for production.
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### In Development
Still in development is the creation of a docker-compose.yml to run the code for testing purposes with a single command. (This has not yet been tested but will be added in future commits):
From the project root `Dynafios` run the following command
`docker-compose -e VUE_APP_API_KEY={your api key value}`
