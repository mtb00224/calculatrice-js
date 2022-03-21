let inputId = document.getElementById('ecran');

function maFonction(id) {
	id.addEventListener('click',function() {
	var first = id.firstChild;

	if(first.data != '' && first.data == '='){
		inputId.value = eval(inputId.value);
		return '';
	}

	if (inputId.value == 0) {
		inputId.value = '';
	}
	
	inputId.value += first.data;

	if (first.data == 'C') {
		inputId.value = 0;
	}

	if (first.data == 'DEL') {
		var tab = inputId.value.split('');
		var tableau = tab.splice(-4,4);
		inputId.value = tab.join('');
		if (inputId.value == '') {
			inputId.value = 0;
		}
	}
});
}
maFonction(zero);
maFonction(un);
maFonction(deux);
maFonction(trois);
maFonction(quatre);
maFonction(cinq);
maFonction(six);
maFonction(sept);
maFonction(huit);
maFonction(neuf);
maFonction(plus);
maFonction(moins);
maFonction(etoile);
maFonction(slash);
maFonction(egal);
maFonction(point);
maFonction(clear);
maFonction(del);