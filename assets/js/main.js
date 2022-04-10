const button = document.querySelector(".button");
button.addEventListener("click", function (e) {
     e.preventDefault();
    const peso = document.querySelector(".Peso").value;
    const Altura = document.querySelector(".Altura").value;
    let texto = document.querySelector(".texto");


    const Resultado = parseInt( peso / (Altura ** Altura));
    console.log(Resultado)

    
    if (Number.isNaN(Resultado)) {
        texto.innerHTML = ("valor invalido");
        return
    }

    if (Resultado < 18.5) {
        texto.innerHTML = (`seu IMC está em ${Resultado.toFixed(2)} ( Abaixo do Peso )`)
    }
    else if (Resultado > 18.5 || Resultado <= 24, 9) {
        texto.innerHTML = (`seu IMC está em ${Resultado.toFixed(2)} ( Peso Normal ) `)
    }
    else if (Resultado >= 25 || Resultado <= 29.9) {
        texto.innerHTML = (`seu IMC está em ${Resultado.toFixed(2)} ( Sobrepeso )`)
    }
    else if (Resultado >= 30 || Resultado <= 34.9) {
        texto.innerHTML = (`seu IMC está em ${Resultado.toFixed(2)} ( Obsidade Grau 1 )`)
    }

    else if (Resultado >= 35 || Resultado <= 39.9) {
        texto.innerHTML = (`seu IMC está em ${Resultado.toFixed(2)} ( Obsidade Grau 2 )`)
    }
    else {
        texto.innerHTML = (`seu IMC está em ${Resultado.toFixed(2)} ( Obsidade Grau 3 )`)
    }

})

