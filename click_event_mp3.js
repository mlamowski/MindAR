
document.addEventListener("DOMContentLoaded", function() {
  const sceneEl = document.querySelector('a-scene');
  const arSystem = sceneEl.systems["mindar-image-system"];
  const myTarget = document.getElementById("example-target");
  var myBallon = myTarget.children[0];

  const myTarget2 = document.getElementById("example-target2");
  var lovers = myTarget2.children[0];
  var gltfmodel = myTarget2.children[1];


  const myTarget3 = document.getElementById("example-target3");
  var dancebear = myTarget3.children[0];

  const video = document.getElementById("lovers_vid");
  video.paused = !video.paused;

  console.log("video tags" + video);
  console.log("video paused:" +  video.paused);


  /*
  myTarget.addEventListener("targetFound", event => {
    console.log("ballon found");

    myTarget.addEventListener("click", e => {

      console.log("lovers clicked");

      myBallon.removeAttribute('material');
      myBallon.setAttribute('material', {
        shader: "gif",
        autoplay: "true",
        src: '#ballon'
      });
      myBallon.play();

    });

  });
  // detect target lost
  myTarget.addEventListener("targetLost", event => {
    console.log("ballon lost");
  });

  */
  //FUNKTIONIERT!!

  myTarget2.addEventListener("targetFound", event => {
    console.log("lovers found");

    gltfmodel.setAttribute('animation-mixer', {
      clip: 'null'
    })

    video.pause();
    console.log(video);
    video.currentTime = 0;
    console.log(video.currentTime);


    myTarget2.addEventListener("click", e => {

      video.muted = !video.muted;

      video.play();
      gltfmodel.setAttribute('animation-mixer', {
        clip: '*'
      })
      console.log(gltfmodel.getAttribute('animation-mixer'));


    });
  });
  // detect target lost
  myTarget2.addEventListener("targetLost", event => {

    video.muted = !video.muted;
    console.log(video.currentTime);
    video.pause();
  });

  /*
  myTarget3.addEventListener("targetFound", event => {
    console.log("ballon found");

    myTarget3.addEventListener("click", e => {

      console.log("lovers clicked");

      dancebear.removeAttribute('material');
      dancebear.setAttribute('material', {
        shader: "gif",
        autoplay: "true",
        src: '#dancebaer'
      });
      dancebear.play();

    });

  });
  // detect target lost
  myTarget3.addEventListener("targetLost", event => {
    console.log("ballon lost");
  });

   */
});



/*
// clickable
AFRAME.registerComponent("play-on-click", {

  //Iwie geht bei einem klick alles an?

  init: function() {
    var clicked = new Boolean(false);
    var el = this.el;

    console.log("clicked ist " + clicked);
    console.log("halloooo");

    document.body.addEventListener("click", e => {

      console.log("halloooo 2");


      console.log("clicked ist " + clicked);

      el.setAttribute('material', {
        shader: "gif",
        autoplay: "true"
      });
      clicked = true;
      el.play();

      console.log("clicked ist " + clicked);

    });
    document.body.addEventListener("targetFound", e => {

      console.log("halloooo 3");

      console.log("detected!");
      if(clicked == true) {

        el.play();
      }

    });
    document.body.addEventListener("targetLost", e => {
      console.log("target lost!");
      console.log("halloooo 4");

      el.pause();

    });
  }
});
*/