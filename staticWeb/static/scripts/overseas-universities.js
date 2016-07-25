/**
 * Created by Dhanendra on 24/7/16.
 */

var countryName = {1:"USA", 2:"UK", 3:"Australia", 4:"Canada", 5:"Singapore", 6:"New Zealand", 7:"Switzerland", 8:"Ireland", 9:"Germany", 10:"Cyprus", 11:"France", 12:"Malaysia", 13:"Italy", 14:"Dubai", 15:"Sweden", 16:"Spain", 17:"Lithuania"};

var countryDescription = {1:"This country is very good with nice study environment",
    2:"This country is very good with nice study environment",
    3:"This country is very good with nice study environment",
    4:"This country is very good with nice study environment",
    5:"This country is very good with nice study environment",
    6:"This country is very good with nice study environment",
    7:"This country is very good with nice study environment",
    8:"This country is very good with nice study environment",
    9:"This country is very good with nice study environment",
    10:"This country is very good with nice study environment",
    11:"This country is very good with nice study environment",
    12:"This country is very good with nice study environment",
    13:"This country is very good with nice study environment",
    14:"This country is very good with nice study environment",
    15:"This country is very good with nice study environment",
    16:"This country is very good with nice study environment",
    17:"This country is very good with nice study environment"};

var countryUniversity = {1:["Oregon State University, Corvallis, Oregon. ‐ (Tier I Research University)","Colorado State University, Fort Collins, Colorado (Tier I Research University)","University of South Florida, Tampa, Florida ‐ (‐Tier I Research University)","George Mason University, Virginia","Ohio University, Athens, Ohio. (Only UG)","University of Tennessee, Knoxville.","University of Idaho","Kent State University, Kent, Ohio.","Montana State University","Montana State University","Wright State University, Dayton, Ohio","Wichita State University, Wichita, Kansas","University of New Mexico‐ Albuquerque, New Mexico","University of Nevada, Reno","Tennessee Tech University, Tennessee (TTU).","Florida International University, Miami, Florida – All UG Program and Graduate Chapman School of Business","Midwestern State University, Wichita Fall, Texas","Texas A & M University ‐ Corpus Christi","Southeast Missouri State University, Cape Girardeau, Missouri.","California State University, East Bay","California State University, Fresno","California Lutheran University.","Slippery Rock University of Pennsylvania‐ Slippery Rock","Pittsburg State University, Pittsburg Kansas","Northwest Missouri State University, Maryville, Missouri.","University of New Haven, Connecticut.","University of Bridgeport, Bridgeport, Connecticut.","Murray State University, Kentucky.","New York Institute of Technology, New York","University of Wisconsin‐Eau Claire.","Northern Arizona University","Hult International Business School","National University‐ San Diego, California","SUNY‐ Brockport","University of Mary Hardin‐Baylor, Belton, Texas","Mississippi College, Clinton, Mississippi.","Marshall University Huntington, West Virginia","Troy University, Troy, Alabama","Northwestern Polytechnic University, Fremont, California.","Oklahoma City University , OK (OCU)","Dallas Baptist University, Dallas, Texas","The University of Findlay, Findlay, Ohio","Southern New Hampshire University, Manchester, New Hampshire.","University of California Extension Riverside, California.","New York Film Academy","California Flight Center.","Monroe College, New York","Dowling College, Oakdale, New York","Academy of Art University, San Francisco, CA","Upper Iowa University, Fayette, Iowa","City University of Seattle, Seattle, Washington","Stevens Henager College, Utah","Lawrence Technological University","Golden Gate University","University of Cincinnati","University of North Texas"],
    2:"This country is very good with nice study environment",
    3:"This country is very good with nice study environment",
    4:"This country is very good with nice study environment",
    5:"This country is very good with nice study environment",
    6:"This country is very good with nice study environment",
    7:"This country is very good with nice study environment",
    8:"This country is very good with nice study environment",
    9:"This country is very good with nice study environment",
    10:"This country is very good with nice study environment",
    11:"This country is very good with nice study environment",
    12:"This country is very good with nice study environment",
    13:"This country is very good with nice study environment",
    14:"This country is very good with nice study environment",
    15:"This country is very good with nice study environment",
    16:"This country is very good with nice study environment",
    17:"This country is very good with nice study environment"};

function openCountryPopUp(country) {
    $('#popme').bPopup({
        closeClass: 'close'
    });

    $("#country-name").html(countryName[country]);
    $("#country-description").html(countryDescription[country]);
    $("#university-list").html(getUniversityText(country));
}

function getUniversityText(country) {
    var resultText = "";
    countryUniversity[country].forEach(function(item, index) {
        resultText +="<li>"+item+"</li>"
    });
    return resultText;
}
