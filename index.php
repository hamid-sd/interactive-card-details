<!DOCTYPE html>
<html lang="fr">
<head>
	<title>Deffi Carte </title>
	<meta charset="utf-8">
	<meta name="robots" content="index,follow" />
	<meta name="author" content="Abdelhamid SAIDI">
	<meta name="description" content="My name is Abdelhamid Saidi,I’m 18 years old and I’m a Freelance Full Stack Developer and Graphic Designer based in Bejaia, Algeria, here is one of my projects">
	<meta content="width=device-width, initial-scale=1" name="viewport" />
	
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&display=swap" rel="stylesheet">
	<link rel="shortcut icon" href="images/favicon.png">
	<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<div id="bg"></div>
	<div id="front">
		<img src="images/bg-card-front.png" id="img-front">
		<label id="tnum" style="font-family: monospace;">0000 0000 0000 0000</label>
		<label id="tnom" style="font-family: monospace;">JANE APPELESEED</label>
		<label id="texp" style="font-family: monospace;">00/00</label>
		<div id="crcl1" style="font-family: monospace;"></div>
		<div id="crcl2" style="font-family: monospace;"></div>
	</div>

	<div id="back">
		<img src="images/bg-card-back.png" id="img-back">
		<label id="tcvc">000</label>
	</div>
	<form action="ajoutcarte.php" method="post">
		<div id="frm" style="transition-duration: 0.5s;">
			<label>cardholder name</label>
			<br>
			<input type="text" name="nom" id="nom"  placeholder="e.g JANE APPELESEED" autocomplete="off">
			<br>
			<span id="snom"></span>
			<br>
			<br>
			<label>card number</label>
			<br>
			<input type="text" name="num" id="num"  maxlength="19"  placeholder="0000 0000 0000 0000" autocomplete="off">
			<br>
			<span id="snum"></span>
			<br>
			<br>
			<div style="display: flex;justify-content: space-between">
				<div style="width: 45%;">
					<label>EXP.date(jj/mm)
					</label>
					<br>
					<div style="display: flex;
					width: 100%;justify-content: space-between;">
					<input type="text" name="mm" id="mm"  maxlength="2"  placeholder="JJ" autocomplete="off">
					<input type="text" name="yy" id="yy"  maxlength="2"  placeholder="MM" autocomplete="off">
				</div>
				<span id="sexp"></span>
			</div>	
			<div style="width: 48%;">
				<label>CVC</label>
				<br>
				<input type="text" name="cvc" id="cvc"  maxlength="3"  placeholder="e.g 123" autocomplete="off">
				<br>
				<span id="scvc"></span>
			</div>
		</div>
		<br>
		<br>
		<div class="conf">Confirm</div>  
	</div>
	<div id="suiv">
		<div id="crcl3"><i class="fa fa-check fa-2x" aria-hidden="true"></i></div>
		<h2>THANK YOU!</h2>
		<H3>We've added your card details</H3>
		<br>
		<br>
		<button class="conf">Continue</button>
	</div>
</form>

<script type="text/javascript" src="carte.js"></script>
</body>
</html>