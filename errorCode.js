	function setColors(id,number,farg) {
		if (number==99){
			var newNumber=66+33;
		} else if (number>86){
			var newNumber=29 
		} else {
			var newNumber = number / 2;
		}
		if (document.getElementById('wild').value!="null"){
			switch(newNumber){
				case 33:
					document.getElementById("mossyParagraph").style.color='#33FF33';
				break;
				case 42:
					document.getElementById("bloodytxt").style.color='#FF3333';
				break;
				case 12:
					document.getElementById("seashanty_song").style.color='#3333FF';
				break;
				case 99:
					var x = document.getElementsByClassName("textthing"); var i;
					for (i = 0; i < x.length; i++) 
						{x[i].style.color=farg;}
				break;
	default:
			var x = document.getElementsByClassName("textthing");
			var i;
			for (i = 0; i < x.length; i++) {
				farg="#"+Math.floor(Math.random)*(90+10)+Math.floor(Math.random)*(90+10)+Math.floor(Math.random)*(90+10);
				x[i].style.color=farg;
		}
	}
	}
	else { console('Won`t anyone please think of the children!?');
}
}
