var nom = document.getElementById("nom");
var tnom = document.getElementById("tnom");
var snom = document.getElementById("snom");
var tnum = document.getElementById("tnum");
var num = document.getElementById("num");
var snum = document.getElementById("snum");
var mm = document.getElementById("mm");
var yy = document.getElementById("yy");
var sexp = document.getElementById("sexp");
var texp = document.getElementById("texp");
var cvc = document.getElementById("cvc");
var tcvc = document.getElementById("tcvc");
var scvc = document.getElementById("scvc");
var conf = document.getElementsByClassName("conf");

///////////nom
nom.addEventListener("blur", function () {
	if (nom.value == "") {
		snom.textContent = "Can't be blank";
		nom.style.border = '1px solid red';
	}
});
nom.addEventListener("input", function () {
	if (nom.value == "") {
		snom.textContent = "Can't be blank";
		nom.style.border = '1px solid red';
		tnom.textContent = 'JANE APPELESEED';
	}else{
		if (/^[a-z ]+$/i.test(nom.value)) {
			snom.textContent = "";
			nom.style.border = '1px solid #6b28a887';
			nom.value = nom.value.toUpperCase();
			tnom.textContent = nom.value;
		}else{
			snom.textContent = "wrong format";
			nom.style.border = '1px solid red';
			nom.value = nom.value.toUpperCase();
			tnom.textContent = nom.value;
		}
	}	
})
///////////num
num.addEventListener("blur", function () {
	if (num.value == "") {
		snum.textContent = "Can't be blank";
		num.style.border = '1px solid red';
	}else {
		if (num.value.length<19 && /^[0-9 ]+$/.test(num.value)) {
			snum.textContent = "too short";
			num.style.border = '1px solid red'
		}
	}
});
num.addEventListener("input", function () {
	if (num.value == "") {
		snum.textContent = "Can't be blank";
		num.style.border = '1px solid red';
		tnum.textContent = "0000 0000 0000 0000";
	}else{
		
		x=num.value;
		while (x.length<19) {
			x = x + "0"; 
			x = x.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
		}
		tnum.textContent = x ;
		if (/^[0-9 ]+$/.test(num.value)) {
			snum.textContent = "";
			num.style.border = '1px solid #6b28a887';
		}else{
			snum.textContent = "wrong format";
			num.style.border = '1px solid red';
		}
	}
});
num.addEventListener("keypress", function () {
	num.value = num.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
})
////////////exp
mm.addEventListener("blur", function () {
	if (mm.value == "" && yy.value == "") {
		sexp.textContent = "Can't be blank";
		mm.style.border = '1px solid red';
		yy.style.border = '1px solid red';
	}
	if (/^[0-9]+$/.test(mm.value) && Number(mm.value)<=31  && Number(mm.value)>0){
		if ( mm.value.length==1 && Number(mm.value)>0) {
			mm.value ='0'+ mm.value;
		}
		if (yy.value == "" || !(/^[0-9]+$/.test(yy.value) && Number(yy.value)<=12 && Number(yy.value)>0)) {
			texp.textContent = mm.value+"/00";
		} else {
			texp.textContent = mm.value+"/"+yy.value;
		}
	}
});
mm.addEventListener("input", function () {
	if (mm.value == "") {
		if (yy.value == "" || !(/^[0-9]+$/.test(yy.value) && Number(yy.value)<=12 && Number(yy.value)>0)) {
			texp.textContent = "00/00";
		}else {
			texp.textContent = "00/"+yy.value;
		}
		sexp.textContent = "Can't be blank";
		mm.style.border = '1px solid red';
	}else{
		if (/^[0-9]+$/.test(mm.value) && Number(mm.value)<=31 && Number(mm.value)>0){
			mm.style.border = '1px solid #6b28a887';
			if (yy.value == "") {
				sexp.textContent = "Can't be blank";
				yy.style.border = '1px solid red';
			}else{
				if (/^[0-9]+$/.test(yy.value) && Number(yy.value)<=12 && Number(yy.value)>0) {
					sexp.textContent = "";
				}else{
					sexp.textContent = "wrong format";
				}
			}
			if (yy.value == "" || !(/^[0-9]+$/.test(yy.value) && Number(yy.value)<=12 && Number(yy.value)>0)) {
				texp.textContent = mm.value+"/00";
			}else {
				texp.textContent = mm.value+"/"+yy.value;
			}
		}else{
			mm.style.border = '1px solid red';
			if (yy.value == "") {
				sexp.textContent = "Can't be blank";
				yy.style.border = '1px solid red';
			}else{
				sexp.textContent = "wrong format";
			}
		}
		
	}
});
yy.addEventListener("blur", function () {
	if (mm.value == "" && yy.value == "") {
		sexp.textContent = "Can't be blank";
		mm.style.border = '1px solid red';
		yy.style.border = '1px solid red';
	}
	if (/^[0-9]+$/.test(yy.value) && Number(yy.value)<=12  && Number(yy.value)>0){
		if ( yy.value.length==1 && Number(yy.value)>0) {
			yy.value ='0'+ yy.value;
		}
		if (mm.value == "" || !(/^[0-9]+$/.test(mm.value) && Number(mm.value)<=31  && Number(mm.value)>0)) {
			texp.textContent = "00/" + yy.value;
		}else {
			texp.textContent = mm.value+"/"+yy.value;
		}
	}
});
yy.addEventListener("input", function () {
	if (yy.value == "") {
		if (mm.value == "" || !(/^[0-9]+$/.test(mm.value) && Number(mm.value)<=31  && Number(mm.value)>0)) {
			texp.textContent = "00/00";
		}else {
			texp.textContent = mm.value+"/00";
		}
		sexp.textContent = "Can't be blank";
		yy.style.border = '1px solid red';
	}else{
		if (/^[0-9]+$/.test(yy.value) && Number(yy.value)<=12 && Number(yy.value)>0) {
			yy.style.border = '1px solid #6b28a887';
			if (mm.value == "") {
				mm.style.border = '1px solid red';
				sexp.textContent = "Can't be blank";
			}else{
				if (/^[0-9]+$/.test(mm.value) && Number(mm.value)<=31 && Number(mm.value)>0) {
					sexp.textContent = "";
				}else{
					sexp.textContent = "wrong format";
				}
			}
			if (mm.value == "" || !(/^[0-9]+$/.test(mm.value) && Number(mm.value)<=31  && Number(mm.value)>0)) {
				texp.textContent = "00/"+yy.value;
			}else {
				texp.textContent = mm.value+"/"+yy.value;
			}
		}else{
			yy.style.border = '1px solid red';
			if (mm.value == "") {
				mm.style.border = '1px solid red';
				sexp.textContent = "Can't be blank";
			}else{
				sexp.textContent = "wrong format";
			}
		}
	}
});
//////////////////cvc
cvc.addEventListener("blur", function () {
	if (cvc.value == "") {
		scvc.textContent = "Can't be blank";
		cvc.style.border = '1px solid red';
	}else {
		if (cvc.value.length<3 && /^[0-9]+$/.test(cvc.value)) {
			scvc.textContent = "too short";
			cvc.style.border = '1px solid red'
		}
	}
});
cvc.addEventListener("input", function () {
	if (cvc.value == "") {
		scvc.textContent = "Can't be blank";
		cvc.style.border = '1px solid red';
		tcvc.textContent = "000";
	}else{
		if (/^[0-9]+$/.test(cvc.value)) {
			scvc.textContent = "";
			cvc.style.border = '1px solid #6b28a887';
			var x = cvc.value;
			while (x.length < 3) {
				x = x+"0";
			}
			tcvc.textContent = x;
		}else{
			scvc.textContent = "wrong format";
			cvc.style.border = '1px solid red';
		}
		
	}
})
////////////////////conf
var frm = document.getElementById('frm');
var suiv = document.getElementById('suiv');
conf[0].addEventListener("click", function () {
	if (nom.value == "" || num.value == "" || cvc.value == "" || mm.value == "" || yy.value == "" || snom.textContent !== "" ||  snum.textContent !== "" || sexp.textContent !== "" || scvc.textContent !== "") {
		if (nom.value == "") {
			snom.textContent = "Can't be blank";
			nom.style.border = '1px solid red';
		}
		if (num.value == "") {
			snum.textContent = "Can't be blank";
			num.style.border = '1px solid red';
		}
		if (mm.value == "" && yy.value == "") {
			sexp.textContent = "Can't be blank"; 
			mm.style.border = '1px solid red';
			yy.style.border = '1px solid red';
		}
		if (cvc.value == "") {
			scvc.textContent = "Can't be blank";
			cvc.style.border = '1px solid red';
		}
	}else {
		frm.style.display = 'none';
		suiv.style.display = 'block';
	}
})
