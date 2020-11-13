let externalScriptsLib = [
    //babylon.js external scripts
    "https://cdn.babylonjs.com/babylon.js",
    "https://cdn.babylonjs.com/loaders/babylonjs.loaders.min.js",
    //For touch events in Babylon.js PEP is required
    "https://code.jquery.com/pep/0.4.3/pep.js",
    //jQuery external scripts
    "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js",
    //srollama.js external scripts
    "https://unpkg.com/scrollama",
    //scrollmagic.js external scripts
    "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.js",
    "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.js",
    "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.js",
    // //Google <model-viewer>
    // "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js",
    // "https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"
]

function attachExternalScriptsLib() {
    for (var js of externalScriptsLib) {
        document.write('<script src="' + js +'"></script>');
    }
}

attachExternalScriptsLib();
