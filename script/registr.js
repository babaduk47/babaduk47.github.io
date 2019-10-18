var login = document.getElementsByName("login")[0];
var pass = document.getElementsByName("pass")[0];
var pass2 = document.getElementsByName("pass2")[0];
var about = document.getElementsByName("about")[0];
var ArrayPole=[false,false,false,false];
var LeftPX=[0,150,300,450,600];
var Proc=[0,25,50,75,100];
var p=0;
var brr = document.getElementById("brick");
var l=0;

function onchangelogin(){
	var text = login.value;
	var word=false;
	var error="";
	for(var i=0; i<text.length; i++){
		if(word==false){
			if(text[i]==" "){
				word=true;
			}
		}
		else{
			if(text[i]!=" "){
				error+="Ошибка ввода логина\n";
				break;
			}
		}
	}
	if(text.length<=4){
		error+="Логин должен быть больше 4-х символов\n";
	}
	if(error!=""){
		alert(error);
		login.style.border="2px solid red";
		ArrayPole[0]=false;
		anim();
	}
	else{
		login.style.border="2px solid #49a35d";
		ArrayPole[0]=true;
		anim();
	}

}

function onchangepass(){
	var text = pass.value;
	var error="";
	if(text.length<=4){
		error+="Пароль должен быть больше 4-х символов\n";
	}
	if(error!=""){
		alert(error);
		pass.style.border="2px solid red";
		ArrayPole[1]=false;
		if(pass2.value!=""){
			asingpass()
		}
		anim();
	}
	else{
		ArrayPole[1]=true;
		pass.style.border="2px solid #49a35d";
		if(pass2.value!=""){
			asingpass()
		}
		anim();
	}
}

function asingpass(){
	var text = pass2.value;
	var error="";
	if(text!=pass.value){
		pass2.style.border="2px solid red";
		ArrayPole[2]=false;
	}
	else{
		pass2.style.border="2px solid #49a35d";;
		ArrayPole[2]=true;
	}
}

function onchangepass2(){
	var text = pass2.value;
	var error="";
	if(text!=pass.value){
		error+="Пароль не совпадают\n";
	}
	if(error!=""){
		alert(error);
		pass2.style.border="2px solid red";
		ArrayPole[2]=false;
		anim();
	}
	else{
		pass2.style.border="2px solid #49a35d";
		ArrayPole[2]=true;
		anim();
	}
}

function onchangeabout(){
	var text = about.value;
	var error="";
	if(text.length<=10){
		error+="Осебе должно быть больше 10-ти символов\n";
	}
	if(error!=""){
		alert(error);
		about.style.border="2px solid red";
		ArrayPole[3]=false;
		anim();
	}
	else{
		about.style.border="2px solid #49a35d";
		ArrayPole[3]=true;
		anim();
	}
}


function anim(){
	var caunter=0;
    for(var i=0;i<ArrayPole.length;i++){
    	if(ArrayPole[i]==true){
    		caunter++;
    	}
    }
    function frime(n){
    	brr.style.left=LeftPX[n]+"px";
    }
    if(l!=LeftPX[caunter]){
    	if(l>LeftPX[caunter]){
			var T = setInterval(function() {
			        if (l == LeftPX[caunter]) return clearInterval(T);
			        l--;
			        if(l%6==0){
			        	p--;
			        	brr.innerHTML=p+"%";
			        }
			        brr.style.left=l+"px";
			    }, 5);
    	}else{
		    		var TT = setInterval(function() {
		        if (l == LeftPX[caunter]) return clearInterval(TT);
		        l++;
		        if(l%6==0){
		        	p++;
		        	brr.innerHTML=p+"%";
			    }
		        brr.style.left=l+"px";
		    }, 5);
    	}
	}
}


function regis() {
	alert(brr.innerHTML)
}

