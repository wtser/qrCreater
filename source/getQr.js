chrome.tabs.getSelected(null, function (tab) {
    //var url = googleApi + encodeURIComponent(tab.url);
    $('#qr').html('');
    jQuery('#qr').qrcode({
        text  : tab.url,
        width : 200,
        height: 200
    });

    if (tab.favIconUrl) {
        if ((tab.favIconUrl).substr(0, 4) == "http") {
            document.getElementById("qr_fav").src = tab.favIconUrl;
            document.getElementById("qr_fav").style.display = "block";
        }
    }
});
	
