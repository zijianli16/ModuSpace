//import room-scale, scene 3D model, load local GLTF model
export function importLocalGLTFModelRoomscale(scene) {
    new BABYLON.SceneLoader.ImportMesh('', 'models/', 'baganTemple.gltf', scene, (meshes) => {
        //scaling, postioning and rotating gltf model
        meshes.forEach((mesh) => {
            mesh.scaling = new BABYLON.Vector3(1, 1, 1);
            mesh.position = new BABYLON.Vector3.Zero();
            mesh.rotation = new BABYLON.Vector3(0, 0, 0);
            mesh.checkCollisions = true;

            //play animations
            scene.animationGroups[1].start(true);
            //scene.animationGroups[2].start(true);
        })
    })

}


//import landscape model, load local GLTF model
export function importLocalGLTFModelLandscape (scene) {
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