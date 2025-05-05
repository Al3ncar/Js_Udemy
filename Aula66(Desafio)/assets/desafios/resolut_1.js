const inp = document.querySelector("input");
const container = document.querySelector(".pop");

const removedFormat = (result) => {
  const removedMask = result.replace(/[.\-\s]/g, "");
  return removedMask.split("");
};

const cpfCalc = (cpfElement, startIndex) => {
  const result = [];
  cpfElement.map((item, index) => {
    const cpfCalc = Number(item) * (index + startIndex);
    result.splice(0, 0, cpfCalc);
  });
  return result;
};

const sumValueTheCPF = (cpfValues, startIndex) => {
  const valueMulti = cpfCalc(cpfValues.reverse(), startIndex);
  return valueMulti.reduce((ac, item) => (ac += item), 0);
};

const validCalcCPF = (totalValues, numberValid) => {
  const digit = 11 - (totalValues % 11) > 9 ? 0 : 11 - (totalValues % 11) ;
  const calc = digit === numberValid;
  console.log(digit);
  return calc;
};

const validCPF = (e) => {
  const cpfValues = removedFormat(e.target.value).slice(0, 9);
  const lastValue = removedFormat(e.target.value).slice(-2);

  const firstTotalValue = sumValueTheCPF(cpfValues, 2);
  const secondTotalValue = sumValueTheCPF(cpfValues, 3);

  const firstNumber = Number(lastValue[0]);
  const secondNumber = Number(lastValue[1]);

  validCalcCPF(firstTotalValue, firstNumber) &&
  validCalcCPF(secondTotalValue, secondNumber)
    ? createPop("Validado", "green")
    : createPop("Não Validado", "red");
};

const createPop = (validText, colorValid) => {
  const div = document.createElement("pop");
  container.innerHTML = `<p>${validText}</p>`;
  div.style.color = `${colorValid}`;
};

inp.addEventListener("change", (e) => validCPF(e));
