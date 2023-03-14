# veutify-project1

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

### Docker
docker run -it -p 8080:80  --name vuejs-assignment  arunkumar42/vue-assignment1:latest

### Json Server with docker: 
with default loaded json
docker run --name json-server -d -p 3000:3000  arunkumar42/json-server

verify: http://localhost:3000/posts

replace json: update file with json data on location : /home/json-server/db.json

docker run --name json-server -d -p 3000:3000 -v /home/json-server/db.json:/opt/db.json arunkumar42/json-server

### Json Server
json-server --watch data/db.json
