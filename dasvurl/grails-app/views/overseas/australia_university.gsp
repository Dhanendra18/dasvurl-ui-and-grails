<%@ page contentType="text/html;charset=UTF-8" %>
<!DOCTYPE html>
<html>
<head>
	<meta name="layout" content="university">
	<title></title>
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

		.university-bg-img {
			background-image: url('../images/image6.jpg');
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;
		}
	</style>
</head>


<body>
<header class="box-shadow university-bg-img head">
	<div class="overlay"></div>
	<div class="content">
		<div class="container">
			<h1 class="animated fadeInDown fontbold">Australian Universities <br>And <br>Colleges</h1>
			<div class="row">
				<div class="col-xs-offset-6 col-xs-1" style="padding-top: 10vh">
					<div class="mouse">
						<span></span>
					</div>
					<a href="#main" class="page-scroll arrow"> <img src="../images/down-arrow.png" alt=""> </a>
				</div>
			</div>
		</div>
	</div>
</header>

<div class="university-bg fontregular" id="main">
	<div class="container">
		<div class="row">
			<div class="col-xs-12 heading">
				<h1>About <span> Australia</span></h1>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12">
				<h2>Why Study In Australia?</h2>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12">
				<p class="fontSize16" >​Australia is an energetic and exciting country providing an unmatched platform to students looking

				for international education and has the third highest number of foreign students in the world behind

				only the UK &amp; US. Preferring Australia to study lays out unique and delightful opportunities and

				experiences, and a whole different outlook of the world, not to mention substantial and progressive

				world-class education programs.</p>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12">
				<h2>​Reasons To Study Abroad</h2>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12">
				<p class="fontSize16" >Australia has enabling and enlightened education process with a reputation for brilliance and provides globally-recognized courses and qualifications, a relaxed, enjoyable and secured lifestyle.</p>
				<p class="fontSize16" style="line-height: 26px; word-spacing: 4px;" >​The country’s education and living expenses are relatively economical. The environment is lively, appealing and there are multicultural cities, soothing weather, flamboyant and diverse landscapes and scenery with unique flora and fauna.</p>
				<p class="fontSize16" >​​This isn’t surprising when you consider Australia has eight of the top 100 universities in the world! IDP offers you the opportunity to accomplish your aspirations and dreams of higher education and study in Australia. Australia has a modern, highly educated culture with a thirst for knowledge and research. Australia has contributed to science and research through fascinating discoveries, high quality educational opportunities, and international collaboration. Australia is located near Asia, one of the fastest developing regions, so has immediate ties to most powerful economic hubs in the	world.</p>
				<p class="fontSize16">​​This isn’t surprising when you consider Australia has eight of the top 100 universities in the world! IDP offers you the opportunity to accomplish your aspirations and dreams of higher education and study in Australia. Australia has a modern, highly educated culture with a thirst for knowledge and research. Australia has contributed to science and research through fascinating discoveries, high quality educational opportunities, and international collaboration. Australia is located near Asia, one of the fastest developing regions, so has immediate ties to most powerful economic hubs in the world.</p>
				<p class="fontSize16" >When most people think of Australia, they think about green pastures, kangaroos, koalas and clean air and water. However, Australia has so much more to offer like its friendly, laid-back nature, excellent education system and high standard of living making it hot spot for international students. Australia is a country of opportunities for career, new culture and adventure. There are many reasons why international students choose to study in Australia:</p>
			</div>
		</div>

	</div>
</div>
<div class="university-bg-name fontregular">
	<div class="container">
		<div class="row">
			<div class="col-xs-12">
				<h1 style=" text-shadow: 1px 1px 7px #1f1f1f;">List of <span style="color: #FFD034; text-shadow: 1px 1px 10px #ffd034;"> Universities</span></h1>
			</div>
		</div>
		<div class="row" id="custom-gen">
			<div class="col-xs-6">
				<ul>
					<li>Queensland University of Technology </li>
					<li>Griffith University</li>
					<li>University of South Australia</li>
					<li>Swinburne University of Technology</li>
					<li>James Cook University, Brisbane</li>
					<li>University of Tasmania</li>
					<li>University of Canberra</li>
					<li>Edith Cowan University </li>
					<li>Federation University </li>
					<li>Central Queensland University </li>
					<li>Southern Cross University Sydney Educo Global</li>
					<li>Latrobe University Sydney Campus </li>
					<li>Curtin University Sydney Campus</li>
					<li>Macquarie University City Campus </li>
					<li>University of Southern Queensland Education Centre</li>
					<li>Charles Sturt University Study Centre (Sydney & Melbourne)</li>
					<li>Charles Darwin University, Melbourne </li>
					<li>Charles Sturt University, Wagga Wagga Campus </li>
					<li>University of Sunshine Coast, Australia </li>
					<li>Education and Training International</li>
					<li>Gold Coast Institute of TAFE </li>
					<li>Martin College</li>
					<li>Taylor College</li>
					<li>University of Sydney</li>
					<li>Charles Sturt University</li>
					<li>University of Western</li>
					<li>Flinders International Study Centre </li>
				</ul>
			</div>
			<div class="col-xs-6">
				<ul>
					<li>Flinders University</li>
					<li>Cambridge International College</li>
					<li>Melbourne Institute of Technology</li>
					<li>Federation University</li>
					<li>SAE Institute Australia</li>
					<li>Bradford College </li>
					<li>University of Adelaide</li>
					<li>Murdoch Institute of Technology</li>
					<li>International Institute of Business & Information Technology</li>
					<li>Federation University</li>
					<li>The Cantillon Institute</li>
					<li>Ozford Education Group</li>
					<li>University of Canberra</li>
					<li>Australian Technical & Management College</li>
					<li>Australian Learning Training & Education Centre</li>
					<li>Australian Learning Training & Education Centre</li>
					<li>Navitas Partner Institutes</li>
					<li>Edith Cowan University</li>
					<li>Deakin University</li>
					<li>Latrobe University</li>
					<li>Australian Campus Network </li>
					<li>Curtin College</li>
					<li>Eynesbury College</li>
					<li>Griffith University</li>
					<li>University of New Castle</li>
					<li>University of South Australia</li>
					<li>Macquarie University</li>
				</ul>
			</div>
		</div>
	</div>
</div>
</body>
</html>
