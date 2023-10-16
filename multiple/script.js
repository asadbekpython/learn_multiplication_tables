const firstNumber = document.querySelector(".first");
const secondNumber = document.querySelector(".second");
const nextButton = document.querySelector(".next-btn");
const usersAnswer = document.querySelector(".input");
const checkButton = document.querySelector(".check-btn");

// Генерирует случайные числа и хранит их произведение в переменной 
const next = () => {

	if (checkButton.classList.value.slice(10) == "correct") {
		checkButton.classList.remove("correct");
	} else if (checkButton.classList.value.slice(10) == "incorrect") {
		checkButton.classList.remove("incorrect");
	};

	if (usersAnswer.value != "") {
		usersAnswer.value = "";
	};

	if (checkButton.innerHTML == "Верно" || checkButton.innerHTML == "Неправильно") {
		checkButton.innerHTML = "Проверить";
	};


	// Генерирует случаное число
	const getRandomNumber = () => {
		numbers = ["2", "3", "4", "5", "6", "7", "8", "9"];
		const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
		return randomNumber;
	};

	// сохраняем в константах случайные числа 
	const firstRandom = getRandomNumber();
	const secondRandom = getRandomNumber();

	// передача в HTML
	firstNumber.innerHTML = firstRandom;
	secondNumber.innerHTML = secondRandom;

	// изменение контента кнопки начать на следующий
	if (nextButton.innerHTML === "Начать") {
		nextButton.innerHTML = "Следующий";
	};

};

// Проверяет ответ, данный пользователем и изменяет 
// цвет фона
const check = () => {
	const answer = firstNumber.innerHTML * secondNumber.innerHTML;

	if (answer == usersAnswer.value) {
		checkButton.classList.add("correct");
		checkButton.innerHTML = "Верно"
	} else {
		checkButton.classList.add("incorrect");
		checkButton.innerHTML = "Неправильно";
	};

};
