function Calculadora() {
        this.display = document.querySelector('.display');
        this.btnClear = document.querySelector('.btn-clear');
        
        this.inicia = function() {
            this.cliqueBotoes();
            this.enterPress();
        };

        this.enterDel = function() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 8) {
                    this.clearDisplay();
                }
            });
        };

        this.enterPress = function() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        };
        
        this.realizaConta = function() {
            let conta = this.display.value;

            try {
                conta = eval(conta);
                if (!conta) {
                    alert('Conta Inválida!')
                    return;
                }

                this.display.value = String(conta);
            } catch(e) {
                alert('Conta Inválida!')
                return;
            }
        };

        this.clearDisplay = function() {
            this.display.value = ''
        };

        this.deleteOne = function() {
            this.display.value = this.display.value.slice(0, -1);
        };

        this.cliqueBotoes = function() {
            document.addEventListener('click', function(e){
                const el = e.target;
                if (el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')){
                    this.deleteOne();
                }

                if (el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
            }.bind(this));
        };

        this.btnParaDisplay= function(valor) {
            this.display.value += valor;
        }
    };

const calculadora = new Calculadora();
calculadora.inicia();