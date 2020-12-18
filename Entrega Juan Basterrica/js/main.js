'use strict';

let createHeader = (categorias) => { // nombre, pcia, ciudad, ambientes, valor
    let theadEl = document.createElement('thead');
    let trEl = document.createElement('tr');

    categorias.forEach(element => {
        let thEl = document.createElement('th');
        thEl.innerHTML = element;
        trEl.appendChild(thEl);
    });
    
    theadEl.appendChild(trEl);
    tableEl.appendChild(theadEl);

};

let createRow = (elemento) => {
    let trEl = document.createElement('tr');
    for(let clave in elemento) {
        let tdEl = document.createElement('td');
        tdEl.innerHTML = elemento[clave];
        trEl.appendChild(tdEl);
    }
    let btn = document.createElement('td');
    btn.innerHTML = '<button type=text id="btnEdit modal">Editar</button><button type="text" id="btnDelette">Eliminar</button>';
    trEl.appendChild(btn);
    return trEl;
};

let createBody = (elementos) => {
    let tbodyEl = document.createElement('tbody');

    elementos.forEach(elem => {
        tbodyEl.appendChild(createRow(elem));
    });
    tableEl.appendChild(tbodyEl);
};

window.addEventListener('load', () => {
    createHeader(opcion); 
    createBody(dataParseada.propiedades);
});














  



