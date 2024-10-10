module.exports = {
    HOST: 'localhost',
    port: 3306,
    USER: 't92024',
    PASSWORD: 'CS@oc2024t9',
    DB: 'course-t9',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};