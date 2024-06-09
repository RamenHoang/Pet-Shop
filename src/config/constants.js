require('dotenv').config();

module.exports = {
    ROLE_ADMIN: 'admin',
    ROLE_CUSTOMER: 'customer',
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
    COOKIE_MAX_AGE: process.env.COOKIE_MAX_AGE,
}