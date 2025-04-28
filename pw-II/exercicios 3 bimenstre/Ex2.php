<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Área de triângulo</title>
</head>
<body>
    <?php
        function area($x, $y) {
            $z = ($x * $y)/2;
            return $z;
        }

        echo "Área do triângulo de base 4 e altura 6 = " . area(4, 6) . "<br>";
        echo "Área do triângulo de base 5 e altura 8 = " . area(5, 8) . "<br>";
        echo "Área do triângulo de base 2 e altura 9 = " . area(2, 9) . "<br>";
    ?>
</body>
</html>