
var modeloUsuario = require("./../modelo/usuario.js");

module.exports = class ControladorUsuario{

	static login(req,res){
		let body = req.body;
		if(body.user && body.pass)
			modeloUsuario.consultarUsuario([body.user,body.pass],(rows)=>{
				if(rows != null)
					if(rows.length > 0)
						res.send({"estado":"ok","mensaje":"el usuario existe","usuario":rows[0]});
					else
						res.send({"estado":"error","mensaje":"el usuario no existe"})
				else
					res.send({"estado":"error","mensaje":"el usuario no existe"})
			});
		else
			res.send({"estado":"error","mensaje":"parametros faltantes"})
	}

}