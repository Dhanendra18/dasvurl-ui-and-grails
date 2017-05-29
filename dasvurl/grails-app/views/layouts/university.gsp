<%--
  Created by IntelliJ IDEA.
  User: dhanendra
  Date: 19/2/17
  Time: 9:34 PM
--%>

<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta charset="UTF-8">
    <title>Das VURL - usa universities</title>
    <!--Latest css of materialize theme-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css"/>

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" media="screen">

    <!-- Optional theme -->
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css" media="screen">

    <g:external dir="css" file="style.css"/>
    <g:external dir="css" file="stylen.css"/>

    <script type="application/javascript" src="https://code.jquery.com/jquery-1.11.1.min.js"></script>
    <!-- java script plugin for scroll -->
    <script type="application/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
    <g:layoutHead/>
</head>
<body>

<nav class="navbar navbar-black navbar-fixed-top navme null-box-shadow" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <g:link uri="/"><p class="page-scroll baseHeader fontSize20" style="margin-top: 10px;">Das VURL</p></g:link>
        </div>
        <div>
            <a type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </a>
        </div>

    </div><!-- /.container-fluid -->
</nav>

<g:layoutBody/>

<div class="footer1">
    <div class="center">
        <p >(2016) Das VURL Pvt. Ltd.</p>
		<p style="font-style: italic">Designed, Developed <g:link controller="registerForm" action="index" style="color: #fff">and</g:link> Maintained by Dhanendra<i style="font-size: 18px">©</i></p>
    </div>
</div>
<!-- Latest compiled and minified JavaScript -->
<script type="application/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<script type="application/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bPopup/0.10.0/jquery.bpopup.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js"></script>
</body>
</html>
