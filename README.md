# HOW TO DEPLOY PET SHOP

## 1. Install Node.js. Version 18.16.0 is recommended.

## 2. Make file .env in the root folder of the project and fill it with the following content:
```
JWT_SECRET= # secret key for JWT
JWT_EXPIRES_IN= # expiration time for JWT in seconds
COOKIE_MAX_AGE= # expiration time for cookies in milliseconds
MONGO_CONNECT_URL= # URL for connection to MongoDB
```

## 3. Install dependencies:
```
npm install
```

## 4. Run the project:
```
npm run watch
npm start
```

## 5. Create super user:
```
npm run create-super-user
```