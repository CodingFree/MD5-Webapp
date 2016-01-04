var viewTranslator = document.querySelector("#normal-view");
var result = document.getElementById("result");
var translateButton = document.getElementById("translateButton");

var translateForm = document.getElementById("translationForm");
translateForm.addEventListener("submit", function(event){
        event.preventDefault ? event.preventDefault() : (event.returnValue = false);
        return false;
}, true);

translateButton.addEventListener("click", function (event) {
    var normal = document.normalString.myString.value;
    result.innerHTML = md5(normal);

    //Se evita que se ejecute la acción por defecto.
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
});