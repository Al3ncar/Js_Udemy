function Calculadora() {
  const display = document.querySelector(".display");

  this.iniciar = () => {
    cliqueBotoes();
    pressionaBackSpace();
    executerEnt();
  };

  const pressionaBackSpace = () => {
    display.addEventListener("keydown", (e) => {
      if (e.keyCode === 8) {
        e.preventDefault();
        clearAllCont();
      }
    });
  };

  const clearAllCont = () => {
    display.value = " ";
  };

  const clearNumberCont = () => {
    display.value = display.value.slice(0, -1);
  };

  const executerEnt = () => {
    display.addEventListener(
      "keyup",
      (e) => e.keyCode === 13 && this.executerCont()
    );
  };

  const executerCont = () => {
    try {
      const value = eval(display.value);
      display.value = value;
    } catch (e) {
      alert("Valor inexistente!!!");
    }
  };

  const btnParaDisplay = (value) => {
    display.value += value;
  };

  const verifyClass = (ev, className) => {
    return ev.classList.contains(className);
  };

  const cliqueBotoes = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;

      verifyClass(el, "btn-num") && btnParaDisplay(el.innerText);
      verifyClass(el, "btn-eq") && executerCont();
      verifyClass(el, "btn-clear") && clearAllCont();
      verifyClass(el, "btn-del") && clearNumberCont();
      display.focus();
    });
  };
}

const f1 = new Calculadora();
f1.iniciar();
