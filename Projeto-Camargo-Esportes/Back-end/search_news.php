<?php
include("database.php");
$dados = json_decode(file_get_contents("php://input"), true);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}


if (json_last_error() !== JSON_ERROR_NONE) {
    echo json_encode(['error' => 'JSON inválido']);
    exit();
}

$stmt = $pdo->prepare("SELECT * FROM noticias WHERE titulo LIKE ? OR conteudo LIKE ?");
$stmt->execute(['%' . $dados['pesquisa'] . '%', '%' . $dados['pesquisa'] . '%']);
$resultados = $stmt->fetchAll(PDO::FETCH_ASSOC);

if ($resultados) {
    echo json_encode($resultados);
} else {
    echo json_encode(['error' => 'Notícia não encontrada']);
}

?>
