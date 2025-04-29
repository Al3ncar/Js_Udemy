function calculadora() {
  return {
    display: document.querySelector(".display"),

    iniciar() {
      this.cliqueBotoes();
      this.pressionaBackSpace;
      this.executerEnt();
    },

    pressionaBackSpace() {
      this.display.addEventListener("keydown", (e) => {
        if (e.keyCode === 8) {
          e.preventDefault();
          this.clearAllCont();
        }
      });
    },

    clearAllCont() {
      this.display.value = " ";
    },

    clearNumberCont() {
      this.display.value = this.display.value.slice(0, -1);
    },

    executerEnt() {
      this.display.addEventListener(
        "keyup",
        (e) => e.keyCode === 13 && this.executerCont()
      );
    },

    executerCont() {
      try {
        const value = eval(this.display.value);
        this.display.value = value;
      } catch (e) {
        alert("Valor inexistente!!!");
      }
    },

    btnParaDisplay(value) {
      this.display.value += value;
    },

    verifyClass(ev, className) {
      return ev.classList.contains(className);
    },

    cliqueBotoes() {
      document.addEventListener("click", (e) => {
        const el = e.target;
    
        this.verifyClass(el, "btn-num") && this.btnParaDisplay(el.innerText);
        this.verifyClass(el, "btn-eq") && this.executerCont();
        this.verifyClass(el, "btn-clear") && this.clearAllCont();
        this.verifyClass(el, "btn-del") && this.clearNumberCont();
        this.display.focus();
      });
    },
  };
}

const f1 = calculadora();
f1.iniciar();
