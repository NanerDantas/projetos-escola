<?php
include("database.php");
header("Access-Control-Allow-Origin: *");

header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");

header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}
try {

    $stmt = $pdo->prepare("SELECT * FROM noticias WHERE id = :id");

    $id = (int) $_GET["id"];

    $stmt->execute([':id' => $id]);

    $noticias = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($noticias) {
        echo json_encode($noticias);
    } else {
        echo json_encode(['error' => 'Notícia não encontrada']);
    }
} catch (PDOException $e) {
    echo json_encode(['error' => 'Erro no banco de dados: ' . $e->getMessage()]);
}
?>