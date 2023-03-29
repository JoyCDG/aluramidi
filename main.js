function tocaSom (seletorAudio) {

    const elemento = document.querySelector(seletorAudio);

    /* No caso o Else entra no lugar do codigo if para o alerta

    if (elemento === null) {
        alert('Elemento não encontrado, sorry');
    }

    */

    //Exemplo de codigo usando o (AND) &&
    if (elemento != null && elemento.localName === 'audio') {
            elemento.play();
        }

    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

/*

Eventos no teclado:
O que são eventos do teclado e como usá-los: onkeydowne onkeyup. Como adicionar e remover classes em um elemento HTML através do JavaScript, com as funções add e remove do classList.

Condições no código e operadores lógicos:
O que é o objeto event, como declarar e acessar ele através do parâmetro de uma função atrelada a um evento. A estrutura condicional if e para que ele serve, além de conhecer o operador de igualdade ==, estritamente igual (===), e o operador or (||).

Mais condições:
A estruturas condicionais if e else juntas. O operador not equals (!=), operador lógico and (&&) e o valor null.

*/



//const = Constante, constantemente, Repedidas vezes
const listadeteclas = document.querySelectorAll ('.tecla');

//Estrutura de laço de Repetição (FOR) aonde a variavel pode ser declarada junto com a condição e uma terceira condição
for (let contador = 0; contador < listadeteclas.length; contador++) {

    const tecla = listadeteclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento) {

        
        if (evento.code == 'Space'|| evento.code == 'Enter') {
            tecla.classList.add('ativa');
        }
        
        
        /*Exemplo de codigo repetidas vezes sem o uso do (OU) ||
        
        if (evento.code == 'Space') {
            tecla.classList.add('ativa');
        }

        if (evento.code == 'Enter') {
            tecla.classList.add('ativa');
        }
        
        */
    }

    tecla.onkeyup = function(evento) {
        
        if (evento.code == 'Space'|| evento.code == 'Enter') {
            tecla.classList.remove('ativa');
        }
    }

}

/*Inicio

Estrutura de laço Repetição (WHILE) que deve ser VERDADEIRO ou FALSO precisa ter uma variavel declarada

Exemplo:

let contador = 0;       >>>>>(((variavel declarada)))

while (contador < listadeteclas.length) {

    const tecla = listadeteclas[contador];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;      >>>>>(((template string))

    console.log(idAudio);        >>>>>(((modo de verificação)))
    
    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    contador = contador + 1;
    
    console.log(contador);       >>>>>(((modo de verificação)))

}

Percorrendo uma lista:Como percorrer uma lista usando a estrutura de repetição while, a criar referências variáveis com let, e como incrementar o valor de uma variável, e criar uma condição para evitar o loop infinito, também conhecemos o atributo length contido nas listas que nos ajudou a obter dinamicamente o valor do tamanho de uma lista.

Função com parâmetros:Como declarar e utilizar parâmetros dentro de uma função que criamos, e o que é uma função anônima e o retorno undefined de uma função.

Textos dinâmicos:Como criar textos dinâmicos utilizando template string e como acessar as classes de um elemento através do atributo classList.

Repetição otimizada com For:Como é a estrutura de repetição for e como ela pode nos ajudar com um código mais limpo, além da forma de incrementar um valor de variável com o operador ++.

Final*/



