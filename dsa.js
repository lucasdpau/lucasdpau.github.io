const bubbleObj = new Object();
bubbleObj.canvas = document.getElementById("bubbleCanvas");
bubbleObj.ctx = bubbleObj.canvas.getContext('2d');
bubbleObj.values = [];
bubbleObj.numberOfValues = 10;
bubbleObj.stepInterval = 100;
bubbleObj.currentStep = 0;
bubbleObj.sorted = false;
bubbleObj.loop = false;
bubbleObj.j = 0;

bubbleObj.init = function() {
    //sets up the array, shuffles it, and then draws it
    bubbleObj.loop = false;
    bubbleObj.values = [];
    bubbleObj.currentStep = 0;
    bubbleObj.j = 0;
	for (let i=1; i <= bubbleObj.numberOfValues; i++){
		bubbleObj.values.push(i);
	}
    bubbleObj.shuffleArray(bubbleObj.values);
    bubbleObj.drawCanvas();
}

bubbleObj.shuffleArray = function(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

bubbleObj.drawCanvas = function() {
	//renders the current state of the set with default colors
	bubbleObj.ctx.clearRect(0,0, bubbleObj.canvas.width, bubbleObj.canvas.height);
	for (let i=0; i < bubbleObj.values.length; i++){
		bubbleObj.ctx.strokeStyle = 'rgba(0,0,0,1)';
		bubbleObj.ctx.strokeRect((i)*20, 150, 0, -bubbleObj.values[i]*15);
		bubbleObj.ctx.fillStyle = 'rgba(100,100,200,1)';
		bubbleObj.ctx.fillRect((i)*20, 150, 20, -bubbleObj.values[i]*15);
	}
}

bubbleObj.sort = function () {
    //if sort is running, loop is on. don't start another auto sort if loop is on
    if (!bubbleObj.loop) {
        bubbleObj.loop = true;
        bubbleObj.interval = setInterval(() => {
            if (bubbleObj.loop) {
                bubbleObj.step()
            }
            else {
                clearInterval(bubbleObj.interval);
            }
        }, bubbleObj.stepInterval);
    }
}

bubbleObj.step = function() {
    switch (bubbleObj.currentStep) {
        case 0:
            console.log('case 0');
            console.log(bubbleObj.j)
            bubbleObj.ctx.clearRect((bubbleObj.j)*20, 150, 20, -bubbleObj.values[bubbleObj.j]*15);
            bubbleObj.ctx.fillStyle = 'rgba(255,50,50,1)';
            bubbleObj.ctx.fillRect((bubbleObj.j)*20, 150, 20, -bubbleObj.values[bubbleObj.j]*15);
            bubbleObj.ctx.strokeRect((bubbleObj.j)*20, 150, 0, -bubbleObj.values[bubbleObj.j]*15);
            bubbleObj.currentStep++;
            break;
        case 1:
            console.log('case 1');
            console.log(bubbleObj.currentStep)
            bubbleObj.ctx.clearRect((bubbleObj.j + 1)*20, 150, 20, -bubbleObj.values[bubbleObj.j +1]*15)
            bubbleObj.ctx.fillStyle = 'rgba(255,50,50,1)';
            bubbleObj.ctx.fillRect((bubbleObj.j + 1)*20, 150, 20, -bubbleObj.values[bubbleObj.j +1]*15)
            bubbleObj.ctx.strokeRect((bubbleObj.j +1)*20, 150, 0, -bubbleObj.values[bubbleObj.j +1]*15);
            bubbleObj.currentStep++;
            break;
        case 2:
            console.log('case 2');
            console.log(bubbleObj.currentStep)
            if (bubbleObj.values[bubbleObj.j] > bubbleObj.values[bubbleObj.j+1]) {
				let temp = bubbleObj.values[bubbleObj.j];
				bubbleObj.values[bubbleObj.j] = bubbleObj.values[bubbleObj.j+1];
                bubbleObj.values[bubbleObj.j+1] = temp;
                bubbleObj.sorted = false;
            }
            bubbleObj.currentStep++;
            bubbleObj.drawCanvas();
            if (bubbleObj.currentStep >= 3) {
                bubbleObj.currentStep = 0;
                bubbleObj.j++;
            }
            if (bubbleObj.j >= bubbleObj.values.length -1  && bubbleObj.sorted == true) {
                bubbleObj.loop = false;
            }
            else if (bubbleObj.j >= bubbleObj.values.length -1 ) {
                bubbleObj.j = 0;
                bubbleObj.sorted = true;
            }
            break;
    }
}

function bubbleStepWrapper(){
    // I don't want the button press to call step() while autosort is on.
    // but auto sort calls step on a regular basis, so I don't want this to be
    // dependent on loop state
    if (!bubbleObj.loop) {
        bubbleObj.step()
    }
}

bubbleObj.init();
// This button resets the bubble canvas when clicked.
document.getElementById("bubbleButton").addEventListener('click', bubbleObj.init);
// This button starts the sorting algorithm animation
document.getElementById("sort").addEventListener('click', bubbleObj.sort);
// This button increments by one step
document.getElementById("step").addEventListener('click', bubbleStepWrapper);