<?php
include('database.php');

header("Access-Control-Allow-Origin: *");

header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");

header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

$dados = json_decode(file_get_contents("php://input"), true);

$data_publicacao = date('Y-m-d');

$titulo = isset($dados['titulo']) && is_string($dados['titulo']) && !empty($dados['titulo']) ? htmlspecialchars(trim($dados['titulo'])) : null;
$conteudo = isset($dados['conteudo']) && is_string($dados['conteudo']) ? htmlspecialchars(trim($dados['conteudo'])) : null;
$autor = isset($dados['autor']) && is_string($dados['autor']) ? htmlspecialchars(trim($dados['autor'])) : null;
$categoria = isset($dados['categoria']) && is_string($dados['categoria']) ? htmlspecialchars(trim($dados['categoria'])) : null;
$imagens = isset($dados['imagens']) ? $dados['imagens'] : null;
$materiaCompleta = isset($dados['materiaCompleta']) && is_string($dados['materiaCompleta']) ? htmlspecialchars(trim($dados['materiaCompleta'])) : null;
$id = (int) $dados["id"];


try {
    if (!$titulo || !$conteudo || !$autor || !$categoria || !$materiaCompleta) {
        echo json_encode(["status" => "error", "message" => "Campos obrigatórios faltando."]);
        exit;
    }

    $query = "UPDATE noticias SET titulo = :titulo, conteudo = :conteudo, data_publicacao = :data_publicacao, autor = :autor, categoria = :categoria, imagens = :imagens, materiaCompleta = :materiaCompleta WHERE id = :id;";

    $stmt = $pdo->prepare($query);

    $stmt->bindParam(':titulo', $titulo);
    $stmt->bindParam(':conteudo', $conteudo);
    $stmt->bindParam(':autor', $autor);
    $stmt->bindParam(':id', $id);
    $stmt->bindParam(':categoria', $categoria);
    $stmt->bindParam(':imagens', $imagens);
    $stmt->bindParam(':materiaCompleta', $materiaCompleta);
    $stmt->bindParam(':data_publicacao', $data_publicacao);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Notícia cadastrada com sucesso"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Erro ao cadastrar a notícia."]);
    }
} catch (PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => 'Erro ao processar a solicitação: ' . $e->getMessage()]);
}
?>