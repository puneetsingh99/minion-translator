var input = document.querySelector("#txt-input");
var inputText = input.value;

var output = document.querySelector("#txt-output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";
var url = serverUrl + "?"+ "text=" + inputText;

function error(err){
    console.log("error: ", err);
    console.log("something went wrong, please refresh and try after sometime");
}

function translator(){
    fetch(url)
    .then(response => response.json())
    .then(json => output.value = json.contents.translated)
    .catch(error)
}

var btnTranslate = document.querySelector("#btn-translate");
btnTranslate.addEventListener("click", translator);