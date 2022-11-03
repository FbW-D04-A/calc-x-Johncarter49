// Your code goes here!
import { modulo, percentage, percentageOf, difference } from "./percentage.js";
import { fixRoundingErrors, calculateAspectRatio} from "./aspect-ratio.js";

//Modulo

let modulo_form = document.getElementById("modulo-form");

modulo_form.addEventListener("change", (e) => {
  let modulo_1 = document.getElementById("modulo_1");
  let modulo_2 = document.getElementById("modulo_2");
  let modulo_result = document.getElementById("modulo_result");

  if (e.target.id == "modulo_1" || "modulo_2") {
    modulo_result.value = modulo( Number(modulo_1.value), Number(modulo_2.value));
  }
});

//Percentage

let percentageForm = document.getElementById("percentage-form");

percentageForm.addEventListener("change", (e) => {
  let percentage_1 = document.getElementById("percentage_1");
  let percentage_2 = document.getElementById("percentage_2");
  let percentage_result = document.getElementById("percentage_result");

  if (e.target.id == "percentage_1" || "percentage_2") {
    percentage_result.value = percentage( Number(percentage_1.value), Number(percentage_2.value));
  }
});

// PercentageOf

let percentageOfForm = document.getElementById("percentageOf-form");

percentageOfForm.addEventListener("change", (e) => {
  let percentageOf_1 = document.getElementById("percentageOf_1");
  let percentageOf_2 = document.getElementById("percentageOf_1");
  let percentageOf_result = document.getElementById("percentageOf_result");

  if (e.target.id == "percentageOf_1" || "percentageOf_2") {
    percentageOf_result.value = percentageOf( Number(percentageOf_1.value), Number(percentageOf_2.value));
  }
});

//Difference


let differenceForm = document.getElementById("difference-form");

differenceForm.addEventListener("change", (e) => {
  let difference_1 = document.getElementById("difference_1");
  let difference_2 = document.getElementById("difference_2");
  let difference_result = document.getElementById("difference_result");

  if (e.target.id == "difference_1" || "difference_2") {
    difference_result.value = percentageOf( Number(difference_1.value), Number(difference_2.value));
  }
});

//Aspect-ratio

let aspectForm = document.getElementById("aspect-form");

differenceForm.addEventListener("change", (e) => {
  let difference_1 = document.getElementById("ratio_1");
  let difference_2 = document.getElementById("ratio_2");
  let ratio_resultWidth = document.getElementById("ratio_resultWidth");

  if (e.target.id == "difference_1" || "difference_2") {
    difference_result.value = percentageOf( Number(difference_1.value), Number(difference_2.value));
  }
});

