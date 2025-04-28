<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menos numero de um array</title>
</head>
<body>
    <?php
        function menorNumeroArray($array) {
            return min($array);
        }

        echo menorNumeroArray([4, 10, 7, 2]) . "<br>";
        echo menorNumeroArray([6, 12, 3, 8]) . "<br>";
    ?>
</body>
</html>