document.addEventListener("DOMContentLoaded", () => {
    let curtain = document.getElementById("curtain");
    let video = document.getElementById("video");
    let error = document.getElementById("error");
    let mediaDevices = navigator.mediaDevices;
    video.muted = true;
    curtain.addEventListener("click", () => {

        mediaDevices
            .getUserMedia({
                video: true,
                audio: true,
            })
            .then((stream) => {
                video.srcObject = stream;
                video.addEventListener("loadedmetadata", () => {
                    video.play();
                });
                video.classList.add('active')
                error.classList.remove('active')
            })
            .catch(err => {
                video.classList.remove('active')
                error.classList.add('active')
            });
    });
});