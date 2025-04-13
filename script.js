const valueoption = document.getElementById('valores')
const numbase = document.getElementById('valorbase')
let res = document.getElementById('res')

function Calcular(){
    const valor = valueoption.value
    const num = numbase.value

    if ( valor == "Real"){
        res.innerHTML = `O resultado é ${num} Reais!`
    }

    if ( valor == "Dólar"){
        res.innerHTML = `O resultado é ${num / 5.10} Dólares!`
    }

    if ( valor == "Euro"){
        res.innerHTML = `O resultado é ${num / 5.50} Euros!`
    }

    if ( valor == "Ieni"){
        res.innerHTML = `O resultado é ${num / 0.035} Ienes!`
    }

    if ( valor == "Peso"){
        res.innerHTML = `O resultado é ${num / 0.005} Pesos!`
    }
}