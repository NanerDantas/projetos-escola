<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Numero ausente em um array</title>
</head>
<body>
    <?php
        function acharNumero($array) {
            $somaCorreta = 55;
            $somaErrada = array_sum($array);

            return $somaCorreta - $somaErrada;
        }

        echo acharNumero([1, 2, 3, 4, 5, 7, 8, 9, 10]) . "<br>";
        echo acharNumero([10, 9, 8, 7, 6, 5, 4, 2, 1]) . "<br>";
        echo acharNumero([8, 3, 6, 9, 1, 4, 2, 10, 7]) . "<br>";
    ?>
</body>
</html>