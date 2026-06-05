/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// ============================================
// 1. AÑO DEL COPYRIGHT AUTOMÁTICO
// ============================================
document.addEventListener("DOMContentLoaded", function () {
    const anioActual = new Date().getFullYear();
    const copyright = document.querySelector("footer .small");
    if (copyright) {
        copyright.textContent = "Copyright © Carlos Morales " + anioActual;
    }
});


// ============================================
// 2. NAVBAR QUE CAMBIA AL HACER SCROLL
// ============================================
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("shadow");
        navbar.classList.add("py-2");
        navbar.classList.remove("py-3");
    } else {
        navbar.classList.remove("shadow");
        navbar.classList.remove("py-2");
        navbar.classList.add("py-3");
    }
});


// ============================================
// 3. ANIMACIÓN DE APARICIÓN AL HACER SCROLL
// ============================================
document.addEventListener("DOMContentLoaded", function () {
    // Selecciona las tarjetas y secciones que queremos animar
    const elementos = document.querySelectorAll(".card, section, header");

    const observador = new IntersectionObserver(function (entradas) {
        entradas.forEach(function (entrada) {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    elementos.forEach(function (el) {
        el.classList.add("animado");
        observador.observe(el);
    });
});

// ============================================
// 4. BOTÓN VOLVER ARRIBA
// ============================================
window.addEventListener("scroll", function () {
    const btnArriba = document.getElementById("btn-arriba");
    if (window.scrollY > 300) {
        btnArriba.classList.add("visible");
    } else {
        btnArriba.classList.remove("visible");
    }
});