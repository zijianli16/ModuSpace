//import room-scale, scene 3D model, load local GLTF model
export function importLocalGLTFModelRoomscale(scene) {
    new BABYLON.SceneLoader.ImportMesh('', 'models/', 'baganTemple.gltf', scene, () => {

        document.getElementById("loadingScreen02").style.display = "none";
        console.log("loadingScreen02 has been excicuted");

        //scaling, postioning and rotating gltf model
        meshes.forEach((mesh) => {
            mesh.scaling = new BABYLON.Vector3(1, 1, 1);
            mesh.position = new BABYLON.Vector3.Zero();
            mesh.rotation = new BABYLON.Vector3(0, 0, 0);
            mesh.checkCollisions = true;

            //play animations
            scene.animationGroups[1].start(true);
            //scene.animationGroups[2].start(true);

            //engine.hideLoadingUI(scene);
        })

    })

}


//import landscape model, load local GLTF model
export function importLocalGLTFModelLandscape(scene) {
    new BABYLON.SceneLoader.ImportMesh('', 'models/', 'baganLandscape.glb', scene, (meshes) => {
        //scaling, postioning and rotating gltf model
        meshes.forEach((mesh) => {
            mesh.scaling = new BABYLON.Vector3(5, 5, 5);
            mesh.position = new BABYLON.Vector3.Zero();
            mesh.rotation = new BABYLON.Vector3(0, 0, 0);
            mesh.checkCollisions = true;

            //play animations
            scene.animationGroups[1].start(true);
            //scene.animationGroups[2].start(true);

            // meshes[0].optimizeIndices(function () {
            //     meshes[0].simplify([{ distance: 25, quality: 0.8 }, { distance: 30, quality: 0.5 }, { distance: 40, quality: 0.3 }, { distance: 500, quality: 0.1 }], false, BABYLON.SimplificationType.QUADRATIC, function () {
            //         alert("simplification finished");
            //     });
            // })
        })
    })

}

//load online GLTF model
export function importOnlineGLTFModel(scene) {
    new BABYLON.SceneLoader.ImportMesh('', 'https://alexli016.github.io/stemCell_intro/', 'StemCel_ani.gltf', scene, (meshes) => {
        //scaling, postioning and rotating gltf model
        meshes.forEach((mesh) => {
            mesh.scaling = new BABYLON.Vector3(2, 2, 2);
            mesh.position = new BABYLON.Vector3.Zero();
            mesh.rotation = new BABYLON.Vector3(0, 0, 0);

            mesh.checkCollisions = true;
            //play animations
            scene.animationGroups[1].start(true);
            scene.animationGroups[2].start(true);
        })
    })

}