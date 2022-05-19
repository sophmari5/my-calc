function atualizarDisplay(btn){
    const display = document.getElementById('display');
    if(display.value.length === 20) return;
    if(display.value === '0') display.value = btn.value;
    else display.value += btn.value;
}

function limparDisplay(){
    document.getElementById('display').value = '0';
}

var valor1 = 0
function atualizarOperacao(btn){
    const display = document.getElementById('display');
    atualizarDisplay(btn);
}

function calcularOperacao(){
    const display = document.getElementById('display');
    valor1 = eval(display.value);
    display.value=valor1;
}       

function manipularTeclado(){
    if(/[0-9]/.test(event.key))
        atualizarDisplay({value: event.key});
}
