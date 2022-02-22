# CQRE WEB 관리자 API
Node.js와 Express.js를 이용하여 개발한 REST API

## Settings
```.gitignore```에 등록된 ```/config``` 폴더에는 두 개의 파일이 존재함
```config.json```과 ```secret.js```로 이루어짐  
       
       
#### config.json

해당 파일은 Sequelize의 데이터베이스 관련 설정 파일임

#### secret.js

해당 파일은 cors 옵션을 포함함

## Run application
```
node index.js

pm2 start index.js
```

가급적 pm2를 사용해서 관리하는 것을 권함

## API Documentation

passport 적용 이후 작성 예정