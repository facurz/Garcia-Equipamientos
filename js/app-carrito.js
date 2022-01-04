btnCarrito = document.getElementById("btnCarrito"); //guardo elemento del dom
btnFinalizarCompra = document.getElementById("btnFinalizarCompra");

class Producto{ // genero una clase para crear y agregar productos
  constructor(id, nombre, categoria, urlImg, precio, stock, cantidad){
    this.id = id,
    this.nombre = nombre,
    this.categoria = categoria,
    this.urlImg = urlImg;
    this.precio = precio,
    this.stock = stock,
    this.cantidad = cantidad || 0
    
   
  }
  aumentarCantidad(){
    this.cantidad++
  }
}

// Creación de los array catálogo y carrito
const catalogo = []
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

//Creacion de cada producto utilizando la clase Producto
const producto01 = new Producto("1", "Cocina Tecnocalor 58 cm", "cocinas", "./assets/categ_cocinas/Cocina_Tecnocalor_58cm_fundiciondehierrro.jpg", 37990, 1);
const producto02 = new Producto("2", "Cocina 4 hornallas 58 cm", "cocinas", "./assets/categ_cocinas/Cocina4Hornallas_58cm.jpeg", 42990, 4);
const producto03 = new Producto("3", "Cocina Depaolo 4 hornallas", "cocinas", "./assets/categ_cocinas/Cocina_Depaolo_4hornallasyPlanchaConCarlitero.jpeg", 60500, 2);
const producto04 = new Producto("4", "Cocina Sol Real 6 hornallas", "cocinas", "./assets/categ_cocinas/Cocina_Sol_Real_conparrilla_6hornallas.png", 64990, 6);  
const producto05 = new Producto("5", "Cocina Tecnocalor c/ carlitera", "cocinas", "./assets/categ_cocinas/Cocina_Tecnocalor4_plancha_con_Carlitera.jpg", 51490, 8);
const producto06 = new Producto("6", "Multicocina Tecnocalor c/ freidora", "cocinas", "./assets/categ_cocinas/Multicocina_Tecnocaor_4H+planchayfreidora.jpg", 68490, 3);
const producto07 = new Producto("7", "Campana Morelli Prego", "campanas", "./assets/categ_campanasPared/Campana_TST_Atuel_60m.jpg", 62590, 5);
const producto08 = new Producto("8", "Campana TST Sulata", "campanas", "./assets/categ_campanasPared/Campana_TST_Traful_60m.jpg", 48530, 4);
const producto09 = new Producto("9", "Campana TST Sulata", "campanas", "./assets/categ_campanasPared/Campana_TST_Colhue_60cm.jpg", 36080, 6);
const producto10 = new Producto("10", "Campana Vitrocerámico TST", "campanas", "./assets/categ_campanasPared/Campana_TST_Lacar_60cm.jpg", 65990, 6);  
const producto11 = new Producto("11", "Campana Hafele TST", "campanas", "./assets/categ_campanasPared/Campana_TST_Tamel_60m.jpg", 57000, 9);
const producto12 = new Producto("12", "Campana Cook & Food CF35", "campanas", "./assets/categ_campanasPared/Campana_Luxorgas_Retro__900.jpg", 34590, 13); 
const producto13 = new Producto("13", "Anafe Morelli Prego 900", "anafes", "./assets/Anafes/Anafe_Morelli_Prego.png", 52590, 1);
const producto14 = new Producto("14", "Anafe TST Sulata 4 Hornallas", "anafes", "./assets/Anafes/Anafe_TST_Sulata_4hornallas.jpg", 47330, 4);
const producto15 = new Producto("15", "Anafe TST Sulata 2 Hornallas", "anafes", "./assets/Anafes/Anafe_TST_Sulata_2hornallas.jpg", 26080, 2);
const producto16 = new Producto("16", "Anafe Vitrocerámico TST 4 H", "anafes", "./assets/Anafes/Anafe_Vitroceramico_TST_4H.jpeg", 64990, 6);  
const producto17 = new Producto("17", "Anafe Vitroceramico TST 2 H", "anafes", "./assets/Anafes/Anafe_Vitroceramico_TST_2H.jpeg", 37000, 8);
const producto18 = new Producto("18", "Anafe Cook & Food CF35", "anafes", "./assets//Anafes/Anafe_CookandFood_cf35.jpg", 24490, 3); 
const producto19 = new Producto("19", "Horno Electrico TST Donna", "hornos", "./assets/categ_hornos/Horno_electrico_TST_Donna.jpg", 22600, 1);
const producto20 = new Producto("20", "Horno Pastelero Depaolo 6 moldes", "hornos", "./assets/categ_hornos/Horno_Patelero_Depaolo.jpg", 38000, 4);
const producto21 = new Producto("21", "Horno convector electrico Tecnocalor", "hornos", "./assets/categ_hornos/Horno_Convector_electricoz10.jpeg", 69990, 2);
const producto22 = new Producto("22", "Horno Electrico Para Empotrar Fornello", "hornos", "./assets/categ_hornos/Horno_electrico_empotrar_TST_Fornello.jpg", 75990, 6);  
const producto23 = new Producto("23", "Horno Para Empotrar Luxor Gas Garden", "hornos", "./assets/categ_hornos/Horno_Luxor_Gas_Garden550.jpg", 102000, 8);
const producto24 = new Producto("24", "Horno Luxor Para Empotrar gas Country", "hornos", "./assets/categ_hornos/Horno_Luxor_country.jpg", 124490, 3); 
const producto25 = new Producto("25", "Parrilla a Gas Sauce 60 cm", "parrillas", "./assets/categ_parrillas/parrilla_sauce_60.jpg", 117300, 1);
const producto26 = new Producto("26", "Parrilla Sauce a Gas CF35", "parrillas", "./assets/categ_parrillas/parrillas_cf35.jpg", 32990, 4);
const producto27 = new Producto("27", "Parrilla Sauce a Gas CF90", "parrillas", "./assets/categ_parrillas/parrilla-a-gas-cf90.jpg", 60650, 2);
const producto28 = new Producto("28", "Parrilla a Carbon Cipres", "parrillas", "./assets/categ_parrillas/parrillas_carbon_cipres.jpg", 83590, 6);  
const producto29 = new Producto("29", "Parrilla a Carbon Cipres", "parrillas", "./assets/categ_parrillas/parrilla_carbon_90cm.jpg", 95600, 8);
const producto30 = new Producto("30", "Parrilla Sauce a gas CF 120", "parrillas", "./assets/categ_parrillas/parrilla_gas_cf120.jpg", 72500, 3); 
const producto31 = new Producto("31", "Pastalinda Roja. 9 Posiciones", "pastas", "./assets/categ_pastas/pastalinda_roja.jpg", 21300, 3); 
const producto32 = new Producto("32", "Pastalinda Blanca. 9 Posiciones", "pastas", "./assets/categ_pastas/pastalinda_blanca.png", 21300, 4);
const producto33 = new Producto("33", "Accesorio Raviolero Pastalinda Original", "pastas", "./assets/categ_pastas/raviolero.jpg", 9180, 3);
const producto34 = new Producto("34", "Sobadora RD con fideero y raviolero", "pastas", "./assets/categ_pastas/sobadora_RD_fideero.png", 46500, 2);
const producto35 = new Producto("35", "Sobadora RD con fideero 300 mm.", "pastas", "./assets/categ_pastas/sobadora_RD_300mm.png", 39900, 5);  
const producto36 = new Producto("36", "Secapasta Pastalinda Original", "pastas", "./assets/categ_pastas/secapasta.jpg", 4300, 2);
const producto37 = new Producto("37", "Balanza Systel Croma 30 kgs", "balanzas", "./assets/categ_balanzas/balanza_systel_croma.jpg", 18390, 6); 
const producto38 = new Producto("38", "Cortadora Fiambres Moretti 330", "balanzas", "./assets/categ_balanzas/cortadora_fiambre_moretti.jpg", 68990, 4);
const producto39 = new Producto("39", "Balanza Systel Cuora con Impresor full", "balanzas", "./assets/categ_balanzas/balanza_quora.jpg", 59000, 3);
const producto40 = new Producto("40", "Balanza Systel Inox. Clipse 30 kgs", "balanzas", "./assets/categ_balanzas/balanza_systel_clipse.png", 18990, 1);
const producto41 = new Producto("41", "Impresor Systel Eco.", "balanzas", "./assets/categ_balanzas/impresor_Eco.jpg", 19800, 5);  
const producto42 = new Producto("42", "Combo Cortadora 330 + Balanza Systel", "balanzas", "./assets/categ_balanzas/combo_balanza_cortadora.jpeg", 87390, 2);
const producto43 = new Producto("43", "Kamado Argentino Asador Pampero", "kamados", "./assets/categ_kamados/kamado_pampero.jpg", 143990, 2); 
const producto44 = new Producto("44", "Kamado Argentino Asador Porteño", "kamados", "./assets/categ_kamados/kamado_portenio.jpg", 172900, 2);
const producto45 = new Producto("45", "Kamado Argentino Asador Criollo", "kamados", "./assets/categ_kamados/kamado_criollo.jpg", 191000, 2);
const producto46 = new Producto("46", "Kamado Argentino Asador Gran Criollo", "kamados", "./assets/categ_kamados/kamado_gran_criollo.jpg", 220300, 1);
const producto47 = new Producto("47", "Kamado Argentino Mini Criollo Blanco", "kamados", "./assets/categ_kamados/mini_kamado_blanco.jpg", 66300, 5);  
const producto48 = new Producto("48", "Kamado Argentino Mini Pampero Neg54ro", "kamados", "./assets/categ_kamados/mini_kamado_pampero.png", 114000, 2);
const producto49 = new Producto("49", "Cacerola de fundicion de hierro 8 lts", "otros", "./assets/categ_otros/cacerola_fundicion.jpg", 7990, 12); 
const producto50 = new Producto("50", "Wok de fundicion de hierro 33cm", "otros", "./assets/categ_otros/wok_fundicion.jpeg", 4990, 8);
const producto51 = new Producto("51", "Mezcladora de Carne Accesorio a Picadora 32", "otros", "./assets/categ_otros/mezcladora_decarne.png", 36990, 10);
const producto52 = new Producto("52", "Batidora KitchenAid 5 lts Roja", "otros", "./assets/categ_otros/batidora.jpg", 65990, 11);
const producto53 = new Producto("53", "Impresor Systel Eco Ancho papel continuo 57 cm", "otros", "./assets/categ_balanzas/impresor_Eco.jpg", 19800, 5);  
const producto54 = new Producto("54", "Combo Cortadora 330 + Balanza Systel", "otros", "./assets/categ_balanzas/combo_balanza_cortadora.jpeg", 87390, 5);

//Incorporo los productos creados al carrito  
catalogo.push(producto01, producto02, producto03, producto04, producto05, producto06, producto07, producto08, producto09, producto10, producto11, producto12, producto13, producto14, producto15, producto16, producto17, producto18, producto19, producto20, producto21, producto22, producto23, producto24, producto25, producto26, producto27, producto28, producto29, producto30, producto31, producto32, producto33, producto34, producto35, producto36, producto37, producto38, producto39, producto40, producto41, producto42, producto43, producto44, producto45, producto46, producto47, producto48, producto49, producto50, producto51, producto52, producto53, producto54);  

 
//función para agregar un producto
 const agregarProducto = (clicked_id) => {
  if(localStorage.getItem("usuarioLogueado")){ //si el usuario está logueado sucede la función
    
    //contador carrito
    let total = 1;
    for(let i=0; i<carrito.length;i++){
        total += carrito[i].cantidad;}
    const contador = document.getElementById('contador');
    contador.innerHTML = total;
    
    let botonClickeado = document.getElementById(clicked_id); //guardo elemento del dom
    let busqueda = catalogo.find(el=> el.id === clicked_id); // verifico si el producto está en el catálogo
    let compra = carrito.find(el=> el.id === clicked_id) // verifico si el producto está en el carrito
    
    if(busqueda.stock > 0){ // condición de stock
      if(compra){
        compra.aumentarCantidad(); //si el producto está en el carrito entonces aumento la cantidad
        busqueda.stock--; // se modifica el stock
        swal({
          title: "Felicitaciones!",
          text: "El producto se agregó carrito",
          icon: "success",
          button: "Continuar compra",});
          localStorage.setItem("carrito",JSON.stringify(carrito))
      }else{
      carrito.push(busqueda); //si el producto no está en el carrito entonces se agrega
      busqueda.aumentarCantidad();
      busqueda.stock--; // se modifica el stock
      swal({
        title: "Felicitaciones!",
        text: "El producto se agregó carrito",
        icon: "success",
        button: "Continuar compra",});
        localStorage.setItem("carrito",JSON.stringify(carrito))
      }
    }else{
        botonClickeado.parentNode.innerHTML = `<p style="color: red">Sin stock</p>`; //mensaje si no hay stock
    } 
  }else{ //mensaje si el usuario no está registrado
    swal({
      title: "Atención",
      text: "Debe registrarse para comprar",
      icon: "info",
    });
  }
}

//función para ver lo que hay en el carrito
verCarrito = ()=>{
  if(localStorage.getItem("usuarioLogueado")){ //si el usuario está logueado sucede la función
      let precioTotal = carrito.reduce((previousValue, currentValue) => { //método para calcular el precio total
      return previousValue + (currentValue.precio * currentValue.cantidad)
    }, 0);
    $("#infoCarrito").empty();//metodo empty para que no repita el precioTotal
    for(const producto of carrito){ //iteración y visualización de los productos del carrito
      $("#infoCarrito").prepend(`<p style="color: black">• ${producto.nombre} | Cantidad: ${producto.cantidad} | Precio: $${producto.precio} </p>`)
    }
    $("#infoCarrito").append(`<p style="color: black">TOTAL $${precioTotal}</p>`)
    
    //api para cotizar en dolares el precio total del carrito
    fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    .then((data)=> data.json())
    .then((response)=>{
      return response[0].casa.venta
  }).then((response)=>{
    $("#infoCarrito").append(`<p style="color: black"><b>TOTAL en  u$s ----- ${(precioTotal /parseInt(response)).toFixed(2)}</b></p>`)
  })
    }else{
      $("#infoCarrito").empty();//empty para que no repita el mensaje 
      $("#btnFinalizarCompra").hide();
      $("#infoCarrito").append(`<h4 style="color: black">Debe registrase para acceder al carrito</h4>`)//mensaje si no está logueado
    }
}

//evento del btnCarrito
btnCarrito.onclick = ()=>{
  verCarrito();
}

// evento del btnFinalizarCompra
btnFinalizarCompra.onclick = ()=>{
  localStorage.setItem("compra",JSON.stringify(carrito)); //guardo la compra en localStorage
  localStorage.removeItem("carrito") // borro el carrito del localStorage
  $("#infoCarrito").empty();
  $("#infoCarrito").append(`<h2 style="color: black">GRACIAS POR SU COMPRA</h2>`)
  setTimeout(()=>{
    location.reload(); //recargo para traer el carrito vacio del localStorage
     },2000);
}





 
    

 


