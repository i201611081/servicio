const conexion = require("./conexion.js");

module.exports = class ModeloLogin{

	static consultarUsuario(params,callback){

		conexion.connect((error, client, done) => {
            client.query("select * from Usuario where apodo_usuario = $1 and contrasena_usuario = $2", params, (err, res) => {
                done();
                if (err) {
                    callback(null);
                } else {
                    callback(res.rows);
                }
            });
        });

	}

}