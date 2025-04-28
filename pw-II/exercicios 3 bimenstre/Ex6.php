<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Escrever o menor numero</title>
</head>
<body>
    <?php
        function menorNumero($x, $y) {
            if ($x > $y) {
                return $y;
            } else {
                return $x;
            }
        }

        echo menorNumero(18, 14) . "<br>";
        echo menorNumero(57, 21) . "<br>";
        echo menorNumero(4, 16) . "<br>";
    ?>
</body>
</html>