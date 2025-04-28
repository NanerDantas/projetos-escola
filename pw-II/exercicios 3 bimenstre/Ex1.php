<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Soma de dois números</title>
</head>
<body>
    <?php
        function soma($x, $y) {
            $z = $x + $y;
            return $z;
        }

        echo "2 + 8 = " . soma(2, 8) . "<br>";
        echo "3 + 14 = " . soma(3, 14) . "<br>";
        echo "18 + 31 = " . soma(18, 31) . "<br>";
    ?>
</body>
</html>