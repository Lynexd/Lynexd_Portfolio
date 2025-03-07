document.getElementById('top-left-button').addEventListener('click', function () {
    var video = document.getElementById('video');
    var icon = this.querySelector('i');

    if (video.muted) {
        video.muted = false;
        icon.classList.remove('bi-volume-up-fill');
        icon.classList.add('bi-volume-mute-fill');
    } else {
        video.muted = true;
        icon.classList.remove('bi-volume-mute-fill');
        icon.classList.add('bi-volume-up-fill');
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("video");
    video.volume = 0.2; // Arka Videonun Ses Seviyesi ( Sağır Olmamak İçin 0.2 - 0.1 İdeal )
    document.getElementById('card').style.display = 'block';
});
document.addEventListener("DOMContentLoaded", function () {
    let video = document.getElementById("video");
    video.play().catch(error => {
        console.error("[ Lynexd Inc ] Otomatik Video Oynatılma Engellendi.", error);
    });
});
