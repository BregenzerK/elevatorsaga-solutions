// Challenge #2: Transport 20 people in 60 seconds or less
// Challenge #3: Transport 23 people in 60 seconds or less

// passes just every second time on level2, but every time on level3!

{
    init: function (elevators, floors) {
        let elevator = elevators[0]; // Let's use the first elevator

        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on('idle', function () {
            for (let index = 0; index < floors.length; index++) {
                elevator.goToFloor(index);
            }
        });
    },

    update: function (dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}