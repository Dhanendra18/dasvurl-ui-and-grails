function openWin() {
    myWindow = window.open("googlelocationmap.html", "myWindow", "width=200, height=100");    // Opens a new window
}

function closeWin() {
    myWindow.close();                                                  // Closes the new window
}
$(document).ready(function() {
$('button=.location').click(function() {
	window.open("googlelocationmap.html", "popupWindow", "width=600,height=600,scrollbars=yes");
});
});