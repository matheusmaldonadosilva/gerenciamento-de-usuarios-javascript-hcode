var nome = document.querySelector("#exampleInputName");
var gender = document.querySelectorAll("#form-user-create [name=gender]:checked"); // seleciona apenas o que esta checado
var birth = document.querySelector("#exampleInputBirth");
var country = document.querySelector("#exampleInputCountry");
var email = document.querySelector("#exampleInputEmail");
var password = document.querySelector("#exampleInputPassword");
var photo = document.querySelector("#exampleInputFile");
var admin = document.querySelector("#exampleInputAdmin");

// nome.value = "Matheus";
// nome.style.color = "#blue";


var fields = document.querySelectorAll("#form-user-create [name]");

fields.forEach(function(field, index) { //primeira variavel que receber será o campo[pega cada um dos campos], e o indice qual o numero do campo na lista

    if (field.name == "gender") {

        if (field.checked) { //field.checked === true

            console.log("SIM", gender);

        }

    } else {
        console.log("NÃO");
    }

    // console.log(field);
    // console.log(index);
    // console.log(field.name); // acessar o atributo name
    // console.log(field.name, field.id, field.checked);

});