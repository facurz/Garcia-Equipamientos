// Traigo los elementos del DOM
const btnMenuCerrar = document.getElementById("btnMenuCerrar")
const btnMenuLogin = document.getElementById("btnMenuLogin");
const indexPage = document.getElementById("indexPage");
const loginPage = document.getElementById("loginPage");
const busquedaPage = document.getElementById("busquedaPage");
const productosPage = document.getElementById("productosPage");
const preguntasFrecuentesPage = document.getElementById("preguntasFrecuentesPage");
const comoComprarPage = document.getElementById("comoComprarPage");
const contactoPage = document.getElementById("contactoPage");
const validacionIngreso = document.getElementById("validacionIngreso");
const nombreUsuario = document.getElementById("nombreUsuario");
const claveUsuario = document.getElementById("claveUsuario");
const btnIngreso = document.getElementById("btnIngreso");
const validacionRegistro = document.getElementById("validacionRegistro");
const nombreRegistro = document.getElementById("nombreRegistro");
const claveRegistro = document.getElementById("claveRegistro");
const emailRegistro = document.getElementById("emailRegistro");
const btnRegistro = document.getElementById("btnRegistro");
const usuarioActual = document.getElementById("usuarioActual");


//Configuro los display inciales
indexPage.style.display = "block";
loginPage.style.display = "none";
busquedaPage.style.display = "none";
productosPage.style.display = "none";
preguntasFrecuentesPage.style.display = "none";
comoComprarPage.style.display = "none";
contactoPage.style.display = "none";
btnMenuCerrar.style.display ="none";
btnMenuLogin.style.display = "block";
$("#busquedaPage").hide;
$("#cocinas").show();
$("#campanas").hide();
$("#anafes").hide();
$("#hornos").hide();
$("#parrillas").hide();
$("#pastas").hide();
$("#balanzas").hide();
$("#kamados").hide();
$("#otros").hide();


//Declaro la clase Usuario
class Usuario {
	constructor(nombre, clave, email) {
		this.nombre = nombre
		this.clave = clave
		this.email = email
	}
}


// Array de usuarios del localStorage o array vacío en caso de no haber usuarios guardados.
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

//Función flecha para crear un nuevo usuario a traves del formulario de registro
const crearUsuario =() =>{
    let nombre = nombreRegistro.value;
    let clave = claveRegistro.value;
    let email = emailRegistro.value;
	//Validación de los datos ingresados
    if (nombre.length < 4 || clave.length < 4) {

		validacionRegistro.innerHTML = "El usuario y la clave deben tener 5 caracteres o más"
		validacionRegistro.style.color = "red"
		setTimeout(()=>{
			validacionRegistro.innerHTML = "Registrarse"
			validacionRegistro.style.color = "white"
		   },2000);
    
    }else if(email == ""){
        validacionRegistro.innerHTML = "Ingresar una dirección de email"
		validacionRegistro.style.color = "red"
		setTimeout(()=>{
			validacionRegistro.innerHTML = "Registrarse"
			validacionRegistro.style.color = "white"
		   },2000);
	//Sentencia de usuario registrado con éxito	
    }else{
        const usuario = new Usuario(nombre, clave, email)

		usuarios.push(usuario)
		localStorage.setItem("usuarios", JSON.stringify(usuarios))
		nombreRegistro.value = "";
		claveRegistro.value = "";
        emailRegistro.value = "";
		validacionRegistro.innerHTML = "Usuario registrado con éxito. Ingrese con su nuevo usuario."
		validacionRegistro.style.color = "white"
		setTimeout(()=>{
			validacionRegistro.innerHTML = "Registrarse"
		   },4000);
    }
}

//Función flecha para ingresar por el formulario de Ingresar
const login = (nombreUsuario,claveUsuario) => {
    
	//Verificar si el usuario existe en nuestro localStorage
	const chequeoUsuario = usuarios.find(usuario => usuario.nombre === nombreUsuario)

	//Si existe entrara en el if, si no nos va a mostrar el mensaje "Usuario no registrado" 
	if (chequeoUsuario) {
		//Vaciamos el div de validacionIngreso por si el usuario cometio un error antes
		
        //chequeamos si la clave coincide con la clave guardada en el usuario que encontramos en localStorage
		//si no coincide mostramos mensaje de validacion
		if (claveUsuario === chequeoUsuario.clave) {
			validacionIngreso.innerHTML = `Hola ${chequeoUsuario.nombre}`;
			validacionIngreso.style.color = "white"
			usuarioActual.innerHTML = `${chequeoUsuario.nombre} | CERRAR`
			btnMenuCerrar.style.display = "block";
			btnMenuLogin.style.display = "none";

			//Si coincide vamos a guardar el usuario que se logueo en el localStorage
			//seteando un item que va a ser usuarioLogueado
			localStorage.setItem("usuarioLogueado",JSON.stringify(chequeoUsuario))
			
		}else {
			validacionIngreso.innerHTML = "La clave ingresada es incorrecta"
			validacionIngreso.style.color = "red"
		
			setTimeout(()=>{
				validacionIngreso.innerHTML = "Ingresar"
				validacionIngreso.style.color = "white"
			   },2000);
		}
	} else {
		validacionIngreso.innerHTML = "El usuario no esta registrado"
		validacionIngreso.style.color = "red"
		
		setTimeout(()=>{
			validacionIngreso.innerHTML = "Ingresar"
			validacionIngreso.style.color = "white"
		   },2000);
	}
}

//Sentencia para mantener la sesion abierta en el sitio
if(localStorage.getItem("usuarioLogueado")){

	let nombreUsuario = JSON.parse(localStorage.getItem("usuarioLogueado")).nombre
	let claveUsuario = JSON.parse(localStorage.getItem("usuarioLogueado")).clave

	login(nombreUsuario,claveUsuario)
}

//Función flecha para cerrar la sesion
const cerrarSesionFunc = ()=>{
	localStorage.removeItem("usuarioLogueado")
	localStorage.removeItem("carrito")
	usuarioActual.innerHTML = `Cuenta`
	validacionIngreso.innerHTML = "Ingresar"
	validacionRegistro.innerHTML = "Registrarse"
	nombreUsuario.value = "";
	claveUsuario.value = "";
	location.reload();
}

//Eventos de todos los botones-------------------------------------------------------------------------

btnIngreso.onclick = (e) => {
	e.preventDefault();
	login(nombreUsuario.value,claveUsuario.value);
	
}

btnRegistro.onclick = (e) => {
	e.preventDefault();
	crearUsuario();
}

btnMenuLogin.onclick = (e) => {
	e.preventDefault();
	indexPage.style.display = "none";
	loginPage.style.display = "block";
	productosPage.style.display = "none";
	preguntasFrecuentesPage.style.display = "none";
	comoComprarPage.style.display = "none";
	contactoPage.style.display = "none";
}

btnMenuCerrar.onclick = ()=>{
	
	cerrarSesionFunc()
	btnMenuCerrar.style.display = "none";
	btnMenuLogin.style.display = "block";
}

//Login con efectos de Jquery -----------------------------------------------------------------------
$("#validacionRegistro").click(()=>{
    $("#formRegistro").slideDown("slow")
	$("#formIngreso").slideUp()
	$("#validacionIngreso").css({"font-size": "1.5rem", 
		"text-decoration":"underline",
		"font-weight":"300"
		});
	$("#validacionRegistro").css({  
				"font-size": "2rem", 
                "text-decoration":"none",
				"font-weight":"bold" });
 })

 $("#validacionIngreso").click(()=>{
    $("#formIngreso").slideDown("slow")
	$("#formRegistro").slideUp()
	$("#validacionRegistro").css({"font-size": "1.5rem", 
		"text-decoration":"underline",
		"font-weight":"300"
		});
		$("#validacionIngreso").animate({
				"font-size": "2rem",
		})
		$("#validacionIngreso").css({  
				"text-decoration":"none",
				"font-weight":"bold" });
 })

 