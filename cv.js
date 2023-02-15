
    let fot = document.getElementById("fotis");
    fot.addEventListener("click", mostrarDatos);
    fot.addEventListener("mouseout", mostrarFoto);


    function mostrarDatos() {
        fot.innerHTML = "Nombre: Diego Diaz <br/> Estado Civil: Soltero <br/> Edad: 30 años <br/> Disponibilidad: Fulltime <br/> Profesion: Programador";
    };

    function mostrarFoto() {
        fot.innerHTML = '<img src="img/miFoto.jpeg">';

    };