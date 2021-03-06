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
            height:100%;
            object-fit:cover;
            position: fixed;
            z-index: 11111;
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
<img id="preload" src="../images/shutterstock_183037556.jpg" />

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
            </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>
<div class=" navbar-black box-shadow" style="height: 110px; margin-top:50px">
    <div class="container" style="padding: 20px 15px;">
        <h1 class="hide-on-scroll">Overseas Education</h1>
    </div>
</div>
<div class="bg-img">
<div class="container">
        <div class="marginplus"></div>
        <div class="row rowbase">
            <div class="col-md-4 col-xs-12 custom-md-4 jumbotron jumbotron-custom hoverable" onclick="openCountryPopUp(1)">
                <div class="col-xs-10">
                    <p>USA</p>
                    <p>America is a melting pot of people from all over the world. One will find most Americans to be very hospitable, friendly, kind, generous and accepting of foreigners. Of course, there are a few exceptions, as in any country, but these are not the norm. In general, the people are funny, gregarious, innovative, and eager to learn. These are traits that many international students adopt and take home with them.
                    </p>
                </div>
            </div>
            <div class="col-md-3 col-xs-12 custom-offset-md-4 jumbotron jumbotron-custom hoverable" onclick="openCountryPopUp(2)">
                <div class="col-xs-10">
                    <p>UK</p>
                    <p> </p>
                </div>
            </div>
            <div class="col-md-3 col-xs-12 custom-offset-md-4 jumbotron jumbotron-custom hoverable" onclick="openCountryPopUp(3)">
                <div class="col-xs-10">
                    <p>Australia</p>
                    <p>​Australia is an energetic and exciting country providing an unmatched platform to students looking
					for international education and has the third highest number of foreign students in the world behind
					only the UK &amp; US. Preferring Australia to study lays out unique and delightful opportunities and
					experiences, and a whole different outlook of the world, not to mention substantial and progressive
					world-class education programs.</p>
                </div>
            </div>
        </div>
        <div class="row rowbase">
            <div class="col-md-4 col-xs-12 custom-md-4 jumbotron jumbotron-custom hoverable" onclick="openCountryPopUp(4)">
                <div class="col-xs-10">
                    <p>Canada</p>
                    <p>Canada is one of the world’s most popular destinations for international students, offering a diverse
					variety of experiences and opportunities in a country known for its vast expanses, multicultural cities
					and natural beauty. Every year, 180,000 international students choose to study in Canada, a country
					fast becoming India’s favourite study hub. Studying in Canada also brings with it many other benefits.
					Canadian university campuses are upgraded with the latest technology and modern amenities, quality
					sports facilities, art galleries, and public concert halls.</p>
                </div>
            </div>
            <div class="col-md-3 col-xs-12 custom-offset-md-4 jumbotron jumbotron-custom hoverable" onclick="openCountryPopUp(5)">
                <div class="col-xs-10">
                    <p>Singapore</p>
                    <p> </p>
                </div>
            </div>
            <div class="col-md-3 col-xs-12 custom-offset-md-4 jumbotron jumbotron-custom hoverable" onclick="openCountryPopUp(6)">
                <div class="col-xs-10">
                    <p>New Zealand</p>
                    <p> </p>
                </div>
            </div>
        </div>
        <div class="row rowbase">
            <div class="col-md-4 col-xs-12 custom-md-4 jumbotron jumbotron-custom hoverable" onclick="openCountryPopUp(7)">
                <div class="col-xs-10">
                    <p>Switzerland</p>
                    <p> </p>
                </div>
            </div>
            <div class="col-md-3 col-xs-12 custom-offset-md-4 jumbotron jumbotron-custom hoverable" onclick="openCountryPopUp(8)">
                <div class="col-xs-10">
                    <p>Ireland</p>
                    <p> </p>
                </div>
            </div>
            <div class="col-md-3 col-xs-12 custom-offset-md-4 jumbotron jumbotron-custom hoverable" onclick="openCountryPopUp(9)">
                <div class="col-xs-10">
                    <p>Germany</p>
                    <p>Germany officially the Federal Republic of Germany is in Western Europe with Denmark bordering it to the
					North, Poland and the Czech Republic to the East, Austria to the Southeast, Switzerland to the Southwest,
					France, Luxembourg and Belgium lie to the West and the Netherlands to the Northwest. It includes
					16 constituent states with a largely temperate seasonal climate. Its capital and largest city is Berlin. With
					81 million inhabitants, Germany is the most populous member state in the European Union.</p>
                </div>
            </div>
        </div>
        <div class="row rowbase">
            <div class="col-md-4 col-xs-12 custom-md-4 jumbotron jumbotron-custom hoverable" onclick="openCountryPopUp(10)">
                <div class="col-xs-10">
                    <p>Cyprus</p>
                    <p> </p>
                </div>
            </div>
            <div class="col-md-3 col-xs-12 custom-offset-md-4 jumbotron jumbotron-custom hoverable" onclick="openCountryPopUp(11)">

                <div class="col-xs-10">
                    <p>France</p>
                    <p>France officially the French Republic is a sovereign state comprising territory in Western Europe. It has a total
					population of 67 million and it is a unitary semi-presidential republic with its capital in Paris, the country&#39;s
					largest city and main cultural and commercial centre. The Constitution of France establishes the state
					as secular and democratic with its sovereignty derived from the people. Throughout its long history France has
					been a leading global center of culture making significant contributions to art, science, and philosophy. It hosts
					Europe&#39;s third-largest number of cultural UNESCO World Heritage Sites (after Italy and Spain) and receives
					around 83 million foreign tourists annually, the most of any country in the world.</p>
                </div>
            </div>
            <div class="col-md-3 col-xs-12 custom-offset-md-4 jumbotron jumbotron-custom hoverable" onclick="openCountryPopUp(12)">
                <div class="col-xs-10">
                    <p>Malaysia</p>
                    <p> </p>
                </div>
            </div>
        </div>
        <div class="row rowbase">
            <div class="col-md-4 col-xs-12 custom-md-4 jumbotron jumbotron-custom hoverable" onclick="openCountryPopUp(13)">
                <div class="col-xs-10">
                    <p>Italy</p>
                    <p> </p>
                </div>
            </div>
            <div class="col-md-3 col-xs-12 custom-offset-md-4 jumbotron jumbotron-custom hoverable" onclick="openCountryPopUp(14)">
                <div class="col-xs-10">
                    <p>Dubai</p>
                    <p> </p>
                </div>
            </div>
            <div class="col-md-3 col-xs-12 custom-offset-md-4 jumbotron jumbotron-custom hoverable" onclick="openCountryPopUp(15)">
                <div class="col-xs-10">
                    <p>Sweden</p>
                    <p> </p>
                </div>
            </div>
        </div>
        <div class="row rowbase">
            <div class="col-md-4 col-xs-12 custom-md-4 jumbotron jumbotron-custom hoverable" onclick="openCountryPopUp(16)">
                <div class="col-xs-10">
                    <p>Spain</p>
                    <p> </p>
                </div>
            </div>
            <div class="col-md-3 col-xs-12 custom-offset-md-4 jumbotron jumbotron-custom hoverable" onclick="openCountryPopUp(17)">
                <div class="col-xs-10">
                    <p>Lithuania</p>
                    <p> </p>
                </div>
            </div>
            <div class="col-md-3 col-xs-12 custom-offset-md-4 jumbotron jumbotron-custom hoverable" onclick="openCountryPopUp(18)">
                <div class="col-xs-10">
                    <p>Poland</p>
                    <p>Poland officially the Republic of Poland is a country in Central Europe bordered by Germany to the West, the Czech Republic and Slovakia to the South, Ukraine and Belarus to the East and the Baltic Sea and Lithuania to the North. It is the 71st largest country in the world and the 9th largest in Europe. With a population of over 38.5 million people, Poland is the 34th most populous country in the world. Poland is a unitary state divided into 16 administrative subdivisions. Poland is considered to be a high-income economy. Poland is a peaceful country with a climate which is mostly temperate.</p>
                </div>
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

    var myImage = $('#preload');
    //check if the image is already on cache
    if(myImage.prop('complete')) {
        myImage.delay(3000).fadeOut(2000);

    } else {
        /* Call the codes/function after the image is loaded */
        myImage.on('load',function() {
            myImage.delay(3000).fadeOut(2000);
        });
    }
</script>
</body>
</html>
