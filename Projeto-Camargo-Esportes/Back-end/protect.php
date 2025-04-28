<?php

    if(!isset($_SESSION)){
        session_start();
    }

    if(!isset($_SESSION['id'])){
        die( "você não pode acessar essa página pois não está logado. <p> <a href='/index.php'>login</a> </p>");
    }

?>