// Crunchyroll Picture-in-Picture Enabler - NebulaDev

function enable() {
    document.querySelectorAll('video').forEach(video => { // Could also just target #player0 I believe.
        video.removeAttribute('disablepictureinpicture');
    });
}

enable();
// Just in case it loads after the page does, and to ensure it's always removed.
setInterval(enable, 1000);
