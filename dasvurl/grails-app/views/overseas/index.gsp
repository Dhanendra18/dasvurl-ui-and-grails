<%@ page contentType="text/html;charset=UTF-8" %>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>Das VURL - overseas</title>
    <!--Latest css of materialize theme-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css"/>

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" media="screen">

    <!-- Optional theme -->
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css" media="screen">

    <g:external dir="css" file="style.css"/>
    <g:external dir="css" file="stylen.css"/>
    <link rel="stylesheet" type="text/css" href="../styles/flags.css" media="screen">

    <script type="application/javascript" src="https://code.jquery.com/jquery-1.11.1.min.js"></script>
    <!-- java script plugin for scroll -->
    <script type="application/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
    <style>
        #preload {
            width:100%;
            height:650px;
            object-fit:cover
        }
        #image {
            width:100%;
            position: absolute;
            z-index: 1;
        }
        .bg-img {
            background-image: url('../images/shutterstock_183037556.jpg');
            opacity: 0.65;
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }
    </style>
</head>
<body style="font-family: 'Raleway', san-serif;">

<nav class="navbar navbar-black navbar-fixed-top navme null-box-shadow" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <p onclick="location.href='${createLink(uri: '/')}'" class="page-scroll baseHeader fontSize20" style="margin-top: 10px;">Das VURL</p>
        </div>
        <div>
            <a type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right index-nav">
                <li class="active"><a class=" page-scroll">overseas education</a></li>
                <li ><a class="page-scroll">testimonial</a></li>
                <!--<li ><a href="#id_ourServices" class="page-scroll">our services</a></li>-->
                <!--<li ><a href="#id_contactUs" class="page-scroll">contact us</a></li>-->
            </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>
<div class=" navbar-black box-shadow" style="height: 110px; margin-top:50px">
    <div class="container" style="padding: 20px 15px;">
        <h1 class="hide-on-scroll">Overseas Education</h1>
    </div>
</div>
<div id="image">
    <img id="preload" src="../images/shutterstock_183037556.jpg" />
</div>

<div class="bg-img">
<div class="container">
        <div class="marginplus"></div>
        <div class="row rowbase">
            <div class="col-md-4 col-xs-12 custom-md-4 jumbotron jumbotron-custom hoverable" onclick="openCountryPopUp(1)">
                <!--<div class="col-xs-2"><img src="../images/contactus_call.png" alt="Flag 1"/></div>-->
                <div class="col-xs-10">
                    <p>USA</p>
                    <p>America is a melting pot of people from all over the world. One will find most Americans to be very hospitable, friendly, kind, generous and accepting of foreigners. Of course, there are a few exceptions, as in any country, but these are not the norm. In general, the people are funny, gregarious, innovative, and eager to learn. These are traits that many international students adopt and take home with them.
                    </p>
                </div>
            </div>
            <div class="col-md-3 col-xs-12 custom-offset-md-4 jumbotron jumbotron-custom hoverable" onclick="openCountryPopUp(2)">
                <!--<div class="col-xs-2"><img src="../images/contactus_call.png" alt="Flag 1"/></div>-->
                <div class="col-xs-10">
                    <p>UK</p>
                    <p>Description ytubylnjk nbvfvktuyblk nbnvhvtugylk nbv mfvuybl v hvgyuiunj</p>
                </div>
            </div>
            <div class="col-md-3 col-xs-12 custom-offset-md-4 jumbotron jumbotron-custom hoverable" onclick="openCountryPopUp(3)">
                <!--<div class="col-xs-2"><img src="../images/contactus_call.png" alt="Flag 1"/></div>-->
                <div class="col-xs-10">
                    <p>Australia</p>
                    <p>Australia is a dynamic and vibrant country providing an unmatched platform to students looking for international education. Preferring Australia to study lays out novel and delightful  opportunities and experiences, and a whole different outlook of the world, not to mention substantial and progressive world-class education programs.</p>
                </div>
            </div>
        </div>
        <div class="row rowbase">
            <div class="col-md-4 col-xs-12 custom-md-4 jumbotron jumbotron-custom hoverable" onclick="openCountryPopUp(4)">
                <!--<div class="col-xs-2"><img src="../images/contactus_call.png" alt="Flag 1"/></div>-->
                <div class="col-xs-10">
                    <p>Canada</p>
                    <p>The standard of Canada stands unparalleled if you seek for a good and high quality of life and Education. It has been consistently ranked by the UN as one of the best countries in the world to live in.</p>
                </div>
            </div>
            <div class="col-md-3 col-xs-12 custom-offset-md-4 jumbotron jumbotron-custom hoverable" onclick="openCountryPopUp(5)">
                <!--<div class="col-xs-2"><img src="../images/contactus_call.png" alt="Flag 1"/></div>-->
                <div class="col-xs-10">
                    <p>Singapore</p>
                    <p>Description ytubylnjk nbvfvktuyblk nbnvhvtugylk nbv mfvuybl v hvgyuiunj</p>
                </div>
            </div>
            <div class="col-md-3 col-xs-12 custom-offset-md-4 jumbotron jumbotron-custom hoverable" onclick="openCountryPopUp(6)">
                <!--<div class="col-xs-2"><img src="../images/contactus_call.png" alt="Flag 1"/></div>-->
                <div class="col-xs-10">
                    <p>New Zealand</p>
                    <p>Description ytubylnjk nbvfvktuyblk nbnvhvtugylk nbv mfvuybl v hvgyuiunj</p>
                </div>
            </div>
        </div>
        <div class="row rowbase">
            <div class="col-md-4 col-xs-12 custom-md-4 jumbotron jumbotron-custom hoverable" onclick="openCountryPopUp(7)">
                <!--<div class="col-xs-2"><img src="../images/contactus_call.png" alt="Flag 1"/></div>-->
                <div class="col-xs-10">
                    <p>Switzerland</p>
                    <p>Description ytubylnjk nbvfvktuyblk nbnvhvtugylk nbv mfvuybl v hvgyuiunj</p>
                </div>
            </div>
            <div class="col-md-3 col-xs-12 custom-offset-md-4 jumbotron jumbotron-custom hoverable" onclick="openCountryPopUp(8)">
                <!--<div class="col-xs-2"><img src="../images/contactus_call.png" alt="Flag 1"/></div>-->
                <div class="col-xs-10">
                    <p>Ireland</p>
                    <p>Description ytubylnjk nbvfvktuyblk nbnvhvtugylk nbv mfvuybl v hvgyuiunj</p>
                </div>
            </div>
            <div class="col-md-3 col-xs-12 custom-offset-md-4 jumbotron jumbotron-custom hoverable" onclick="openCountryPopUp(9)">
                <!--<div class="col-xs-2"><img src="../images/contactus_call.png" alt="Flag 1"/></div>-->
                <div class="col-xs-10">
                    <p>Germany</p>
                    <p>Description ytubylnjk nbvfvktuyblk nbnvhvtugylk nbv mfvuybl v hvgyuiunj</p>
                </div>
            </div>
        </div>
        <div class="row rowbase">
            <div class="col-md-4 col-xs-12 custom-md-4 jumbotron jumbotron-custom hoverable" onclick="openCountryPopUp(10)">
                <!--<div class="col-xs-2"><img src="../images/contactus_call.png" alt="Flag 1"/></div>-->
                <div class="col-xs-10">
                    <p>Cyprus</p>
                    <p>Description ytubylnjk nbvfvktuyblk nbnvhvtugylk nbv mfvuybl v hvgyuiunj</p>
                </div>
            </div>
            <div class="col-md-3 col-xs-12 custom-offset-md-4 jumbotron jumbotron-custom hoverable" onclick="openCountryPopUp(11)">
                <!--<div class="col-xs-2"><img src="../images/contactus_call.png" alt="Flag 1"/></div>-->
                <div class="col-xs-10">
                    <p>France</p>
                    <p>Description ytubylnjk nbvfvktuyblk nbnvhvtugylk nbv mfvuybl v hvgyuiunj</p>
                </div>
            </div>
            <div class="col-md-3 col-xs-12 custom-offset-md-4 jumbotron jumbotron-custom hoverable" onclick="openCountryPopUp(12)">
                <!--<div class="col-xs-2"><img src="../images/contactus_call.png" alt="Flag 1"/></div>-->
                <div class="col-xs-10">
                    <p>Malaysia</p>
                    <p>Description ytubylnjk nbvfvktuyblk nbnvhvtugylk nbv mfvuybl v hvgyuiunj</p>
                </div>
            </div>
        </div>
        <div class="row rowbase">
            <div class="col-md-4 col-xs-12 custom-md-4 jumbotron jumbotron-custom hoverable" onclick="openCountryPopUp(13)">
                <!--<div class="col-xs-2"><img src="../images/contactus_call.png" alt="Flag 1"/></div>-->
                <div class="col-xs-10">
                    <p>Italy</p>
                    <p>Description ytubylnjk nbvfvktuyblk nbnvhvtugylk nbv mfvuybl v hvgyuiunj</p>
                </div>
            </div>
            <div class="col-md-3 col-xs-12 custom-offset-md-4 jumbotron jumbotron-custom hoverable" onclick="openCountryPopUp(14)">
                <!--<div class="col-xs-2"><img src="../images/contactus_call.png" alt="Flag 1"/></div>-->
                <div class="col-xs-10">
                    <p>Dubai</p>
                    <p>Description ytubylnjk nbvfvktuyblk nbnvhvtugylk nbv mfvuybl v hvgyuiunj</p>
                </div>
            </div>
            <div class="col-md-3 col-xs-12 custom-offset-md-4 jumbotron jumbotron-custom hoverable" onclick="openCountryPopUp(15)">
                <!--<div class="col-xs-2"><img src="../images/contactus_call.png" alt="Flag 1"/></div>-->
                <div class="col-xs-10">
                    <p>Sweden</p>
                    <p>Description ytubylnjk nbvfvktuyblk nbnvhvtugylk nbv mfvuybl v hvgyuiunj</p>
                </div>
            </div>
        </div>
        <div class="row rowbase">
            <div class="col-md-4 col-xs-12 custom-md-4 jumbotron jumbotron-custom hoverable" onclick="openCountryPopUp(16)">
                <!--<div class="col-xs-2"><img src="../images/contactus_call.png" alt="Flag 1"/></div>-->
                <div class="col-xs-10">
                    <p>Spain</p>
                    <p>Description ytubylnjk nbvfvktuyblk nbnvhvtugylk nbv mfvuybl v hvgyuiunj</p>
                </div>
            </div>
            <div class="col-md-3 col-xs-12 custom-offset-md-4 jumbotron jumbotron-custom hoverable" onclick="openCountryPopUp(17)">
                <!--<div class="col-xs-2"><img src="../images/contactus_call.png" alt="Flag 1"/></div>-->
                <div class="col-xs-10">
                    <p>Lithuania</p>
                    <p>Description ytubylnjk nbvfvktuyblk nbnvhvtugylk nbv mfvuybl v hvgyuiunj</p>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-xs-12 custom-offset-md-4 jumbotron jumbotron-custom hoverable" onclick="openCountryPopUp(17)">
            <!--<div class="col-xs-2"><img src="../images/contactus_call.png" alt="Flag 1"/></div>-->
            <div class="col-xs-10">
                <p>Poland</p>
                <p>Poland officially the Republic of Poland is a country in Central Europe bordered by Germany to the West, the Czech Republic and Slovakia to the South, Ukraine and Belarus to the East and the Baltic Sea and Lithuania to the North. It is the 71st largest country in the world and the 9th largest in Europe. With a population of over 38.5 million people, Poland is the 34th most populous country in the world. Poland is a unitary state divided into 16 administrative subdivisions. Poland is considered to be a high-income economy. Poland is a peaceful country with a climate which is mostly temperate.</p>
            </div>
        </div>
    </div>
</div>

<div class="footer1">
    <div class="center">
        <p >(2016) Das VURL Pvt. Ltd.</p>
    </div>
</div>

<div class="container popup" id="popme" style="display: none;">
    <div class="row rowbase popupbar">
        <div class="col-xs-3">
        </div>
        <div class=" col-xs-6" align="center"><h3 id="country-name">Name in center</h3></div>
        <div class="col-xs-offset-1 col-xs-2"><a class="close">close[x]</a></div>
    </div>
    <div class="row rowbase">
        <div class="jumbotron ">
            <h3>About</h3>
            <p style="font-size: 14px" id="country-description">About this country and brief description about what is in this country and what will be the benefits of being and studying in this country.</p>
            <h3>University list</h3>
            <ul id="university-list" style="overflow-y: scroll; height: 300px">

            </ul>
        </div>
    </div>
</div>

<script type="application/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<script type="application/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bPopup/0.10.0/jquery.bpopup.min.js"></script>
<g:external dir="js" file="overseas-universities.js"/>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js"></script>
<script type="text/javascript">
    $(document).ready(function(){
        $window = $(window);
        var menu = $('.navme');
        var navTop = menu.offset().top + 5;
        function scroll() {
            if ($(window).scrollTop() >  navTop) {
                $(".hide-on-scroll").fadeOut(300);
//                $(".hide-on-scroll")
            } else {
                $(".hide-on-scroll").show(0);
            }
            if ($(window).scrollTop() >= navTop + 100) {
                menu.removeClass("null-box-shadow");
            } else if ($(window).scrollTop() <= navTop + 100) {
                menu.addClass("null-box-shadow");
            }
        }
        document.onscroll = scroll;
    });

    $("#image").ready(function(){
        $("#preload").fadeOut(2000);
    });
</script>
</body>
</html>
