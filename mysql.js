const mysql = require("mysql");

const createUnixSocketPool = async (config) => {
    const dbSocketPath = process.env.DB_SOCKET_PATH || "/cloudsql";

    // Establish a connection to the database
    return await mysql.createPool({
        user: "root", // e.g. 'my-db-user'
        password: "123456", // e.g. 'my-db-password'
        database: "stock", // e.g. 'my-database'
        host: "34.66.89.84",
        // Specify additional properties here.
        ...config,
    });
};
function db(sql) {
    return createUnixSocketPool()
        .then((connection) => {
            return connection.query(sql);
        })
        .then((error, row) => {
            console.log(error);
            console.table(row);
            return row;
        });
}


module.exports = db;