var textInput = document.querySelector("#text-input");
var buttonTranslate = document.querySelector("#btn-translate");
var outputBox = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/minion.json";

function errorHandler(error) {
  console.log("Error occured!", error);
  alert("Something went wrong, please try again after sometime.");
}
function translate() {
  var inputValue = textInput.value;
  var URLWithText = serverURL + "?" + "text=" + inputValue;
  fetch(URLWithText)
    .then((response) => response.json())
    .then((json) => (outputBox.innerHTML = json.contents.translated))
    .catch(errorHandler);
}

buttonTranslate.addEventListener("click", translate);
