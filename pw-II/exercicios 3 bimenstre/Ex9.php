<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E Natal?</title>
</head>
<body>
    <?php
        function eNatal($data) {
            $mesDia = date_format($data, "m-d");

            if ($mesDia == "12-25") {
                return "True";
            } else {
                return "False";
            }
        }

        echo eNatal(new DateTime("2023-12-25")) . "<br>";
        echo eNatal(new DateTime("2040-12-25")) . "<br>";
        echo eNatal(new DateTime("2021-12-14")) . "<br>";
        echo eNatal(new DateTime("2014-8-25")) . "<br>";
    ?>
</body>
</html>