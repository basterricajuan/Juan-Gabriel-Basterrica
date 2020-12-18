let data = ` { 
    "propiedades": [
        {"Tipo": "casa", "Provincia": "Buenos Aires", "Ciudad": "Tandil", "Ambientes": 3, "Valor": "30.000,00"},
        {"Tipo": "departamento", "Provincia": "Buenos Aires", "Ciudad": "Tandil", "Ambientes": 2, "Valor": "18.000,00"},
        {"Tipo": "local", "Provincia": "Buenos Aires", "Ciudad": "Azul", "Ambientes": 1, "Valor": "55.000,00"},
        {"Tipo": "departamento", "provincia": "Buenos Aires", "Ciudad": "Tandil", "Ambientes": 1, "Valor": "15.000,00"},
        {"Tipo": "casa", "Provincia": "Cordoba", "Ciudad": "Carlos Paz", "Ambientes": 4, "Valor": "41.500,00"},
        {"Tipo": "casa", "Provincia": "La pampa", "Ciudad": "Santa Rosa", "Ambientes": 4, "Valor": "38.000,00"},
        {"Tipo": "local", "Provincia": "Rio Negro", "Ciudad": "Bariloche", "Ambientes": 5, "Valor": "90.000,00"}
    ] 
    } `
    
    console.log(data);
    
const dataParseada = JSON.parse(data);
    
const tipoProp = Object.keys(dataParseada.propiedades[0]);
    
const estado = 'Acción';
    
const opcion = tipoProp.concat(estado);



