// Challenge #5: Transport 100 people in 68 seconds or less

// doesn't pass every time
{
    init: function(elevators, floors) {
        for (let elevator of elevators) {
            elevator.on('floor_button_pressed', function (floorNum) {
                elevator.goToFloor(floorNum);
            });

            elevator.on('idle', function () {
                console.log('idle', elevator);
                for (let floor of floors) {
                    elevator.goToFloor(floor.floorNum());
                }
            });
        }
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}
