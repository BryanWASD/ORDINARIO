function funcion(){
	usr = document.getElementById('usuario').value;
	if (usr == "admin") {
		location.href = "admin.html";
	}else{
		location.href = "usuario.html";
	}
}


function guardar(){
	alert('Cambios guardados correctamente');
}

function enviar(){
	alert('Producto listo para enviar');
}


