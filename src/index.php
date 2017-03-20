<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Recallable</title>

    <link href="libs/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <link href="css/main.css" rel="stylesheet">

    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>

<div class="container mobile-form">
<h1>Recallable</h1>

<form class="form-horizontal" action="login/login.php" method="post">
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
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="libs/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>