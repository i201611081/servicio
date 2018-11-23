const conexion = require("./conexion.js");

module.exports = class ModeloUsuario{

	static consultarMenuDia(params,callback){

		conexion.connect((error, client, done) => {
            client.query("select tc.descripcion_tiempo_comida,p.* from cartadia as cd inner join detallecartadia as dcd on cd.id_carta_dia = dcd.id_Carta_dia inner join plato as p on dcd.id_plato = p.id_plato inner join tiempocomida as tc on cd.id_tiempo_comida = tc.id_tiempo_comida where cd.fecha_carta_dia = now()::date order by cd.id_tiempo_comida", params, (err, res) => {
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