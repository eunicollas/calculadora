let numero1 = prompt('Insira o primeiro numero');
let operação = prompt('Escolha a operação');
let numero2 = prompt('Insirina o segundo numero');
if (operação ==='+'){
    let soma = parseInt(numero1) + parseInt(numero2)
    alert (`O resultado é ${soma}`)
}
else if (operação ==='-'){
   let menos = parseInt(numero1) - parseInt(numero2)
   alert (`O resultado é ${menos}`)
}
else if (operação === 'x'){
    let multiplicar = parseInt(numero1) * parseInt(numero2)
    alert(`O seu resultado é ${multiplicar}`)
}
else if (operação === '÷'){
    let dividir = parseInt(numero1) / parseInt(numero2)
    alert(`O seu resultado é ${dividir}`)
}
else{
    alert('Ops! Parece que essa operação não existe')
}