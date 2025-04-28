<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Numero de pernas</title>
</head>
<body>
    <?php
        function animais($galinhas, $vacas, $porcos) {
            $galinhas = $galinhas * 2;
            $vacas = $vacas * 4;
            $porcos = $porcos * 4;
            $totalPernas = $galinhas + $vacas + $porcos;

            return $totalPernas;
        }

        echo animais(1, 1, 1);
    ?>
</body>
</html>