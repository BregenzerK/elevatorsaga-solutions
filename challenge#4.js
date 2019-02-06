// Challenge #4: Transport 28 people in 60 seconds or less

// doesn't pass every time!
{
    init: function (elevators, floors) {
        let elevator1 = elevators[0];
        let elevator2 = elevators[1];

        elevator1.on('floor_button_pressed', function (floorNum) {
            elevator1.goToFloor(floorNum);
        });

        elevator2.on('floor_button_pressed', function (floorNum) {
            elevator2.goToFloor(floorNum);
        });

        elevator1.on('idle', function () {
            for (let floor of floors) {
                floor.on("up_button_pressed", function(){
                    elevator1.goToFloor(floor.floorNum());
                });
            }
        });

        elevator2.on('idle', function () {
            for (let floor of floors) {
                floor.on("down_button_pressed", function(){
                    elevator2.goToFloor(floor.floorNum());
                });
            }
        });
    },

    update: function (dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}