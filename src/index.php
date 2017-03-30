<?php
if (isset($_GET['msg'])) {
    $msgNr = filter_input(INPUT_GET, 'msg');
} else {
    $msgNr = '';
}
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="mobile-web-app-capable" content="yes">
        <title>Recallable</title>

        <link href="libs/bootstrap/css/bootstrap.min.css" rel="stylesheet">

        <link href="css/main.css" rel="stylesheet">

        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>

    <body class="bg-main">

        <div class="container mobile-form">

            <h1>Recallable</h1>

            <form class="form-horizontal" action="login/login.php" method="post">
                <?php if ($msgNr == '1') { ?>
                    <div class="alert alert-success">
                        <button type="button" class="close" data-dismiss="alert">&times;</button>
                        <h4>Success!</h4>
                        You have successfully registered!
                    </div>
                <?php } ?>

                <?php if ($msgNr == '2') { ?>
                    <div class="alert alert-danger">
                        <button type="button" class="close" data-dismiss="alert">&times;</button>
                        <h4>Error!</h4>
                        Email or password is wrong!
                    </div>
                <?php } ?>

                <?php if ($msgNr == '3') { ?>
                    <div class="alert alert-info">
                        <button type="button" class="close" data-dismiss="alert">&times;</button>
                        <h4>Info!</h4>
                        Your session is not valid anymore, please log in again!
                    </div>
                <?php } ?>

                <div class="form-group">
                    <label for="inputEmail">Email</label>
                    <input type="email" class="form-control" id="inputEmail" name="ff_email" placeholder="Email">
                </div>

                <div class="form-group">
                    <label for="inputPassword">Password</label>
                    <input type="password" class="form-control" id="inputPassword" name="ff_password" placeholder="Password">
                </div>

                <div class="form-group">
                    <button type="submit" class="btn btn-danger btn-block">Sign in</button>
                </div>
            </form>

            <form class="form-horizontal" action="login/register.html" method="post">
                <div class="form-group">
                    <div class="spanner"><span>Not registered yet</span></div>
                </div>

                <div class="form-group"></div>

                <div class="form-group">
                    <button type="submit" class="btn btn-danger btn-block">Register</button>
                </div>
            </form>

        </div>

        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="libs/jquery/jquery.min.js"></script>
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="libs/bootstrap/js/bootstrap.min.js"></script>
        <script src="js/main.js"></script>
    </body>
</html>