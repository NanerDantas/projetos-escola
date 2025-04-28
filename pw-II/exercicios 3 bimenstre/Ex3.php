<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Último número</title>
</head>
<body>
    <?php
        function pegarUltimoItem($array) {
            return end($array);
        }

        echo pegarUltimoItem([1, 2, 3]) . "<br>";
        echo pegarUltimoItem([71, 13, 25]) . "<br>";
        echo pegarUltimoItem([62, 10, 7]) . "<br>";
    ?>
</body>
</html>