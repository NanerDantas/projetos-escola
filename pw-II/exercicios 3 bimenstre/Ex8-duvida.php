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
            $arrayCorreto = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

            $numeroFaltante = array_diff($arrayCorreto, $array);

            return $numeroFaltante;
        }

        echo acharNumero([1, 2, 3, 4, 6, 7, 8, 9, 10]);
        echo acharNumero([10, 9, 7, 6, 5, 4, 3, 2, 1]);
        echo acharNumero([3, 6, 7, 1, 2, 9, 5, 10, 8]);
    ?>
</body>
</html>