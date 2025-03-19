//your code here

const images = document.getElementsByClassName("image");
let draggedElement = null;

for(let i=0; i<images.length; i++){
	images[i].addEventListener("dragstart", (e) => {
		draggedElement = e.target;
	});

	images[i].addEventListener("dragover", (e) => {
		e.preventDefault();
	});

	images[i].addEventListener("drop", (e) => {
		e.preventDefault();

		 if (!draggedElement) {
	        console.error("draggedElement is null");
	        return;  // Prevents further errors
		}
		
		let draggedBg = window.getComputedStyle(draggedElement).backgroundImage;
		let targetBg = window.getComputedStyle(e.target).backgroundImage;
		if (draggedBg !== targetBg) {
			draggedElement.style.backgroundImage = targetBg;
			e.target.style.backgroundImage = draggedBg;

			[draggedElement.innerText, e.target.innerText] = [e.target.innerText, draggedElement.innerText]
	    }
	})
}