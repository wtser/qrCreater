import kjua from "kjua";

chrome.tabs.getSelected(null, function(tab) {
  const $qr = document.getElementById("qr"),
    $qrFav = document.getElementById("qr_fav"),
    $qrFavImg = document.getElementById("qr_fav_img"),
    $qrInput = document.getElementById("qrInput");
  $qr.innerHTML = "";
  $qrInput.value = tab.url;
  $qr.appendChild(kjua({ text: tab.url, size: 240 }));

  if (tab.favIconUrl && tab.favIconUrl.substr(0, 4) == "http") {
    $qrFavImg.src = tab.favIconUrl;
    $qrFav.style.display = "block";
  }

  $qrInput.onclick = e => {
    e.target.select();
  };
});
