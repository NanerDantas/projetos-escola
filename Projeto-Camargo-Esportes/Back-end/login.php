<?php
include("conexao.php");
if(!isset($_SESSION)){
    session_start();
}
$allowed_origins = [
    'http://localhost:3000', // Exemplo de origem permitida
    'http://localhost:5173',
    'http://127.0.0.1:5500', // Live Server
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $origin");
} else {
    header('HTTP/1.1 403 Forbidden');
    echo json_encode(['success' => false, 'message' => 'Origem não permitida.']);
    exit();
}

header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (!isset($data['email'])  ) {
        echo json_encode(['success' => false, 'message' => 'Digite seu email corretamente']);
        exit();
    } else if (!isset($data['senha'])){
        echo json_encode(['success' => false, 'message' => 'Digite sua senha corretamente']);
        exit();
    }

    $email = $conn->real_escape_string($data['email']);
    $senha = $conn->real_escape_string($data['senha']);

    $query = "SELECT * FROM usuarios WHERE email = '$email'";
    $res = $conn->query($query);

    if ($res->num_rows === 1) {
        $usuario = $res->fetch_assoc();
        if (password_verify($senha, $usuario['senha'])) {
            $_SESSION['id'] = $usuario['id'];
            $_SESSION['nome'] = $usuario['nome'];
            echo json_encode(['success' => true, 'message' => 'Login realizado com sucesso.', 'user' => ['id' => $_SESSION['id'], 'nome' => $_SESSION['nome']]]);
        } else {
            echo json_encode(['success' => false, 'message' => 'Senha incorreta.']);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'Usuário não encontrado.']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Método não suportado.']);
}
?>
