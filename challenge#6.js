// Challenge #6: Transport 40 people using 60 elevator moves or less

{
    init: function(elevators, floors) {
        for (let elevator of elevators) {
            elevator.on('floor_button_pressed', function (floorNum) {
                if (elevator.loadFactor() > 0.7) {
                    elevator.goToFloor(floorNum);
                }
            });

            elevator.on('idle', function () {
                console.log('idle', elevator);
                for (let floor of floors) {
                    if (elevator.loadFactor() > 0.7) {
                        elevator.goToFloor(floor.floorNum());
                    }
                }
            });
        }
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}
