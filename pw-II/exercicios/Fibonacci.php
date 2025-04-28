<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fibonacci</title>
</head>
<body>
    <?php
        $x = 0;
        $y = 1;
        
        for ($i=0; $i < 8; $i++) { 
            echo ($x), "<br>";

            $proximo = $x + $y;
            $x = $y;
            $y = $proximo;
        }
    
    ?>
</body>
</html>