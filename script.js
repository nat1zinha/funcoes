function multiplicar() {
    const numero1 = document.querySelector("#numero-1").valueAsNumber
    const numero2 = document.querySelector("#numero-2").valueAsNumber
    const numero3 = document.querySelector("#numero-3").valueAsNumber


    const paragrafo = document.querySelector(".resultado")

    paragrafo.innerHTML = `Resultado: ${numero1 * numero2 * numero3}`
}

const button = document.querySelector("button")
button.addEventListener('click', multiplicar)