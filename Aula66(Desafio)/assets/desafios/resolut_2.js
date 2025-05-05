// 070.987.720-03
// 705.484.450.52

const removedFormat = (result) => {
  return result.replace(/\D+/g, "").split("");
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
  const digit = 11 - (totalValues % 11) > 9 ? 0 : 11 - (totalValues % 11);
  const calc = digit === numberValid;
  console.log(digit);
  return calc;
};

function ValidCPF(cpfNumber) {
  // if(typeof )

  const cpfValues = removedFormat("asdsada546565655565d").slice(0, -2);
  const lastValue = cpfNumber.slice(-2);

  console.log(cpfValues);
  console.log(lastValue);
  console.log(removedFormat(cpfNumber));

  // const firstTotalValue = sumValueTheCPF(cpfValues, 2);
  // const secondTotalValue = sumValueTheCPF(cpfValues, 3);

  // const firstNumber = Number(lastValue[0]);
  // const secondNumber = Number(lastValue[1]);

  // return (
  //   validCalcCPF(firstTotalValue, firstNumber) &&
  //   validCalcCPF(secondTotalValue, secondNumber)
  // );
}

const CPF1 = new ValidCPF("070.987.720-03");
// console.log(CPF1);
