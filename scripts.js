function generateNumber(){

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = document.querySelector(".input-max").value
    const ResultadoNaTela = document.querySelector('.Resultado')

    if(max > min) {
        const result = Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
        ResultadoNaTela.innerHTML = result
    } 
    else {
        alert("O Valor Minimo Tem Que Ser MENOR Que O valor MÀXIMO")
    }
} 




