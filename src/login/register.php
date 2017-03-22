<?php
$username = filter_input(INPUT_POST, 'ff_username');
$email = filter_input(INPUT_POST, 'ff_email', FILTER_SANITIZE_EMAIL);
$pw = filter_input(INPUT_POST, 'ff_password');
$pw_hash = password_hash($pw, PASSWORD_DEFAULT);

//connect to the DB
$mysqli = new mysqli('elburrom.mysql.db.hostpoint.ch', 'elburrom_recall', 'rKzfdBbF', 'elburrom_recallable');

$mysqli->query("SELECT user_id FROM users WHERE user_email = '". $email ."'");
if ($mysqli->affected_rows != 0) {
        header("Location: http://recallable.der-esel.ch/login/register.html?msg=1");
        die();
    
} else {
    $sql = "INSERT INTO users (user_username, user_email, user_pw) "
            . "VALUES ('". $username ."', '". $email ."', '". $pw_hash ."')";
        
    if ($mysqli->query($sql) === TRUE) {
        header("Location: http://recallable.der-esel.ch?msg=1");
        die();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

mysqli_close($mysqli);
