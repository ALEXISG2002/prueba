document.addEventListener('DOMContentLoaded', () => { 
    const btns_n01 = document.querySelectorAll('.btn-n01');
    const btns_n02 = document.querySelectorAll('.btn-n02');
    
    const menu_n02 = document.querySelectorAll('.menu-n02');
    const menu_n03 = document.querySelectorAll('.menu-n03');

    function mostrarNiveles(boton_activado) {
        // Primero, ocultar todos los menús de nivel 2 y 3
        menu_n03.forEach(elemento_03 => {
            elemento_03.style.display = "none";
        });
        menu_n02.forEach(elemento_02 => {
            elemento_02.style.display = "none";
        });

        // Mostrar el menú correspondiente al botón activado
        switch (boton_activado) {
            case "btn_home":
                toggleMenu('menu_home');
                break;

            case "btn_about":
                toggleMenu('menu_about');
                break;

            case "btn_services":
                toggleMenu('menu_services');
                break;

            case "btn_contac":
                toggleMenu('menu_contac');
                break;

            default:
                break;
        }
    }

    // Función para alternar la visibilidad del menú
    function toggleMenu(menuId) {
        let menu = document.getElementById(menuId);
        if (menu.style.display === "" || menu.style.display === "none") {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    }

    btns_n01.forEach(boton => {
        boton.addEventListener('click', (objeto) => {
            mostrarNiveles(objeto.target.id);
        });
    });

    btns_n02.forEach(boton => {
        boton.addEventListener('click', (objeto) => {
            mostrarNiveles(objeto.target.id);
        });
    });

    const nav = document.querySelector("#menu_cont");
    const abrir = document.querySelector("#disparador");
    const cerrar = document.querySelector("#close");
    const notscroll = document.querySelector('body');

    abrir.addEventListener("click", () => {
        nav.classList.add("visible");
        if (nav.classList.contains("visible")) {
            notscroll.style.overflow = "hidden";
        }
    });

    cerrar.addEventListener("click", () => {
        nav.classList.remove("visible");
        nav.classList.add("remove");
        if (nav.classList.contains("remove")) {
            notscroll.style.overflow = "visible";
        }
    });

});
