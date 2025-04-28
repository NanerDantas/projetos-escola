<?php
$dados = json_decode(file_get_contents("php://input"), true);
include("database.php");
header("Access-Control-Allow-Origin: *");

header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");

header("Access-Control-Allow-Headers: Content-Type, Authorization");

$id = (int) $dados["idUser"];

try {

    $stmt = $pdo->prepare("SELECT * FROM noticias WHERE autor_id = :id");
    $stmt->execute([':id' => $id]);

    $noticias = $stmt->fetchAll(PDO::FETCH_ASSOC); 

    if ($noticias) {
        echo json_encode($noticias);
    } else {
        echo json_encode(['error' => 'Notícias não encontradas']);
    }
} catch (PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => 'Erro ao processar a solicitação']);
}
?>
