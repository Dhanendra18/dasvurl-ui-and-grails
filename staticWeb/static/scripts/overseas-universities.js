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
    2:["University of Surrey, Surrey.","University of Leicester, Leicester.","University of Birmingham, Birmingham.","Heriot Watt University, Edinburg.","University of Glasgow, Glasgow.","Newcastle University, Newcastle upon Tyne.","Queen Mary, University of London, London.","University of Liverpool, Liverpool.","Queen's University Belfast, Belfast.","Coventry University, Coventry.","Oxford Brookes University, Oxford.","INTO City University, London. ( Except Business School and Law School)","University of Huddersfield, Huddersfield.","University of Chester, Chester.","The University of Northampton, Northampton.","University of Lincoln, Lincoln.","University of Stirling, Stirling.","Northumbria University, Newcastle.","University of Plymouth, Devon.","De Montfort University","Birmingham City University, Birmingham.","University of Essex, Colchester.","University of Sunderland, Sunderland.","University of Greenwich, London.","Sheffield Hallam University, Sheffield.","Bangor University, Bangor.","University of Teesside, Tees Valley.","University of South Wales (formerly known as University ofGlamorgan), Pontypridd.","Angila Ruskin University","University of West of Scotland","INTO Gloucestershire, Gloucestershire.","Queen Margaret University, Edinburgh, Scotland.","University of West London, London.","Edinburgh Napier University, Edinburgh, Scotland.","University of Central Lancashire, Preston.","University of Bradford, Bradford.","University of Staffordshire, Stoke‐on‐Trent.","Glasgow Caledonian University, Glasgow, Scotland.","INTO Manchester Metropolitan University, Manchester.","York St. John University, York.","University of Ulster (Birmingham and London Campus Only).","University of Westminster, London.","Roehampton University, London.","Middlesex University, London.","Cardiff Metropolitan University, Cardiff.","University of Bedfordshire, Luton.","London South Bank University, London.","London Metropolitan University, London.","University of East London, London.","Liverpool Hope University, Liverpool.","University of Wolverhampton, Wolverhampton.","University College Birmingham, Birmingham.","Le Cordon Blue, London INTO Partnership Universities.","INTO University of East Anglia.","INTO University of Exeter.","INTO Newcastle University.","INTO University of Manchester.","INTO Glasgow Caledonian University."],
    3:["Queensland University of Technology (CRICOS Code 00213J)","Griffith University ( CRICOS Code 00233E)","University of South Australia (CRICOS Code 00121B)","Swinburne University of Technology (CRICOS Code 00111D)","James Cook University, Brisbane (CRICOS Code 00117J)","University of Tasmania (CRICOS Code 00586B)","University of Canberra (CRICOS Code 00212K)","Edith Cowan University (CRICOS Code 00279B)","Federation University (CRICOS Code VIC 00103D)","Central Queensland University (CRICOS Code ‐ 00219C)","Southern Cross University Sydney Educo Global (CRICOS Code NSW 01241G)","Latrobe University Sydney Campus (CRICOS Code NSW 02218K)","Curtin University Sydney Campus (CRICOS Code NSW 02637B)","Macquarie University City Campus (CRICOS Code 00002J)","Charles Darwin University, Melbourne (CRICOS Code 00300K (VIC))","University of Southern Queensland Education Centre (Sydney) (NSW) 02225M","Charles Sturt University Study Centre (Sydney & Melbourne) (00005F (NSW),01947G (VIC) and 02960B (ACT)","Charles Sturt University, Wagga Wagga Campus (00005F (NSW)","University of Sunshine Coast, Australia (01595D)"],
    4:["Dalhousie University, Halifax, Nova Scotia (M.Engg in Internetworking only)","Thompson Rivers University, Kamloops, British Columbia","Royal Roads University, Victoria, British Columbia","Fairleigh Dickinson University, Vancouver, British Columbia","Simon Fraser University through Fraser International College, Burnaby, British","University of Manitoba through International College of Manitoba, Winnipeg, Manitoba.","Vancouver Island University, Nanaimo, British Columbia","MacEwan University, Edmonton, Alberta.","NYIT, Vancouver, British Columbia","King’s University College, London, Ontario.","Cape Breton University, Sydney, Nova Scotia","Capilano University, North Vancouver, British Columbia","Alexander College, Vancouver, British Columbia.","Canadore College, North Bay, Ontario","Seneca College, Toronto, Ontario","George Brown College, Toronto, Ontario","Confederation College, Thunder Bay, Ontario","Fanshawe College, London, Ontario","Cambrian College, Sudbury, Ontario","St. Clair College, Windsor, Ontario","Sheridan College, Oakville, Ontario.","Niagara College, Welland, Ontario.","Kwantlen Polytechnic University, Surrey, British Columbia","Georgian College, Barrie, Ontario","Camosun College, Victoria, British Columbia","Northern Lights College, Dawson Creek, British Columbia.","Conestoga College, Kitchener, Ontario","Algonquin College, Ottawa, Ontario.","St. Lawrence College, Brockville, Ontario.","Selkirk College, Castlegar, British Columbia.","Douglas College, Vancouver, British Columbia.","Parkland College, Yorkton, Saskatchewan","Le Cordon Bleu, Ottawa, Ontario"],
    5:["James Cook University (JCU)","Management Development Institute of Singapore","Raffles College of Higher Education","Kaplan Higher Education Academy","Nanyang Institute of Management","East Asia Institute of Management (EASB)","SIM Global Education","American Center of Education.","S P Jain School of Global Management – Dubai, Singapore & Sydney"],
    6:["This country is very good with nice study environment"],
    7:["This country is very good with nice study environment"],
    8:["This country is very good with nice study environment"],
    9:["This country is very good with nice study environment"],
    10:["This country is very good with nice study environment"],
    11:["IDCE","ISUGA","ESLSCA","EPITA","EM Nantes","ISEP","ESC Rennes","ESC La Rochelle","ISC Paris","ESC Dijon","IPAG","SKEMA","France Business School","ESC Troyes","VATEL","Kedge","INSEEC","EMLYON","MOD Art","ESC Grenoble","Negocia","EM Normandie","EM Strasbourge","ESC La Rochelle","ESC Troyes","ESC Toulouse","Neoma","EM Normandie","Audencia Nantes","Eisti","INSEEC","Le Cordon Bleu"],
    12:["SEGi University (5 campus)","Manipal International University.","Heriot‐Watt University (Malaysia Campus)","Sunway Le Cordon Bleu (Renowned hospitality school)"],
    13:["SCUOLA POLITECNICA DI DESIGN SPD, Milan"],
    14:["Heriot‐Watt University","Middlesex University, UK (Dubai Campus)"],
    15:["Jonkoping University","Kristianstad University"],
    16:["UCAM International"],
    17:["Aleksandras Stulginskis University"]};

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
