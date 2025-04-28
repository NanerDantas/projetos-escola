<?php
    $username = "root";
    $host = "autorack.proxy.rlwy.net";
    $password = "CjeXzwtDhZJzGGqAvBQWyHaTvcUTBEfa";
    $database = "railway";
    $port = 28830;

    try {
        $pdo = new PDO("mysql:host=$host;dbname=$database;port=$port", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        die("Erro ao conectar ao banco de dados: " . $e->getMessage());
    }
?>
