<?php
$email = filter_input(INPUT_POST, 'ff_email', FILTER_SANITIZE_EMAIL);
$pw = filter_input(INPUT_POST, 'ff_password');

//connect to the DB
$mysqli = new mysqli('elburrom.mysql.db.hostpoint.ch', 'elburrom_recall', 'rKzfdBbF', 'elburrom_recallable');

$sql = "SELECT * FROM users WHERE user_email = '". $email ."'";

if ($res = $mysqli->query($sql)) {
    while ($row = $res->fetch_assoc()) {
        $hash = $row['user_pw'];
       
        if (password_verify($pw, $hash)) {
            // log in Session!
            header("Location: http://recallable.der-esel.ch/home.html");
            die();

        } else {
            header("Location: http://recallable.der-esel.ch?msg=2");
            die();
        }
        
        break;
    } 
    
    $res->free();
}

mysqli_close($mysqli);
