"use strict"

function solveEquation(a, b, c) {
	let d = b ** 2 - 4 * a * c;
	if (d < 0)
		return [];
	else if (d === 0)
		return [-b / (2 * a)];
	else {
		let x1 = (-b + Math.sqrt(d)) / (2 * a);
		let x2 = (-b - Math.sqrt(d)) / (2 * a);
		return [x1, x2];
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let normalizedPercent = percent / 100;
	let creditBody = amount - contribution;
	let monthPercent = normalizedPercent / 12;
	let monthPay = creditBody * (monthPercent + (monthPercent / (((1 + monthPercent) ** countMonths) - 1)));
	let totalSum = (monthPay * countMonths).toFixed(2);
	return Number(totalSum);
}