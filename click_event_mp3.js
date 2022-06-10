
document.addEventListener("DOMContentLoaded", function() {
  const sceneEl = document.querySelector('a-scene');
  const arSystem = sceneEl.systems["mindar-image-system"];
  
  //Ballon
  const BallonTarget = document.getElementById("ballon-target");
  const ballon_video = document.getElementById("ballon_vid");
  const confetti_model = document.getElementById("confetti_model");
  ballon_video.paused = !ballon_video.paused;
  var clicked = new Boolean(false);


  BallonTarget.addEventListener("targetFound", event => {
    console.log("lovers found");
    confetti_model.setAttribute('animation-mixer', {
      clip: 'null'
    })
    ballon_video.currentTime = 0;
    ballon_video.pause();
    ballon_video.muted = !ballon_video.muted;


    BallonTarget.addEventListener("click", e => {

      ballon_video.play();
      confetti_model.setAttribute('animation-mixer', {
        clip: '*'
      })

    });
  });
  // detect target lost
  BallonTarget.addEventListener("targetLost", event => {

    ballon_video.pause();
    confetti_model.setAttribute('animation-mixer', {
      clip: 'null'
    })
    ballon_video.muted = !ballon_video.muted;

  });
  
  //lovers
  const LoversTarget = document.getElementById("lovers-target");
  const lovers_video = document.getElementById("lovers_vid");
  lovers_video.paused = !lovers_video.paused;

  LoversTarget.addEventListener("targetFound", event => {
    console.log("lovers found");
    lovers_video.currentTime = 0;
    lovers_video.pause();

    LoversTarget.addEventListener("click", e => {

      lovers_video.muted = !lovers_video.muted;
      lovers_video.play();


    });
  });
  // detect target lost
  LoversTarget.addEventListener("targetLost", event => {

    lovers_video.muted = !lovers_video.muted;
    lovers_video.pause();
  });
  
  //Dancebear
  const DanceTarget = document.getElementById("dance-target");
  const dance_video = document.getElementById("dancebear_vid");
  dance_video.paused = !dance_video.paused;
  
 
});