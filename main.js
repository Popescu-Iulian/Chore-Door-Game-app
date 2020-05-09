let doorImage1 = document.querySelector('#door1');
let doorImage2 = document.querySelector('#door2');
let doorImage3 = document.querySelector('#door3');
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

const playDoor = () => {
	numClosedDoors--;

	if (numClosedDoors === 0) {
		gameOver();
	}
};

const randomChoreDoorGenerator = () => {
	let choreDoor = Math.floor(Math.random() * 3);
	if (choreDoor === 0) {
		openDoor1 = botDoorPath;
		openDoor2 = beachDoorPath;
		openDoor3 = spaceDoorPath;
	} else if (choreDoor === 1) {
		openDoor2 = botDoorPath;
		openDoor1 = beachDoorPath;
		openDoor3 = spaceDoorPath;
	} else {
		openDoor3 = botDoorPath;
		openDoor1 = spaceDoorPath;
		openDoor2 = beachDoorPath;
	}
};

let botDoorPath =
	'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
let beachDoorPath =
	'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
let spaceDoorPath =
	'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';

doorImage1.onclick = () => {
	doorImage1.src = openDoor1;
	playDoor();
};

doorImage2.onclick = () => {
	doorImage2.src = openDoor2;
	playDoor();
};

doorImage3.onclick = () => {
	doorImage3.src = openDoor3;
	playDoor();
};
