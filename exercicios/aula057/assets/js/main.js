function criaCalculadora() {
    return {
        display: document.querySelector('.display'),



        inicia: function(){
            this.cliqueBotoes();
        },

        cliqueBotoes() {
            document.addEventListener('click', function(e){
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay()
                }
            }.bind(this));
        },

        btnParaDisplay(valor) {

        }
    };
};

const calculadora = criaCalculadora();
calculadora.inicia();
