text.oninput = function(){
		var itext = document.getElementById("text").value;
		var preview = document.getElementById("preview");
		var pick = document.getElementById("clrPicker");
		var range = document.getElementById("range");
			var one = document.getElementById("one");
			var two = document.getElementById("two");
			var three = document.getElementById("three");
			var four = document.getElementById("four");
			var five = document.getElementById("five");
			var six = document.getElementById("six");
			var seven = document.getElementById("seven");
		preview.innerHTML = itext;
			one.style.display = "none";
			two.style.display = "none";
			three.style.display = "none";
			four.style.display = "none";
			five.style.display = "none";
			six.style.display = "none";
			seven.style.display = "none";
			pick.style.display = "none";
			range.style.display = "none";
	}
	 color.onclick = function (){
		var pick = document.getElementById("clrPicker");
		var range = document.getElementById("range");
		var one = document.getElementById("one");
		var two = document.getElementById("two");
		var three = document.getElementById("three");
		var four = document.getElementById("four");
		var five = document.getElementById("five");
		var six = document.getElementById("six");
		var seven = document.getElementById("seven");
		pick.style.display = "block";
		range.style.display = "none";
		one.style.display = "none";
			two.style.display = "none";
			three.style.display = "none";
			four.style.display = "none";
			five.style.display = "none";
			six.style.display = "none";
			seven.style.display = "none";
	}
	function pick(){
		var vpick = document.getElementById("clrPicker").value;
		var preview = document.getElementById("preview");	
		preview.style.color = vpick;
	}


var fontIndex = 0;
var fonts = ["Arial", "Lucida Console", "Verdana", "Wingdings", "Courier New"];

font.onclick = function() {
    var preview = document.getElementById("preview");
    preview.style.fontFamily = fonts[fontIndex];
    fontIndex++;
    if (fontIndex >= fonts.length) {
        fontIndex = 0; 
    }
}



	zoom.onclick = function(){
		var range = document.getElementById("range");
		var pick = document.getElementById("clrPicker");
		var one = document.getElementById("one");
		var two = document.getElementById("two");
		var three = document.getElementById("three");
		var four = document.getElementById("four");
		var five = document.getElementById("five");
		var six = document.getElementById("six");
		var seven = document.getElementById("seven");
		range.style.display = "block";
		pick.style.display = "none";
			one.style.display = "none";
			two.style.display = "none";
			three.style.display = "none";
			four.style.display = "none";
			five.style.display = "none";
			six.style.display = "none";
			seven.style.display = "none";
	}
	range.oninput = function(){
		var range = document.getElementById("range").value;
		var preview = document.getElementById("preview");
		var one = document.getElementById("one");
		var two = document.getElementById("two");
		var three = document.getElementById("three");
		var four = document.getElementById("four");
		var five = document.getElementById("five");
		preview.style.fontSize = range+"px";
			one.style.display = "none";
			two.style.display = "none";
			three.style.display = "none";
			four.style.display = "none";
			five.style.display = "none";
	}


	visible.onclick = function (){
		if (visible.innerHTML == "Hide") {
			var preview = document.getElementById("preview");
			var text = document.getElementById("text");
			var picker = document.getElementById("clrpicker");
			var one = document.getElementById("one");
			var two = document.getElementById("two");
			var three = document.getElementById("three");
			var four = document.getElementById("four");
			var five = document.getElementById("five");
			var six = document.getElementById("six");
			var seven = document.getElementById("seven");
			preview.style.opacity = "0";
			visible.innerHTML = "Show";
			text.style.opacity = "0";
			picker.style.opacity = "0";
			one.style.display = "none";
			two.style.display = "none";
			three.style.display = "none";
			four.style.display = "none";
			five.style.display = "none";
			six.style.display = "none";
			seven.style.display = "none";

		}
		else{
			var preview = document.getElementById("preview");
			var text = document.getElementById("text");
			var picker = document.getElementById("clrpicker");
			preview.style.opacity = "1";
			visible.innerHTML = "Hide";
			text.style.opacity = "1";
			picker.style.opacity = "1";
		}
	}


	reset.onclick = function(){
		var preview = document.getElementById("preview");
		var zoom = document.getElementById("range");
		var picker = document.getElementById("clrPicker");
		var text = document.getElementById("text");
		var visible = document.getElementById("visible");
		var one = document.getElementById("one");
		var two = document.getElementById("two");
		var three = document.getElementById("three");
		var four = document.getElementById("four");
		var five = document.getElementById("five");
		var six = document.getElementById("six");
		var seven = document.getElementById("seven");
			preview.style.fontFamily = "century gothic";
			preview.style.fontSize = "30px";
			preview.style.color = "rgb(138, 12, 1)";
			zoom.style.display = "none";
			picker.style.display = "none";
			preview.innerHTML = "";
			text.value = "";
			visible.innerHTML = "Hide";
			text.style.opacity = "1";
			one.style.display = "none";
			two.style.display = "none";
			three.style.display = "none";
			four.style.display = "none";
			five.style.display = "none";
			six.style.display = "none";
			seven.style.display = "none";
	}

	animate.onclick = function (){
	var picker = document.getElementById("clrPicker");
    var range = document.getElementById("range");
    picker.style.display = "none";
    range.style.display = "none";

		var one = document.getElementById("one");
		var two = document.getElementById("two");
		var three = document.getElementById("three");
		var four = document.getElementById("four");
		var five = document.getElementById("five");
		var six = document.getElementById("six");
		var seven = document.getElementById("seven");
		one.style.display = "block";
		two.style.display = "block";
		three.style.display = "block";
		four.style.display = "block";
		five.style.display = "block";
		six.style.display = "block";
		seven.style.display = "block";
	}

	one.onclick = function(){
		var preview = document.getElementById("preview");
		preview.setAttribute("class","animate__animated animate__heartBeat");
	}
	two.onclick = function(){
		var preview = document.getElementById("preview");
		preview.setAttribute("class","animate__animated animate__shakeX");
	}
	three.onclick = function(){
		var preview = document.getElementById("preview");
		preview.setAttribute("class","animate__animated animate__rubberBand");
	}
	four.onclick = function(){
		var preview = document.getElementById("preview");
		preview.setAttribute("class","animate__animated animate__flip");
	}
	five.onclick = function(){
		var preview = document.getElementById("preview");
		preview.setAttribute("class","animate__animated animate__wobble");
	}
	six.onclick = function(){
		var preview = document.getElementById("preview");
		preview.setAttribute("class","magictime foolishIn");
	}
	seven.onclick = function(){
		var preview = document.getElementById("preview");
		preview.setAttribute("class","animate__animated animate__zoomIn");
	}