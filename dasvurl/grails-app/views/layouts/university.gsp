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
    <title>Das VURL - Links</title>
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
	<style>
	.mouse {
		display: block;
		margin: 0 auto;
		width: 22px;
		height: 40px;
		border-radius: 13px;
		border: 2px solid #fff;
		margin-left: -14px;
	}

	.mouse span {
		display: block;
		margin: 6px auto;
		width: 2px;
		height: 5px;
		border-radius: 4px;
		background: #fff;
		border: 1px solid transparent;
		-webkit-animation-duration: 1s;
		animation-duration: 1s;
		-webkit-animation-fill-mode: both;
		animation-fill-mode: both;
		-webkit-animation-iteration-count: infinite;
		animation-iteration-count: infinite;
		-webkit-animation-name: scroll;
		animation-name: scroll;
	}

	.arrow {
		position: absolute;
		width: 13px;
		height: 70px;
		opacity: 1;
		left: 5px;
		bottom: -115px;
	}

	@-webkit-keyframes scroll {
		0% {
			opacity: 1;
			-webkit-transform: translateY(0);
			transform: translateY(0);
		}
		100% {
			opacity: 0;
			-webkit-transform: translateY(20px);
			transform: translateY(20px);
		}
	}

	@keyframes scroll {
		0% {
			opacity: 1;
			-webkit-transform: translateY(0);
			-ms-transform: translateY(0);
			transform: translateY(0);
		}
		100% {
			opacity: 0;
			-webkit-transform: translateY(20px);
			-ms-transform: translateY(20px);
			transform: translateY(20px);
		}
	}

	.university-bg {
		padding-top: 50px;
		padding-bottom: 50px;
		background-color: #1e1e1e;
		min-height: 100vh;
		color: #f1f1f1;
	}

	.university-bg-name {
		padding-top: 50px;
		background-color: #f1f1f1;
		min-height: 100vh;
		color: #1e1e1e;
	}

	#custom-gen ul li:before {
		content: "\0BB \020";
		color: #FFD034;
		font-weight: 900;
		font-size: 16px;
		text-shadow: 1px 1px 5px #ffd034;
		padding-right: 10px;
	}

	#custom-gen ul li {
		font-size: 16px;
		line-height: 3;
	}

	.head {
		height: 100vh;
		margin-top:50px;
		position: relative
	}

	.head .overlay {
		height: 100vh;
		width: 100%;
		position: absolute;
		top: 0;
		right:0;
		background-color: rgba(0,80,120,0.5);
	}

	.head .content {
		width: 100%;
		height: 100vh;
		position: relative
	}

	.head .content .container {
		vertical-align: middle;
		text-align: center;
		padding-top: 30vh
	}

	.head .content .container h1{
		color: #fff;
		font-size: 70px;
		text-shadow: 1px 1px 3px #f1f1f1;
	}

	.university-bg .heading h1{
		color: #f1f1f1;
		text-shadow: 1px 1px 7px #f1f1f1;
	}

	.university-bg .heading h1 span{
		color: #FFD034;
		text-shadow: 1px 1px 10px #ffd034;
	}

	.university-bg h2 {
		font-variant: small-caps;
	}

	.university-bg p {
		line-height: 26px;
		word-spacing: 4px;
	}
	</style>
</head>
<body>
<nav class="navbar navbar-black navbar-fixed-top navme null-box-shadow" style=" box-shadow: 0px 3px 10px #000;" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <g:link uri="/"><p class="page-scroll baseHeader fontSize20" style="margin-top: 10px;">Das VURL</p></g:link>
		</div>
		<ul class="nav navbar-nav navbar-right">
			<li class="fontbold fontSize18" style="margin-top: 10px">Have a question? +9195606-26920, +91120-4230300</li>
		</ul>

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
