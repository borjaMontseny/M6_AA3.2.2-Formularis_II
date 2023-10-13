// borjaMontseny DAW2 M06 2023
function validarFormulari() {
    var customerName = document.getElementById("customerName");
    var telephone = document.getElementById("telephone");
    var emailAddress = document.getElementById("emailAddress");
    var hour = document.getElementById("deliveryTime");

    if (
        validarNomesText(customerName) &&
        validarTelefon(telephone) &&
        validarEmail(emailAddress) &&
        validarToppings() &&
        validarHora(hour)
    ) {
        alert("Tot està OK! Comanda en marxa");
        // S'envia el formulari
        return true;
    }
    
    // No s'envia el formulari
    return false;
}

function validarNomesText(text) {
    var alfabet = /^[A-Za-z]+\s[A-Za-z]+$/;
    if (text.value.match(alfabet)) {
        return true;
    }
    else {
        alert("Customer Name: Introdueix nom vàlid");
        return false;
    }
}

function validarTelefon(telefon) {
    var alfabet = /^\d{9}$/;
    if (telefon.value.match(alfabet)) {
        return true;
    }
    else {
        alert('Telephone: Introdueix un telèfon vàlid');
        return false;
    }
}

function validarEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)) {
        return true;
    }
    alert("Email Address: Introdueix un email vàlid");
    return false;
}

function validarToppings() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var contador = 0;

    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            contador++;
        }
    });

    if (contador < 1) {
        alert("Pizza Toppings: Has d'escollir al menys un ingredient");
        return false;
    } else if (contador > 3) {
        alert("Pizza Toppings: El màxim són 3 ingredients");
        return false;
    } else {
        return true;
    }

}

function validarHora(hora) {
    if (/^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$/.test(hora.value)) {
        return true;
    }
    alert("Pizza Delivery Time: Introdueix una hora correcta");
    return false;
}