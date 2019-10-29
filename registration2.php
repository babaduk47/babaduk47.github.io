<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link href="https://fonts.googleapis.com/css?family=Libre+Baskerville:400i&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet">
	<link href="style/registrstyle.css" rel="stylesheet">
	<link rel="shortcut icon" href="images/icon.png" type="image/png">
</head>
	<body>
        <div class="main">
    	    	<div id="path">
			   		 <div id="brick" onclick="anim();" velign="center">0%</div>
			 	</div>
				<div class="cenreg">
				<form class="registr" method="POST" name="registr">
	            	<input type="text" name="login" class="pole" placeholder="Логин" onchange="onchangelogin();"><span class="need">*</span><br>
	            	<input type="text" name="pass" class="pole" placeholder="Пароль" onchange="onchangepass();"><span class="need">*<br>
	            	<input type="text" name="pass2" class="pole" placeholder="Повтор пароля" onchange="onchangepass2();"><span class="need">*<br>
	            	<textarea placeholder="О себе" class="about" onchange="onchangeabout();" name="about"><?php include 'test.php'?></textarea><br><br>
	            	<!--<input type="button" name="but" value="Регистрация" onclick="time();setInterval(time, 1000);" class="but"><br>-->
	            	<a class="boton1" id="bb" onclick="time();setInterval(time, 1000);">REGISTRATION</a>
	            	
			        <script type="text/javascript">
						var i = 3;
						function time(){
						if(i>0)
						 document.getElementById("bb").innerHTML = i--;
						else{
							document.getElementById("bb").innerHTML = "REDIRECT...";
							i--;
						}
						 if (i < -1) location.href = "../lab3/index.html";
						}
						
					</script>

            	</form>
            	
				</div>
            
        </div>
    <script type="text/javascript" src="script/registr.js"></script>
	</body>
</html>
