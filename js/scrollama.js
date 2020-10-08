//==========Adding scrollama.js below, this is used to trigger camera position movement animation==================
export function startScrollama(scene, universalCamera) {
    
    const scrollamaScene = scrollama();
    // setup the instance, pass callback functions

    scrollamaScene
        .setup({
            step: ".step",
            //debug: true,
            offset: 0
        })

        .onStepEnter(response => {
            // { element, index, direction }

            function changeCameraPosition01() {

                let newIndex = response.index;
                let direction = response.direction;

                if (newIndex == 0 && direction == 'down') {
                    scene.beginAnimation(universalCamera, 0, 30, true, 0.2);
                }
                else if (newIndex == 0 && direction == 'up') {
                    scene.beginAnimation(universalCamera, 30, 0, true, 0.2);
                }
                else if (newIndex == 1 && direction == "down") {
                    scene.beginAnimation(universalCamera, 30, 60, true, 0.2);
                }
                else if (newIndex == 1 && direction == "up") {
                    scene.beginAnimation(universalCamera, 60, 30, true, 0.2);
                }
                else if (newIndex == 2 && direction == "down") {
                    scene.beginAnimation(universalCamera, 60, 90, true, 0.2);
                }
                else if (newIndex == 2 && direction == "up") {
                    scene.beginAnimation(universalCamera, 90, 60, true, 0.2);
                }
            }

            changeCameraPosition01();

            console.log("Entered");
            console.log(response.index);
            console.log(response.direction);

        })

        .onStepExit(response => {
            // { element, index, direction }
            function changeCameraPosition02() {

                let newIndex = response.index;
                let direction = response.direction;

                if (newIndex == 0 && direction == "down") {
                    // scene.beginAnimation(universalCamera, 0, 30, true, 0.2);
                }
                else if (newIndex == 0 && direction == "up") {
                    // scene.beginAnimation(universalCamera, 0, 30, true, 0.2);

                }
                else if (newIndex == 1 && direction == "down") {

                }
                else if (newIndex == 1 && direction == "up") {

                }
                else if (newIndex == 2 && direction == "down") {

                }
                else if (newIndex == 2 && direction == "up") {

                }
            }

            changeCameraPosition02();

            console.log("Exit");
            console.log(response.index);
            console.log(response.direction);

        })

    // setup resize event
    window.addEventListener("resize", scrollamaScene.resize);

}
  //==========Ending of scrollama.js==================



