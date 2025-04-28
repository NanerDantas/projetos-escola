<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checar numero em um array</title>
</head>
<body>
    <?php 
        function checagem($array, $numero) {
            if (in_array($numero, $array)) {
                return "True";
            } else {
                return "False";
            }
        }

        echo checagem([1, 2, 3, 4, 5], 4) . "<br>";
        echo checagem([1, 2, 3, 4, 5], 7) . "<br>";
        echo checagem([1, 2, 3, 4, 5], 10) . "<br>";
    ?>
</body>
</html>