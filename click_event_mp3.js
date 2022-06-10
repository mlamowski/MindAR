
document.addEventListener("DOMContentLoaded", function() {
  const sceneEl = document.querySelector('a-scene');
  const arSystem = sceneEl.systems["mindar-image-system"];
  
  //Ballon
  const ballonTarget = document.getElementById("ballon-target");
  const ballon_video = document.getElementById("ballon_vid");
  const confetti_model = document.getElementById("confetti_model");
  ballon_video.paused = !ballon_video.paused;

  ballonTarget.addEventListener("targetFound", event => {
    console.log("lovers found");
    confetti_model.setAttribute('animation-mixer', {
      clip: 'null'
    })
    ballon_video.currentTime = 0;
    ballon_video.pause();
    ballon_video.muted = !ballon_video.muted;


    ballonTarget.addEventListener("click", e => {

      ballon_video.play();
      confetti_model.setAttribute('animation-mixer', {
        clip: '*'
      })

    });
  });
  // detect target lost
  ballonTarget.addEventListener("targetLost", event => {

    ballon_video.pause();
    confetti_model.setAttribute('animation-mixer', {
      clip: 'null'
    })
    ballon_video.muted = !ballon_video.muted;

  });
  
  //lovers
  const loversTarget = document.getElementById("lovers-target");
  const lovers_video = document.getElementById("lovers_vid");
  //Herzen gltf
  lovers_video.paused = !lovers_video.paused;

  loversTarget.addEventListener("targetFound", event => {
    lovers_video.currentTime = 0;
    lovers_video.pause();
    lovers_video.muted = !ballon_video.muted;

    loversTarget.addEventListener("click", e => {
      lovers_video.play();

    });
  });
  // detect target lost
  loversTarget.addEventListener("targetLost", event => {

    lovers_video.muted = !lovers_video.muted;
    lovers_video.pause();
  });
  
  //Dancebear
  const danceTarget = document.getElementById("dance-target");
  const dance_video = document.getElementById("dancebear_vid");
  //Musiknoten gltf
  dance_video.paused = !dance_video.paused;

  danceTarget.addEventListener("targetFound", event => {
    dance_video.currentTime = 0;
    dance_video.pause();
    dance_video.muted = !dance_video.muted;

    danceTarget.addEventListener("click", e => {
      dance_video.play();

    });
  });
  // detect target lost
  danceTarget.addEventListener("targetLost", event => {
    dance_video.muted = !dance_video.muted;
    dance_video.pause();
  });
  
});