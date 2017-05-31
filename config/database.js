//Module.exports means that any files which import this file have direct access to the data or methods that are exported.
//In this case, we export the location of the database.

module.exports = {
    database: 'mongodb://localhost:27017/sst',
    secret: 'yoursecret'
}