# BSOC

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### For Windows Users

In order to run the code on your OS(ie. windows), you need to replace the following code written in the file named package.json inside the "scripts" onbject (5th line)
{
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
}

with the code 

{
    "serve": "set NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service serve",
    "build": "set NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service build",
}
Doing this would make your code run smoothly!

### Also make sure that you dont push the package.json file
