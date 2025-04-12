const valueoption = document.getElementById('valores')
const numbase = document.getElementById('valorbase')
let res = document.getElementById('res')

function Calcular(){
    const valor = valueoption.value
    const num = numbase.value

    if ( valor == "Real"){
        res.innerHTML = `O resultado é ${num}`
    }

    if ( valor == "Dólar"){
        res.innerHTML = `O resultado é ${num / 5.10}`
    }

    if ( valor == "Euro"){
        res.innerHTML = `O resultado é ${num / 5.50}`
    }

    if ( valor == "Ieni"){
        res.innerHTML = `O resultado é ${num / 0.035}`
    }

    if ( valor == "Peso"){
        res.innerHTML = `O resultado é ${num / 0.005}`
    }
}