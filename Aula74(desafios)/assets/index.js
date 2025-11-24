// 705.484.450-52
// 070.987.720-03

class ValidCPF {
  constructor(number) {
    this.number = number.replace(/\D+/g, "");
    this.validingCPF();
  }

  calcCPF() {
    const newCPFNumber = this.number.slice(0, -2);
    const firstDigit = ValidCPF.multipleValueTheCPF(newCPFNumber);
    const secondDigit = ValidCPF.multipleValueTheCPF(newCPFNumber + firstDigit);
    const resultCalc = this.convertValueToString(firstDigit, secondDigit);

    return newCPFNumber + resultCalc === this.number
      ? console.log("CPF Valido!!!")
      : console.log("CPF Invalido!!!");
  }

  convertValueToString(firstValue, secondValue) {
    const maxNineValue = (value) => (value > 9 ? 0 : value);
    return (
      maxNineValue(firstValue).toString() + maxNineValue(secondValue).toString()
    );
  }

  static multipleValueTheCPF(numberArray) {
    let total = 0;
    let lengthNumber = numberArray.length + 1;
    for (let item of numberArray) total += Number(item) * lengthNumber--;
    return 11 - (total % 11);
  }

  isSequencie() {
    return this.number.charAt(0).repeat(11) === this.number;
  }

  validingCPF() {
    if (!this.number) return console.log("CPF Invalido!!!");
    if (typeof this.number !== "string") return console.log("CPF Invalido!!!");
    if (this.isSequencie()) return console.log("CPF Invalido!!!");

    this.calcCPF();
  }
}

// const CPF1 = new ValidCPF("705.484.450-52");
const CPF2 = new ValidCPF("450.877.238-29");
//const CPF3 = new ValidCPF("111.111.111-11");
