var login = document.getElementsByName("login")[0];
var pass = document.getElementsByName("pass")[0];
var pass2 = document.getElementsByName("pass2")[0];

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
		ArrayPole[0]=false;
		anim();
	}
	else{
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
		ArrayPole[1]=false;
		anim();
	}
	else{
		ArrayPole[1]=true;
		anim();
	}
	if(pass2.value!=""){
		onchangepass2();
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
		ArrayPole[2]=false;
		anim();
	}
	else{
		ArrayPole[2]=true;
		anim();
	}
}
var ArrayPole=[false,false,false,false];
var LeftPX=[0,125,250,375,500]
var brr = document.getElementById("brick");
var l=0;
function an(){
	brr.style.left="100px";
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
			        brr.style.left=l+"px";
			    }, 5);
    	}else{
		    		var TT = setInterval(function() {
		        if (l == LeftPX[caunter]) return clearInterval(TT);
		        l++;
		        brr.style.left=l+"px";
		    }, 5);
    	}

 // 40 мс.
}
    //frime(caunter);

}


function regis() {
	alert(login.value)
}

