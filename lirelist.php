<?php
$dbh = new PDO('mysql:host=localhost;dbname=project1', 'root', 'kabul');
  $requete = "SELECT * FROM formulaire ;";
  //echo $requete;
  $reponse = $dbh->query( $requete);
  $resultat = $reponse->fetchAll(\PDO::FETCH_ASSOC);
  foreach ($resultat as $key => $value) {
    
   // echo "{$key} => {$value} ";
    foreach ($value as $label => $val){
    	echo " $label : $val  --- ";

    	
    }
    echo "<br>";
    echo "<br>";
   }
   
?>