//Funcion para mostrar info en foto
    
    let fot = document.getElementById("fotis");
    fot.addEventListener("click", mostrarDatos);
    fot.addEventListener("mouseout", mostrarFoto);


    function mostrarDatos() {
        fot.innerHTML = "Nombre: Diego Diaz <br/> Estado Civil: Soltero <br/> Edad: 30 años <br/> Disponibilidad: Fulltime <br/> Profesion: Programador";
    };

    function mostrarFoto() {
        fot.innerHTML = '<img src="img/miFoto.jpeg">';

    };

//Función para mostrar info de experiencia 1




    let info1btn = document.getElementById("verinfo1");
    info1btn.addEventListener("click", vermascont);
    info1btn.style.display= "block";

    let noinfo1 = document.getElementById("noverinfo1")
    noinfo1.addEventListener("click", vermenoscont)
    noinfo1.style.display= "none";

    let listainfo1 = document.getElementById("info1")
    listainfo1.style.display = "none";




    function vermascont (){

            listainfo1.style.display = "block";
            info1btn.style.display= "none";
            noinfo1.style.display= "block";
    };

    function vermenoscont (){
            listainfo1.style.display = "none";
            info1btn.style.display= "block";
            noinfo1.style.display= "none";
      
    };

 //Función para mostrar info de experiencia 2

    

    let info2btn = document.getElementById("verinfo2");
    info2btn.addEventListener("click", vermasinfo2);
    info2btn.style.display= "block";

    let noinfo2 = document.getElementById("noverinfo2")
    noinfo2.addEventListener("click", vermenosinfo2)
    noinfo2.style.display= "none";

    let listainfo2 = document.getElementById("info2")
    listainfo2.style.display = "none";




    function vermasinfo2 (){

        listainfo2.style.display = "block";
            info2btn.style.display= "none";
            noinfo2.style.display= "block";
    };

    function vermenosinfo2 (){
        listainfo2.style.display = "none";
            info2btn.style.display= "block";
            noinfo2.style.display= "none";
      
    };


    //Función para mostrar info de experiencia 3

    
    let info3btn = document.getElementById("verinfo3");
    info3btn.addEventListener("click", vermasinfo3);
    info3btn.style.display= "block";

    let noinfo3 = document.getElementById("noverinfo3")
    noinfo3.addEventListener("click", vermenosinfo3)
    noinfo3.style.display= "none";

    let listainfo3 = document.getElementById("info3")
    listainfo3.style.display = "none";




    function vermasinfo3 (){

        listainfo3.style.display = "block";
            info3btn.style.display= "none";
            noinfo3.style.display= "block";
    };

    function vermenosinfo3 (){
        listainfo3.style.display = "none";
            info3btn.style.display= "block";
            noinfo3.style.display= "none";
      
    };

let home = document.getElementById("inicio")
home.addEventListener("click", irinicio)

function irinicio() {
    window.scrollTo(0, 0);
};