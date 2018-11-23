const conexion = require("./conexion.js");

module.exports = class ModeloUsuario{

	static consultarUsuario(params,callback){

		conexion.connect((error, client, done) => {
            client.query("select * from Usuario where nombre_usuario = $1 and contrasena_usuario = $2", params, (err, res) => {
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