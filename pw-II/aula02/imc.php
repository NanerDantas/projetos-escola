<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IMC</title>
</head>
<body>
    <?php
        $peso = 58;
        $altura = 1.67;
        $imc = $peso/pow($altura,2);
    
        echo "Peso: ", $peso, " kg";
        echo "<br>";
        echo "<br>";
        echo "Altura: ", $altura, " m";
        echo "<br>";
        echo "<br>";
        echo "IMC: ", $imc;
        echo "<br>";
        echo "<br>";

        if ($imc < 18.5) {
            echo "Classificação: Magreza";
        } else if ($imc < 25) {
            echo "Classificação: Normal";
        } else if ($imc < 30) {
            echo "Classificação: Sobrepeso";
        } else if ($imc < 40) {
            echo "Classificação: Obesidade";
        } else {
            echo "Classificação: Obesidade Grave";     
        }
    ?>
</body>
</html>