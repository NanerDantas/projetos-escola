<?php
    $username = "root";
    $host  = "autorack.proxy.rlwy.net";
    $password = "CjeXzwtDhZJzGGqAvBQWyHaTvcUTBEfa";
    $database = "railway";
    $port = 28830;

    $conn = new mysqli($host, $username, $password, $database, $port);

    if ($conn->connect_error) {
        die("Erro ao conectar ao banco de dados: " . $conn->connect_error);
    }
?>
