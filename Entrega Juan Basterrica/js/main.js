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
    };
    let tdBtn = document.createElement('td');
    const btnEditar = document.createElement('button');
    btnEditar.setAttribute('id', 'btnEdit');
    btnEditar.innerHTML= 'Editar';
    tdBtn.appendChild(btnEditar);
    const btnEliminar = document.createElement('button');
    btnEliminar.setAttribute('id', 'btnDelette');
    btnEliminar.innerHTML = 'Eliminar';
    btnEliminar.addEventListener('click', (event) => {
        event.target.parentNode.parentNode.remove();
    });
    tdBtn.appendChild(btnEliminar);
    trEl.appendChild(tdBtn);
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

let propiedad = {
"Tipo": "", 
"Provincia": "",
"Ciudad": "", 
"Ambientes": "", 
"Valor": ""
};



/*btnAdd.addEventListener('click', () => {
        let propiedad = document.createElement('input');
        propiedad.value = '';
        createBody.push(propiedad.value);
        for (let clave in elemento);
    let nuevaPropiedad = document.createElement('p');
    nuevaPropiedad.innerHTML(propiedad);

      });*/




/*btnEditar.addEventListener('click',()=>{
    let trEl = document.createElement('tr');
    let tdEl = document.createElement('td');
     trEl.appendChild(tdEl)
    inputEl.push(btneditar.value);
    btnEditar.value = '';
let btnEditarFila = createElement('input');
    btnEditarFila.appendChild(tdBtn);
    tdBtn.appendChild(btnEditar);   
};*/
    


/*btnEliminar.addEventListener('click', function(ctl) {
    let r = confirm("¿desea borrar fila?");
    if(r == true) {
        ctl.target.parentElement.parentElement.remove();
    }
};/*





/*btnAgregarFila.addEventListener('click', () =>  
let trEl = document.createElement('tr');
let tdEl = document.createElement('td');
trEl.appendChild(tdEl);
const inputEl = document.createElement('input');
inputEl.setAttribute('id, tdInput');
inputEl.innerHTML = 'inputs';
tdEl.appendChild.inputEl;
tdEl.innerHTML
)};*/




/*RESTA:
1- Llamar a los botones (addEvenlistener para agregar, editar y Eliminar)
2- Que se despliegue un modal para los casos editar y eliminar
3- Que el modal de editar abra inputs por cada celda de la fila. Que luego de guardar los cambios se dispare la barra de cargando datos
(Utilizar Settimeout creo)
4- Que se agregue un Dropdown y filtre aunque sea por un de las 5 opciones (Tipo, Pcia, Ciudad, Ambientes, Valor).
*/

/*sin probar*/
/*btnAgregar.addEventListener('click', () => {
    dataParseada.propiedades.push(dataParseada.propiedades.value);
    dataParseada.value = '';
    actualizarProp();

});

actualizarProp = () => {
    let trEl = document.createElement('tr');
        for (const key in dataParseada.propiedades) {
            let tdEl = document.createElement('td');
            tdEl.innerHTML = dataParseada.propiedades[''];
            const inputEl = document.createElement('input');
            inputEl.setAttribute('id, inputTd');
            inputEl.innerHTML = 'inputs';
            trEl.appendChild.inputEl;
            };
            return trEl;
        };*/














  



