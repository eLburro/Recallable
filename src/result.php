<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="mobile-web-app-capable" content="yes">
        <title>Recallable - Suggestions</title>

        <link href="libs/bootstrap/css/bootstrap.min.css" rel="stylesheet">

        <link href="css/main.css" rel="stylesheet">

        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>

    <body>

        <div id="result-container"></div>
        
        <div class="container mobile-form">
            <form class="form-horizontal" action="chooser.html" method="post">
                <div class="form-group">
                    <button type="submit" class="btn btn-danger btn-block">Reselect</button>
                </div>
            </form>
       </div>

        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="libs/jquery/jquery.min.js"></script>
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="libs/bootstrap/js/bootstrap.min.js"></script>
        <script src="js/main.js"></script>
        <script src="js/suggestions/Suggestion.js"></script>

        <script>
            $(function () {
                var result = new Suggestion();
            });
        </script>
    </body>
</html>