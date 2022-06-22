const $DNI = document.getElementById("dni");
const $NAME = document.getElementById("nombre");
const $SURNAME = document.getElementById("apellido");
const $EMAIL = document.getElementById("email");
const $TIME = document.getElementById("time");
const $DATE = document.getElementById("date");

function dniValido(dni){
    const res = /\d{2}\.\d{3}\.\d{3}-[A-Z]$/;
    return res.test(dni);
}

function nameValido(nombre){
    const res = /^(?=.{3,15}$)[A-ZÁÉÍÓÚ][a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóú]+)?$/;
    return res.test(nombre);
}
  function surnameValido(surname){
      const res = /^(?=.{3,15}$)[A-ZÁÉÍÓÚ][a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóú]+)?$/;
      return res.test(apellido);
}
  function emailValido(email)
  {
      const res = /\S+@\S+\.\S+/;
      return res.test(email);
}

function timeValido(time){
    const pattern = preg_match("/^(?:2[0-3]|[01][0-9]):[0-5][0-9]$/", $foo)
    return pattern.test(time)
}

function dateValido(date){
    const pattern = /^\d{2}\/\d{2}\/\d{4}$/
    return pattern.test(date)
}

function creaRegistro(dni, name, surname, email, time, date){
    return {
        dni,
        name,
        surname,
        email,
        time,
        date
    }
}

function validacion(){
    let nuevoRegistro;

    const dni = $DNI.value;
    const name = $NAME.value;
    const surname = $SURNAME.value;
    const email = $EMAIL.value;
    const time = $TIME.value;
    const date = $DATE.value;

    const validaciones = [
        [dniValido(dni), "El DNI no es válido"],
        [nameValido(name), "El nombre no es válido"],
        [surnameValido(surname), "El apellido no es válido"],
        [emailValido(email), "El email no es válido"],
        [timeValida(time), "La hora no es válida"],
        [dateValida(date), "La fecha no es válida"]
    ];

    if (validaciones.every(([validacion]) => validacion)) {
        nuevoRegistro = creaRegistro(dni, name, surname, email, time, date);
    }
    else {
        const validacionFallida = validaciones.find(([validacion]) => !validacion);
        console.log(validacionFallida[1]);
    }
}
