require('dotenv').config();
const path = require('path');
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const MongoStore = require('connect-mongo');

const route = require('./routes');
const db = require('./config/db');
const { COOKIE_MAX_AGE } = require('./config/constants');

const app = express();
const port = 3000;

//Connect DB
db.connect();

app.use(session({
  cookie: {
    maxAge: COOKIE_MAX_AGE,
  },
  secret: 'woot',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_CONNECT_URL,
  }),
}));
app.use(flash());
app.use(cookieParser());

//Process static file
app.use(express.static(path.join(__dirname, 'public')));

//Process input data to server
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'resources/views'));

//Router
route(app);

// 127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`App listening on port http://127.0.0.1:${port}`);
});
