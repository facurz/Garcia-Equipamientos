//Declaramos la url del archivo JSON local
const URLJSON = "js/datos.json"

// evento enviar formulario
$("#miFormulario").on("submit", validarFormulario);

//array vacío para pushear los datos del formulario
const consultas = JSON.parse(localStorage.getItem("consultas")) || []

// función para validar los datos del formulario
function validarFormulario(evento) {
    evento.preventDefault();
    //validación nombre
    nombre = $("#nombre").val();
    if(nombre.length == 0) {
      $("#nombre").attr("placeholder", "POR FAVOR AGREGAR UN NOMBRE");
      return;
      }else{
        // Si es correcto lo guardo en [consultas]
        consultas.push(`nombre: ${nombre}`);
      }
    //validación teléfono
    let telefono = $("#telefono").val();
    if(telefono.length == 0) {
      $("#telefono").attr("placeholder", `POR FAVOR AGREGAR UN TELEFONO`);
      return;
    }else{
      // Si es correcto lo guardo en [consultas]
      consultas.push(`telefono: ${telefono}`);
    }
    //validación email
    let email = $("#email").val();
    if(email.length == 0) {
      swal({
        title: "Atención",
        text: "Debe ingresar una dirección de email",
        icon: "info",
      });
        return;
    }else{
      // Si es correcto lo guardo en [consultas]
      consultas.push(`email: ${email}`);
    }
    //validación email
    let consulta = $("#consulta").val();
    if(consulta.length == 0) {
      $("#consulta").attr("placeholder", `POR FAVOR AGREGAR UN MENSAJE`);
      return;
    }else{
      // Si es correcto lo guardo en [consultas]
      consultas.push(`mensaje: ${consulta}`);
    }
    //si todos los campos están validados invoco la siguiente función
    mostrarMensaje();
    
    localStorage.setItem("consultas",JSON.stringify(consultas))
  }


function mostrarMensaje(){
  
  $("#validacion").append(`<h2 class="envioExitoso" style="text-align: center;">Hola ${nombre}!</h2>
                          <h2 class="envioExitoso" style="text-align: center;">Su consulta fue enviada con éxito.</h2>`);

  //remuevo los elementos donde se verá el mensaje de validación
  $("#label").hide();
  $("#consulta").hide();

  setTimeout(()=>{
    $(".envioExitoso").hide();
    $("#label").show();
    $("#consulta").show()
    $("#nombre").val("")
    $("#telefono").val("")
    $("#email").val("")
    $("#consulta").val("") 
  }, 3000);

  console.log(consultas);
  }






