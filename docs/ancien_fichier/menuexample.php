<?php

$pages = array("Accueil" =>"Accueil","Nos partenaires"=>"partenaires", "Contactez-nous"=>"contact");
echo "<ul>";
foreach ($pages as $nom => $id) {
	echo "<li><a href=\"page.php?id=".$id."\">".$nom."</a></li>";
}
echo "</ul>";

?>