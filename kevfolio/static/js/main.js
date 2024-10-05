window.onload = function() { document.body.classList.remove('is-preload'); }
			window.ontouchmove = function() { return false; }
			window.onorientationchange = function() { document.body.scrollTop = 0; }

			document.addEventListener("DOMContentLoaded", () => {
				const leftArrow = document.getElementById("left-arrow");
				const rightArrow = document.getElementById("right-arrow");
				const middleSection = document.getElementById("header");
				const leftSection = document.getElementById("left-section");
				const rightSection = document.getElementById("right-section");
			
				// Initially show middle section and both arrows
				middleSection.style.visibility = "visible";
				leftSection.style.visibility = "hidden";
				rightSection.style.visibility = "hidden";
				leftArrow.style.visibility = "visible";
				rightArrow.style.visibility = "visible";
			
				// Function to show middle section with both arrows
				function showMiddleSection() {
					middleSection.style.visibility = "visible";
					leftSection.style.visibility = "hidden";
					rightSection.style.visibility = "hidden";
					leftArrow.style.visibility = "visible";
					rightArrow.style.visibility = "visible";

				}
			
				// Handle right arrow click (slides right section in from right to left)
				rightArrow.addEventListener("click", () => {
					if (middleSection.style.visibility === "visible") {
						middleSection.style.visibility = "hidden";
						rightSection.style.visibility = "visible";
						rightSection.style.right = "0";
						rightArrow.style.visibility = "hidden";  // Hide right arrow
					} else {
						showMiddleSection();  // Go back to middle section
						leftSection.style.left = "-100%";
					}
				});
			
				// Handle left arrow click (slides left section in from left to right)
				leftArrow.addEventListener("click", () => {
					if (middleSection.style.visibility === "visible") {
						middleSection.style.visibility = "hidden";
						leftSection.style.visibility = "visible";
						leftSection.style.left = "0";
						leftArrow.style.visibility = "hidden";  // Hide left arrow
					} else {
						showMiddleSection();  // Go back to middle section
						rightSection.style.right = "-100%";

					}
				});
			});
			
			

			window.onload = function() { 
				document.body.classList.remove('is-preload'); 
			}
			window.ontouchmove = function() { 
				return false; 
			}
			window.onorientationchange = function() { 
				document.body.scrollTop = 0; 
			}

