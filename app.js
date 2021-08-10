const personas = [
    new Persona('juan', 'perez'),
    new Persona('maria', 'diaz')
]

function mostrarPersonas(){
    let texto = '';
    for (let persona of personas){
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona() {
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    const persona = new Persona(nombre.value, apellido.value);
    console.log(persona);
    personas.push(persona);
    mostrarPersonas();
}