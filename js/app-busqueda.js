const resultadoBusqueda = document.getElementById("resultadoBusqueda");

const buscar = ()=>{
    //metodo para buscar a traves del inputBusqueda
    let busqueda = catalogo.filter(producto => producto.nombre.toUpperCase().includes($("#inputBusqueda").val().toUpperCase()));
    if(busqueda==""){
        alert("NO ENCONTRAMOS EL PRODUCTO");
        $("#inputBusqueda").val("")
        
        
    }else{
        indexPage.style.display = "none";
        loginPage.style.display = "none";
        busquedaPage.style.display = "block";
        productosPage.style.display = "none";
        preguntasFrecuentesPage.style.display = "none";
        comoComprarPage.style.display = "none";
        contactoPage.style.display = "none";
     
        //renderizo el le resultado de la busqueda   
        $("#resultadoBusqueda").html("")
        for(const producto of busqueda){
            $("#resultadoBusqueda").append(
                                    `<div class="col-12 col-sm-6 col-lg-3 mb-4">
                                        <div class="card novedades__card">
                                            <img src="${producto.urlImg}" class="card-img-top" alt="...">
                                            <div class="card-body ">
                                                <h4 class="card-title">${producto.nombre}</h4>
                                                <h2 class="card-text">$ ${producto.precio}</h2>
                                                <a href="#" id="${producto.id}" class="btn btn-primary" onclick="agregarProducto(this.id)">Comprar</a>
                                            </div>
                                        </div>
                                    </div>`)}
    }
}
//función para ejecutar la busqueda apretando la tecla enter
function validar(e) {
    tecla = (document) ? e.keyCode : e.which;
    if (tecla==13){
        e.preventDefault();
        buscar(); 
        
    }
}
