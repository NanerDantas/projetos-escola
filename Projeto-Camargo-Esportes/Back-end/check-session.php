<?php

if(!isset($_SESSION)){
    session_start();
}

header("Access-Control-Allow-Origin: http://localhost:5173");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");

header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

if (isset($_SESSION['id'])) {
    echo json_encode(['loggedIn' => true, 'user' => ['id' => $_SESSION['id'], 'nome' => $_SESSION['nome']]]);
    return;
} else {
    echo json_encode(['loggedIn' => false]);
    return;
}
?>
