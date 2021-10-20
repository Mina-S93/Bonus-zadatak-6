let range = document.querySelector("input");
let price = document.querySelector(".price");
let discount = document.querySelector(".discount");
let discountBtn = document.querySelector(".discount-btn");
let pageviewsContainer = document.querySelector(".pageviews");
let prices = [8, 12, 16, 24, 36];
let pageviews = ["10K", "50K", "100K", "500K", "1M"];

//get value from range input
range.oninput = function () {
	price.innerHTML = prices[this.value].toFixed(2);
	pageviewsContainer.innerHTML = pageviews[this.value];
};

range.oninput();

//discount prices
discount.addEventListener("click", () => {
	discountBtn.classList.toggle("discount-activeBtn");
	discount.classList.toggle("discount-activeContainer");

	//25% discount
	if (discountBtn.classList.contains("discount-activeBtn")) {
		prices = [6, 9, 12, 18, 27];
		range.oninput();
	} else {
		prices = [8, 12, 16, 24, 36];
		range.oninput();
	}
});

//progres bar
for (let e of document.querySelectorAll(
	'input[type="range"].slider-progress'
)) {
	e.style.setProperty("--value", e.value);
	e.style.setProperty("--min", e.min == "" ? "0" : e.min);
	e.style.setProperty("--max", e.max == "" ? "100" : e.max);
	e.addEventListener("input", () => e.style.setProperty("--value", e.value));
}
