function conta(){
    let pesoinput = document.getElementById('peso');
    let pesovalor = pesoinput.value.replace(",",".");
    let peso = parseFloat(pesovalor)

    let alturainput = document.getElementById('altura');
    let alturavalor = alturainput.value.replace(",",".");
    let altura = parseFloat(alturavalor)


    let imc = peso/(altura*altura);

    if(imc < 18.5){
        document.querySelector('span#imc').innerHTML = "seu imc é " + imc.toFixed(2);
        document.querySelector('span#saudavel').innerHTML = "Abaixo do peso"
        document.querySelector('div#resultado').style.display = "flex"
    }
    else if(imc >= 18.5 && imc < 24.9){
        document.querySelector('span#imc').innerHTML = "seu imc é " + imc.toFixed(2);
        document.querySelector('span#saudavel').innerHTML = "Peso normal"
        document.querySelector('div#resultado').style.display = "flex"
    }
    else if(imc >= 24.9 && imc < 29.9){
        document.querySelector('span#imc').innerHTML = "seu imc é " + imc.toFixed(2);
        document.querySelector('span#saudavel').innerHTML = "Sobre peso"
        document.querySelector('div#resultado').style.display = "flex"
    }
    else if(imc >= 29.9 && imc < 34.9){
        document.querySelector('span#imc').innerHTML = "seu imc é " + imc.toFixed(2);
        document.querySelector('span#saudavel').innerHTML = "Obesidade grau I"
        document.querySelector('div#resultado').style.display = "flex"
    }
    else if(imc >= 34.9 && imc < 39.9){
        document.querySelector('span#imc').innerHTML = "seu imc é " + imc.toFixed(2);
        document.querySelector('span#saudavel').innerHTML = "Obesidade grau II"
        document.querySelector('div#resultado').style.display = "flex"
    }
    else if(imc > 39.9){
        document.querySelector('span#saudavel').innerHTML = "Obesidade grau III"
        document.querySelector('div#resultado').style.display = "flex"
    }
    else{
        alert("Por favor ensira seu peso e sua altura")
    }
}