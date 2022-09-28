<?php 
	try {
		$cartes = new PDO("mysql:host=localhost;dbname=cartes;charset=utf8;","root","");
		// $amis = new PDO("mysql:host=localhost;dbname=amis;port:3308;","root","");
	} catch (Exception $e) {
		die("echec de connexion<br>".$e->getMessage());
	}
	$exp = $_POST['mm']."/".$_POST['yy'];
	$cartes->exec("INSERT INTO carte(nom,num,exp,cvc) VALUES('".$_POST['nom']."','".$_POST['num']."','".$exp."','".$_POST['cvc']."')");

	header("location:index.php");
?>