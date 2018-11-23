
var modeloPlato = require("./../modelo/plato.js");

module.exports = class plato{

	static listarMenuDia(req,res){
		modeloPlato.consultarMenuDia([],(rows)=>{
			if(rows != null)
				if(rows.length > 0)
					res.send({"estado":"ok","mensaje":"Lista de menu del dia","platos":rows});
				else
					res.send({"estado":"error","mensaje":"No hay menu del dia registrado"})
			else
				res.send({"estado":"error","mensaje":"Error al consultar"})
		});
	}

}