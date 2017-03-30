<?php
session_start();
if (!isset($_SESSION['userName'])) {
    header("Location: http://recallable.der-esel.ch/?msg=3");
    die();
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
        <title>Recallable - Home</title>

        <link href="libs/bootstrap/css/bootstrap.min.css" rel="stylesheet">

        <link href="css/main.css" rel="stylesheet">

        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>

    <body class="bg-main">

        <div class="container mobile-form">
            <form>
                <div class="profile">
                    <?php if ($_SESSION['userId'] == 9) { ?>
                        <div style="display:inline-block; margin-right: 30px; position: relative; z-index: 5;">
                            <img class="profile-img" src="img/profile_jeff.jpg" width="100" alt="" />
                            <h3><?php echo $_SESSION['userName']; ?></h3>
                        </div>

                        <div style="display:inline-block; margin-left: 30px; position: relative; z-index: 5;">
                            <img class="profile-img" src="img/profile_amy.jpg" width="100" alt="" />
                            <h3>Amy</h3>
                        </div>

                    <div class="spanner"><span><img src="img/icons/heart_profile.png" width="30" /></span></div>

                    <?php } else { ?>
                        <img src="img/profile_ramon.jpe" width="100" alt="" />
                        <h3><?php echo $_SESSION['userName']; ?></h3>
                    <?php } ?>
                </div>
            </form>

            <?php if ($_SESSION['userId'] == 8) { ?>
                <form class="form-horizontal" action="coupling.html" method="post">
                    <div class="form-group">
                        <button type="submit" class="btn btn-danger btn-block">Connect with your Partner</button>
                    </div>
                </form>
            <?php } ?>

            <form class="form-horizontal" action="preferences.html" method="post">
                <div class="form-group">
                    <button type="submit" class="btn btn-danger btn-block">Preference Test</button>
                </div>
            </form>

            <form class="form-horizontal" action="chooser.html" method="post">
                <div class="form-group">
                    <?php if ($_SESSION['userId'] == 8) { ?>
                        <button type="submit" disabled="disabled" class="btn btn-danger btn-block">Get Suggestion</button>
                    <?php } else { ?>
                        <button type="submit" class="btn btn-danger btn-block">Get Suggestion</button>
                    <?php } ?>
                </div>
            </form>
            
            <form class="form-horizontal" action="memories.html" method="post">
                <div class="form-group">
                    <?php if ($_SESSION['userId'] == 8) { ?>
                        <button type="submit" disabled="disabled" class="btn btn-danger btn-block">Our Memories</button>
                    <?php } else { ?>
                        <button type="submit" class="btn btn-danger btn-block">Our Memories</button>
                    <?php } ?>
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