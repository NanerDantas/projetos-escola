<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificacao email</title>
</head>
<body>
    <?php
        function verificarEmail($email) {
            if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
                return "True";
            } else {
                return "False";
            }
        }

        echo verificarEmail("soumtfoda@gmail.com") . "<br>";
        echo verificarEmail("soumtfodagmail.com") . "<br>";
        echo verificarEmail("soumtfoda@com") . "<br>";

        // Achei em um site pesquisando por "validacao de email em php"
    ?>
</body>
</html>