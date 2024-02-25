function openNav() {
    document.getElementById("sideMenu").style.width = "250px";
    document.getElementById("sideMenu").style.transition = "0.5s";
    var navVideo = document.getElementById('navVideo');
    navVideo.classList.remove('hide-video');
    setTimeout(function() {
        navVideo.classList.add('hide-video');
    }, 1000);
}
function closeNav() {
    document.getElementById("sideMenu").style.width = "0";
}


