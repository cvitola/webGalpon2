const buttonSend = document.querySelector("#send");
const buttonClear = document.querySelector("#clear");
const name = document.querySelector("#name");
const surname = document.querySelector("#surname");
const type = document.querySelector("#type");
const email = document.querySelector("#email");
const textInfo = document.querySelector("#text-info");
const error = document.querySelector("#error");
let errors =[];

buttonSend.addEventListener("click", validationForm);
buttonClear.addEventListener("click", clear);
function validationForm(){
	clearMessage();
	if(name.value ===""){
		errors.push("El campo Nombre debe ser completado");
		name.focus();
	}
	if(surname.value ===""){
		errors.push("El campo Apellido debe ser completado");
		surname.focus();
	}
	if(type.value ==="Tu opción"){
		errors.push("El Tipo de Consulta debe ser seleccionado");
		type.focus();
	}
	if(email.value ===""){
		errors.push("El campo Correo Electronico debe ser completado");
		email.focus();
	}
	if(textInfo.value ===""){
		errors.push("El campo Consulta debe ser completado");
		textInfo.focus();
	}

	if(errors.length != 0){
		error.innerHTML = 	`<div class="alert alert-danger" role="alert">
 							 Revisar!
							</div>`;
		debugger;					
		errors.forEach(e =>{
			error.innerHTML += `<p class="p-0 text-danger"><i class="far fa-tired"></i> ${e}</p>`;
		});

	}else{
		error.innerHTML =  	`<div class="alert alert-success" role="alert">
 							 Tus datos han sido enviado!
							</div>`;			
	}	
}

function clear(){
	clearMessage();
	name.value = "";
	surname.value = "";
	type.value = "Tu opción";
	email.value = "";
	textInfo.value = "";
}

function clearMessage(){
	let i = errors.length;
	errors.splice(0,i);
	error.innerHTML = "";
}