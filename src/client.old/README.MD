# Linux Instructions:
    1. install nvm: https://github.com/nvm-sh/nvm
    3. install npm nvm install --lts && nvm use --lts
    4. fix npm issues, if any npm audit fix
	5. sudo apt install openjdk-11-jre-headless



# VUE
## To get it to compile:
```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p && sudo sysctl --system
```

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

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
