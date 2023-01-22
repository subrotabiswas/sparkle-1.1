// Counter Custom JavaScript Code
const counter = document.querySelectorAll('.counter');

counter.forEach(counter => {
	let count = 0;
	const updateCounter = () => {
		const countTarget = parseInt(counter.getAttribute('data-counttarget'));
		count++;
		if (count < countTarget) {
			counter.innerHTML = count;
			setTimeout(updateCounter, 20);
		}	else	{
			counter.innerHTML = countTarget;
		}
	};
	updateCounter();
});
