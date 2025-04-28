<?php

if(!isset($_SESSION)){
    session_start();
}

header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');


session_destroy();
echo json_encode(['success' => true, 'message' => 'Sessão encerrada.']);
?>
