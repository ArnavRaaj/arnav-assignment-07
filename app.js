// DOTHRAKI TRANSLATION JS
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/dothraki.json" 

//  SERVER URL FOR TRANSLATION
function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

function clickEventHandler() {
    var inputVal = txtInput.value; // taking input

    // calling server for processing
    fetch(getTranslationURL(inputVal))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; // output
        })
        .catch(errorHandler)

};

btnTranslate.addEventListener("click", clickEventHandler)