var textValue = document.getElementById("mainText").innerHTML;
var inputValue = document.getElementById('typeText');
var mainText = textValue;
var mainArray = [];
var inputTextValue;

mainArray = mainText.split(' ');

document.getElementById("typeText").addEventListener("keyup", myFunction);

function myFunction(e) {
	for (var j = 0; j < mainArray.length; j++) {
		inputTextValue = e.target.value;
		inputTextValue.toString();
		var isStartsWith = mainArray[j].startsWith(inputTextValue);

		if (mainArray[j] == inputTextValue) {
			console.log('Press SPACE');
			highlight(inputTextValue);
			continue;
		}

		if (e.keyCode == 32) {
			inputValue.value = '';
		}

	}
}

function highlight(value) {
	var inputText = document.getElementById("mainText"),
  	  innerHTML = inputText.innerHTML,	
      index 	  = innerHTML.indexOf(value);

  if ( index >= 0 ) { 
    innerHTML = innerHTML.substring(0,index) + "<div class='highlight'>" + 
    innerHTML.substring(index,index + value.length) + "</div>" +
    innerHTML.substring(index + value.length);
    inputText.innerHTML = innerHTML; 
  } 
}
