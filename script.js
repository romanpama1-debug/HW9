// ==========================
// Part 1: Date Display
// ==========================

const today = new Date();

let month = today.getMonth() + 1; // months start at 0
let day = today.getDate();
let year = today.getFullYear();

// add leading zeros
if (month < 10) {
  month = "0" + month;
}

if (day < 10) {
  day = "0" + day;
}

const dateString = "Today is " + month + "/" + day + "/" + year;

document.getElementById("dateOutput").textContent = dateString;


// ==========================
// Part 2: Number Conversion
// ==========================

// values
let val1 = "42";
let val2 = "19.75";
let val3 = "hello";
let val4 = "100";

// convert
let num1 = Number(val1);
let num2 = Number(val2);
let num3 = Number(val3);
let num4 = Number(val4);

// results
let result = "";

// helper function style (but still separate lines)
result += `Original: "${val1}" → Converted: ${num1} → isNaN: ${Number.isNaN(num1)} → isInteger: ${Number.isInteger(num1)} <br>`;
result += `Original: "${val2}" → Converted: ${num2} → isNaN: ${Number.isNaN(num2)} → isInteger: ${Number.isInteger(num2)} <br>`;
result += `Original: "${val3}" → Converted: ${num3} → isNaN: ${Number.isNaN(num3)} → isInteger: ${Number.isInteger(num3)} <br>`;
result += `Original: "${val4}" → Converted: ${num4} → isNaN: ${Number.isNaN(num4)} → isInteger: ${Number.isInteger(num4)} <br>`;

// conditionals (REQUIRED)
if (Number.isNaN(num3)) {
  result += "<p>This value is NOT a valid number.</p>";
} else {
  result += "<p>This value is valid.</p>";
}

if (Number.isInteger(num1)) {
  result += "<p>42 is an integer.</p>";
} else {
  result += "<p>42 is not an integer.</p>";
}

document.getElementById("numberConversionOutput").innerHTML = result;


// ==========================
// Part 3: Math & Formatting
// ==========================

let price = 49.99;
let taxRate = 0.0825;
let shipping = 5;

// calculations
let subtotal = price + shipping;
let tax = subtotal * taxRate;
let total = subtotal + tax;

// formatting
let formattedTotal = total.toFixed(2);

// display
let mathResult = `
Subtotal: $${subtotal}<br>
Tax: $${tax.toFixed(2)}<br>
Total: $${formattedTotal}
`;

document.getElementById("mathOutput").innerHTML = mathResult;