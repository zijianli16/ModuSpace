let externalScriptsLib = [
    //babylon.js external scripts
    "https://cdn.babylonjs.com/babylon.js",
    "https://cdn.babylonjs.com/loaders/babylonjs.loaders.min.js",
    //For touch events in Babylon.js PEP is required
    "https://code.jquery.com/pep/0.4.3/pep.js",
    //jQuery external scripts
    "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js",
    //srollama.js external scripts
    "https://unpkg.com/scrollama"
]

function attachExternalScriptsLib() 
{
    for (var js of externalScriptsLib) {
        document.write('<script src="' + js +'"></script>');
    }
}

attachExternalScriptsLib();

