<?php
include('database.php');

$dados = json_decode(file_get_contents("php://input"), true);

header("Access-Control-Allow-Origin: *");

header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");

header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}




if (empty($dados['nome']) || !is_string($dados['nome'])) {
    $nome = null;
} else {
    $nome = htmlspecialchars(trim($dados['nome']));
}
$email = $dados['email'] ?? null;
$senha = $dados['senha'] ?? null;

$dataNascimento = $dados['dataNascimento'] ?? null;
$genero = $dados['genero'] ?? null;
$cidade = $dados['cidade'] ?? null;
$estado = $dados['estado'] ?? null;

$senha_criptografada = password_hash($senha, PASSWORD_DEFAULT);

try {
    $query = "INSERT INTO usuarios (nome, email, senha, dataNascimento, genero, cidade, estado)
              VALUES (:nome, :email, :senha, :dataNascimento, :genero, :cidade, :estado)";
    
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':nome', $nome);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':senha', $senha_criptografada);
    $stmt->bindParam(':dataNascimento', $dataNascimento);
    $stmt->bindParam(':genero', $genero);
    $stmt->bindParam(':cidade', $cidade);
    $stmt->bindParam(':estado', $estado);

    if ($stmt->execute()) {
        header('Content-Type: application/json');
        echo json_encode(["status" => "success", "message" => "Usuário cadastrado com sucesso"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Erro ao cadastrar usuário"]);
    }
} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}

?>
