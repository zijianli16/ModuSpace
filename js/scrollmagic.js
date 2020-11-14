//import type auto completion file
///<reference path='babylon.d.ts' />

let value;

var canvas = document.getElementById("canvas");
var engine = new BABYLON.Engine(canvas, true);

var createScene = function (canvas, engine) {
    var scene = new BABYLON.Scene(engine);

    // engine.displayLoadingUI(scene);

    //scene background color
    scene.clearColor = new BABYLON.Color3.FromHexString('#000000');

    createHemisphericLight(scene);

    blenderCameraAnimation(scene);

    //----------Aboves are basic setup---------------

    //debug(scene);

    return scene;
}

//pass local scene to global scene
const scene = createScene(canvas, engine);

engine.runRenderLoop(function () {
    scene.render();
});

window.addEventListener("resize", function () {
    engine.resize();
});

//****************************************BASIC SETUP IS ABOVE ***********************************/
//****************************************BASIC SETUP IS ABOVE ***********************************/
//****************************************BASIC SETUP IS ABOVE ***********************************/


//***************************************Set Lighting************************************** */
//***************************************Set Lighting************************************** */
function createHemisphericLight(scene) {
    const hemisphericLight = new BABYLON.HemisphericLight('hemisphericLight', BABYLON.Vector3(1, 5, 1), scene);

    //adjust light intensity
    hemisphericLight.intensity = 6;
    hemisphericLight.groundColor = new BABYLON.Color3.FromHexString('#ffffff');
}
//***************************************Set Lighting************************************** */
//***************************************Set Lighting************************************** */

function blenderCameraAnimation(scene) {
    //creating a skybox
    scene.clearColor = new BABYLON.Color3.FromHexString('#ffffff');

    // This creates and positions a free camera (non-mesh) requried, and position does not matter 
    var camera_not_in_use = new BABYLON.FreeCamera("camera_not_in_use", new BABYLON.Vector3(0, 100, 0), scene);

    new BABYLON.SceneLoader.ImportMesh('', 'models/', 'GreatWallWholeView.gltf', scene, () => {
        //scene.createDefaultCameraOrLight(true, true, true)
        console.log("scene =" + scene);

        let camera_active = scene.getCameraByName("blenderCamera")
        scene.activeCamera = camera_active

        let cameraAnimation = scene.getAnimationGroupByName("Action");
        //stop animation loop
        cameraAnimation.play(false);
        //animatio play speed
        //cameraAnimation.speedRatio = 2;
        cameraAnimation.goToFrame(0);
        cameraAnimation.pause();

        document.getElementById("loadingScreen").style.display = "none";

        setInterval(() => {
            cameraAnimation.goToFrame(value);
        }, 1000 / 24);
    })
}

//Debug: show Scene Explore and Inspector
function debug(scene) {
    //Debug: show Scene Explore and Inspector
    scene.debugLayer.show();
}

//==============================Scrollmagic code are below================================
//==============================Scrollmagic code are below================================
//==============================Scrollmagic code are below================================

//=========================Allow Video to Play Only When Video Has Reached the Top========================
var shouldVideoStart = false;
var videoDistanceFromTop = $('#babylonContainer01').offset().top;

$(window).on('scroll', function () {
    var scrollFromTop = $(window).scrollTop();
    var currentVidDistanceFromTop = ($('#babylonContainer01').offset().top - scrollFromTop);
    if (currentVidDistanceFromTop <= 0) {
        shouldVideoStart = true;
    }
    else {
        shouldVideoStart = false;
    }
});
//=========================Allow Video to Play Only When Video Has Reached the Top ========================

//init scroll magic controller
let controller = new ScrollMagic.Controller();

//creating video animation

//========================Input Your Customized Value Below =====================

let videoDuration = 12.5;
//how long is the video? i.e 14 means that video is 14 seconds long. 
let videoFrameRate = 24;
//what is the video frame rate? i.e: 25fps/30fps
let yOffsetToVidTimeRate = 1000;
//how long do you want the scroll to be? The bigger the number, the longer the scroll. Defaul as 1000 recommended. 
let acceleration = 0.2;
//how do you want the momentum to be? The smaller the number, the stronger the momentum. 
//======================Input Your Customized Value Above ========================

//======================Video Section ========================
let videoDurationInPx = videoDuration * yOffsetToVidTimeRate;
let windowHeight = window.innerHeight;
document.getElementById("contentContainer").style.height = videoDurationInPx + windowHeight;

let midVideoTime = 0;
let targetVideoTime = 0;

//build the video scene
let videoScene = new ScrollMagic.Scene({
    triggerHook: 0,
    triggerElement: "#videoSpacer",
    //must use a container to cover the video element
    offset: 0,
    duration: videoDurationInPx,
})
    .setPin("#babylonContainer01")
    .addTo(controller)
//.addIndicators({ name: "--- Video Scene" });

videoScene.on("update", e => {
    if (shouldVideoStart == true) {
        midVideoTime = (e.scrollPos - videoDistanceFromTop) / yOffsetToVidTimeRate;
    }
    //update is a predifined event by scroll magic, e.scrollPos: the current scroll position of the container, e.scrollPos == the amount of px away from top 
});

setInterval(() => {
    targetVideoTime += (midVideoTime - targetVideoTime) * acceleration;
    //targetVideoTime = targetVideoTime + (midVideoTime - targetVideoTime)* acceleration
    value = targetVideoTime;
    console.log("value = " + value);
    //console.log("video current time =" + targetVideoTime);
}, 1000 / videoFrameRate);
//======================Video Section ========================

//====================== START of Texts Section ========================

//------------------------OverlayText01---------------------
//set text01 mergining from bottom of viewport at 2 second
let text01TargetShowTime = 0.2;
let overlayText01DisFromTop = text01TargetShowTime * yOffsetToVidTimeRate + windowHeight * 0.5;
//videoCurrentTime *yOffsetToVideoTimeRate + TriggerHookRate (i.e 0.3) * windowHeight
document.getElementById("spacer0001").style.marginTop = overlayText01DisFromTop + "px";

//set text01 pin duration, i.e 800px or 0.8 second of video duration
let text01Stay = 600;

let text01Scene = new ScrollMagic.Scene({
    triggerHook: 0.5,
    triggerElement: "#trigger1",
    duration: text01Stay,
})
    .setPin("#pin1")
    .addTo(controller)
//.addIndicators({ name: "--- text01 Scene" });

//------------------------OverlayText01---------------------

//------------------------OverlayText02---------------------
//set text02 mergining from bottom of viewport at 4 second
let text02TargetShowTime = 2;
//set text02 pin duration, i.e 800px or 0.8 second of video duration
let text02Stay = 800;
document.getElementById("spacer0102").style.marginTop = (text02TargetShowTime - text01TargetShowTime) * yOffsetToVidTimeRate - text01Stay + "px"

let text02Scene = new ScrollMagic.Scene({
    triggerHook: 0.5,
    triggerElement: "#trigger2",
    duration: text02Stay,
})
    .setPin("#pin2")
    .addTo(controller)
//.addIndicators({ name: "--- text02 Scene" });
//------------------------OverlayText02---------------------

//------------------------OverlayText03---------------------
//set text03 mergining from bottom of viewport at 6 second
let text03TargetShowTime = 4.5;
//set text03 pin duration, i.e 1000px or 1 second of video duration
let text03Stay = 1000;
document.getElementById("spacer0203").style.marginTop = (text03TargetShowTime - text02TargetShowTime) * yOffsetToVidTimeRate - text02Stay + "px";

let text03Scene = new ScrollMagic.Scene({
    triggerHook: 0.5,
    triggerElement: "#trigger3",
    duration: text03Stay,
})
    .setPin("#pin3")
    .addTo(controller)
    //.addIndicators({ name: "--- text03 Scene" });
//------------------------OverlayText03---------------------

//------------------------OverlayText04---------------------
//set text04 mergining from bottom of viewport at 6 second
let text04TargetShowTime = 6.5;
//set text04 pin duration, i.e 1000px or 1 second of video duration
let text04Stay = 1000;
document.getElementById("spacer0304").style.marginTop = (text04TargetShowTime - text03TargetShowTime) * yOffsetToVidTimeRate - text03Stay + "px";

let text04Scene = new ScrollMagic.Scene({
    triggerHook: 0.5,
    triggerElement: "#trigger4",
    duration: text04Stay,
})
    .setPin("#pin4")
    .addTo(controller)
    //.addIndicators({ name: "--- text04 Scene" });
//------------------------OverlayText04---------------------

//------------------------OverlayText05---------------------
//set text05 mergining from bottom of viewport at 6 second
let text05TargetShowTime = 8.5;
//set text05 pin duration, i.e 1000px or 1 second of video duration
let text05Stay = 400;
document.getElementById("spacer0405").style.marginTop = (text05TargetShowTime - text04TargetShowTime) * yOffsetToVidTimeRate - text04Stay + "px";

let text05Scene = new ScrollMagic.Scene({
    triggerHook: 0.5,
    triggerElement: "#trigger5",
    duration: text05Stay,
})
    .setPin("#pin5")
    .addTo(controller)
    //.addIndicators({ name: "--- text04 Scene" });
//------------------------OverlayText05---------------------

//------------------------OverlayText06---------------------
//set text06 mergining from bottom of viewport at 6 second
let text06TargetShowTime = 9.5;
//set text05 pin duration, i.e 1000px or 1 second of video duration
let text06Stay = 800;
document.getElementById("spacer0506").style.marginTop = (text06TargetShowTime - text05TargetShowTime) * yOffsetToVidTimeRate - text05Stay + "px";

let text06Scene = new ScrollMagic.Scene({
    triggerHook: 0.5,
    triggerElement: "#trigger6",
    duration: text06Stay,
})
    .setPin("#pin6")
    .addTo(controller)
    //.addIndicators({ name: "--- text04 Scene" });
//------------------------OverlayText05---------------------



//======================Texts Section END========================