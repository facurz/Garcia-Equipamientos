//eventos de todos los botones de navegacion

$("#btnMenuIndex").click((e) => {
	e.preventDefault();
	indexPage.style.display = "block";
	loginPage.style.display = "none";
	busquedaPage.style.display = "none";
	productosPage.style.display = "none";
	preguntasFrecuentesPage.style.display = "none";
	comoComprarPage.style.display = "none";
	contactoPage.style.display = "none";
})

$("#btnMenuIndexMobile").click((e) => {
	e.preventDefault();
	indexPage.style.display = "block";
	loginPage.style.display = "none";
	busquedaPage.style.display = "none";
	productosPage.style.display = "none";
	preguntasFrecuentesPage.style.display = "none";
	comoComprarPage.style.display = "none";
	contactoPage.style.display = "none";
})

$("#btnMenuProductos").click((e) => {
	e.preventDefault();
	indexPage.style.display = "none";
	loginPage.style.display = "none";
	busquedaPage.style.display = "none";
	productosPage.style.display = "block";
	preguntasFrecuentesPage.style.display = "none";
	comoComprarPage.style.display = "none";
	contactoPage.style.display = "none";
})

$("#btnMenuProductosMobile").click((e) => {
	e.preventDefault();
	indexPage.style.display = "none";
	loginPage.style.display = "none";
	busquedaPage.style.display = "none";
	productosPage.style.display = "block";
	preguntasFrecuentesPage.style.display = "none";
	comoComprarPage.style.display = "none";
	contactoPage.style.display = "none";
})

$("#btnMenuPreguntas").click((e) => {
	e.preventDefault();
	indexPage.style.display = "none";
	loginPage.style.display = "none";
	busquedaPage.style.display = "none";
	productosPage.style.display = "none";
	preguntasFrecuentesPage.style.display = "block";
	comoComprarPage.style.display = "none";
	contactoPage.style.display = "none";
})

$("#btnMenuPreguntasMobile").click((e) => {
	e.preventDefault();
	indexPage.style.display = "none";
	loginPage.style.display = "none";
	busquedaPage.style.display = "none";
	productosPage.style.display = "none";
	preguntasFrecuentesPage.style.display = "block";
	comoComprarPage.style.display = "none";
	contactoPage.style.display = "none";
})


$("#btnMenuComoComprar").click((e) => {
	e.preventDefault();
	indexPage.style.display = "none";
	loginPage.style.display = "none";
	busquedaPage.style.display = "none";
	productosPage.style.display = "none";
	preguntasFrecuentesPage.style.display = "none";
	comoComprarPage.style.display = "block";
	contactoPage.style.display = "none";
})

$("#btnMenuComoComprarMobile").click((e) => {
	e.preventDefault();
	indexPage.style.display = "none";
	loginPage.style.display = "none";
	busquedaPage.style.display = "none";
	productosPage.style.display = "none";
	preguntasFrecuentesPage.style.display = "none";
	comoComprarPage.style.display = "block";
	contactoPage.style.display = "none";
})

$("#btnMenuContacto").click((e) => {
	e.preventDefault();
	indexPage.style.display = "none";
	loginPage.style.display = "none";
	busquedaPage.style.display = "none";
	productosPage.style.display = "none";
	preguntasFrecuentesPage.style.display = "none";
	comoComprarPage.style.display = "none";
	contactoPage.style.display = "block";
})

$("#btnMenuContactoMobile").click((e) => {
	e.preventDefault();
	indexPage.style.display = "none";
	loginPage.style.display = "none";
	busquedaPage.style.display = "none";
	productosPage.style.display = "none";
	preguntasFrecuentesPage.style.display = "none";
	comoComprarPage.style.display = "none";
	contactoPage.style.display = "block";
})

$("#btnCocinas").click((e) => {
	e.preventDefault();
	$("#cocinas").show();
	$("#campanas").hide();
	$("#anafes").hide();
	$("#hornos").hide();
	$("#parrillas").hide();
	$("#pastas").hide();
	$("#balanzas").hide();
	$("#kamados").hide();
	$("#otros").hide();
	$("#btnCategorias").empty();
	$("#btnCategorias").append(`CATEGORIAS » cocinas`);
})

$("#btnCampanas1").click((e) => {
	e.preventDefault();
	$("#cocinas").hide();
	$("#campanas").show();
	$("#anafes").hide();
	$("#hornos").hide();
	$("#parrillas").hide();
	$("#pastas").hide();
	$("#balanzas").hide();
	$("#kamados").hide();
	$("#otros").hide();
	$("#btnCategorias").empty();
	$("#btnCategorias").append(`CATEGORIAS » campanas`)
})

$("#btnCampanas2").click((e) => {
	e.preventDefault();
	$("#cocinas").hide();
	$("#campanas").show();
	$("#anafes").hide();
	$("#hornos").hide();
	$("#parrillas").hide();
	$("#pastas").hide();
	$("#balanzas").hide();
	$("#kamados").hide();
	$("#otros").hide();
	$("#btnCategorias").empty();
	$("#btnCategorias").append(`CATEGORIAS » campanas`)
})

$("#btnAnafes").click((e) => {
	e.preventDefault();
	$("#cocinas").hide();
	$("#campanas").hide();
	$("#anafes").show();
	$("#hornos").hide();
	$("#parrillas").hide();
	$("#pastas").hide();
	$("#balanzas").hide();
	$("#kamados").hide();
	$("#otros").hide();
	$("#btnCategorias").empty();
	$("#btnCategorias").append(`CATEGORIAS » anafes`)
})

$("#btnHornos1").click((e) => {
	e.preventDefault();
	$("#cocinas").hide();
	$("#campanas").hide();
	$("#anafes").hide();
	$("#hornos").show();
	$("#parrillas").hide();
	$("#pastas").hide();
	$("#balanzas").hide();
	$("#kamados").hide();
	$("#otros").hide();
	$("#btnCategorias").empty();
	$("#btnCategorias").append(`CATEGORIAS » hornos`)
})

$("#btnHornos2").click((e) => {
	e.preventDefault();
	$("#cocinas").hide();
	$("#campanas").hide();
	$("#anafes").hide();
	$("#hornos").show();
	$("#parrillas").hide();
	$("#pastas").hide();
	$("#balanzas").hide();
	$("#kamados").hide();
	$("#otros").hide();
	$("#btnCategorias").empty();
	$("#btnCategorias").append(`CATEGORIAS » hornos`)
})

$("#btnHornos3").click((e) => {
	e.preventDefault();
	$("#cocinas").hide();
	$("#campanas").hide();
	$("#anafes").hide();
	$("#hornos").show();
	$("#parrillas").hide();
	$("#pastas").hide();
	$("#balanzas").hide();
	$("#kamados").hide();
	$("#otros").hide();
	$("#btnCategorias").empty();
	$("#btnCategorias").append(`CATEGORIAS » hornos`)
})

$("#btnParrillas").click((e) => {
	e.preventDefault();
	$("#cocinas").hide();
	$("#campanas").hide();
	$("#anafes").hide();
	$("#hornos").hide();
	$("#parrillas").show();
	$("#pastas").hide();
	$("#balanzas").hide();
	$("#kamados").hide();
	$("#otros").hide();
	$("#btnCategorias").empty();
	$("#btnCategorias").append(`CATEGORIAS » parrillas`)
})

$("#btnPastas").click((e) => {
	e.preventDefault();
	$("#cocinas").hide();
	$("#campanas").hide();
	$("#anafes").hide();
	$("#hornos").hide();
	$("#parrillas").hide();
	$("#pastas").show();
	$("#balanzas").hide();
	$("#kamados").hide();
	$("#otros").hide();
	$("#btnCategorias").empty();
	$("#btnCategorias").append(`CATEGORIAS » pastas`)
})

$("#btnBalanzas").click((e) => {
	e.preventDefault();
	$("#cocinas").hide();
	$("#campanas").hide();
	$("#anafes").hide();
	$("#hornos").hide();
	$("#parrillas").hide();
	$("#pastas").hide();
	$("#balanzas").show();
	$("#kamados").hide();
	$("#otros").hide();
	$("#btnCategorias").empty();
	$("#btnCategorias").append(`CATEGORIAS » balanzas`)
})

$("#btnKamados").click((e) => {
	e.preventDefault();
	$("#cocinas").hide();
	$("#campanas").hide();
	$("#anafes").hide();
	$("#hornos").hide();
	$("#parrillas").hide();
	$("#pastas").hide();
	$("#balanzas").hide();
	$("#kamados").show();
	$("#otros").hide();
	$("#btnCategorias").empty();
	$("#btnCategorias").append(`CATEGORIAS » kamados`)
})

$("#btnOtros").click((e) => {
	e.preventDefault();
	$("#cocinas").hide();
	$("#campanas").hide();
	$("#anafes").hide();
	$("#hornos").hide();
	$("#parrillas").hide();
	$("#pastas").hide();
	$("#balanzas").hide();
	$("#kamados").hide();
	$("#otros").show();
	$("#btnCategorias").empty();
	$("#btnCategorias").append(`CATEGORIAS » otros`)
})

