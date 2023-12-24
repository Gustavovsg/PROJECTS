let ul = document.querySelector('nav .ul')

function openMenu() {
    ul.classList.add('open');
}
function closeMenu() {
    ul.classList.remove('open');
}
const chk = document.getElementById('chk')

chk.addEventListener('change',() => {
    document.body.classList.toggle('dark')
})
 // Animação
function animarContagem(idParagrafo, valorFinal, incremento, intervalo) {
    let contadorElement = document.getElementById(idParagrafo);
    let contador = 0;

    const intervalId = setInterval(function () {
      contador += incremento;
      contadorElement.textContent = contador;

      if (contador >= valorFinal) {
        contador = valorFinal;
        contadorElement.textContent = contador;
        clearInterval(intervalId); // Parar a animação quando atingir o valor final
      }
    }, intervalo);
  }

  // Chame a função com os parâmetros desejados
  animarContagem("contador", 890, 1, 10);

  // Separado

  function animarContagem(idParagrafo, valorFinal, incremento, intervalo) {
    let contadorElement = document.getElementById(idParagrafo);
    let contador = 0;

    const intervalId = setInterval(function () {
      contador += incremento;
      contadorElement.textContent = contador;

      if (contador >= valorFinal) {
        contador = valorFinal;
        contadorElement.textContent = contador;
        clearInterval(intervalId); // Parar a animação quando atingir o valor final
      }
    }, intervalo);
  }

  // Chame a função com os parâmetros desejados
  animarContagem("contador1", 360, 1, 10);

  // Separado

  function animarContagem(idParagrafo, valorFinal, incremento, intervalo) {
    let contadorElement = document.getElementById(idParagrafo);
    let contador = 0;

    const intervalId = setInterval(function () {
      contador += incremento;
      contadorElement.textContent = contador;

      if (contador >= valorFinal) {
        contador = valorFinal;
        contadorElement.textContent = contador;
        clearInterval(intervalId); // Parar a animação quando atingir o valor final
      }
    }, intervalo);
  }

  // Chame a função com os parâmetros desejados
  animarContagem("contador4", 4303, 5, 10);

    // Separado

    function animarContagem(idParagrafo, valorFinal, incremento, intervalo) {
        let contadorElement = document.getElementById(idParagrafo);
        let contador = 0;
    
        const intervalId = setInterval(function () {
          contador += incremento;
          contadorElement.textContent = contador;
    
          if (contador >= valorFinal) {
            contador = valorFinal;
            contadorElement.textContent = contador;
            clearInterval(intervalId); // Parar a animação quando atingir o valor final
          }
        }, intervalo);
      }
    
      // Chame a função com os parâmetros desejados
      animarContagem("contador3", 1243, 2, 10);


//Validação de Email
const form = document.querySelector('#form')
const emailInput = document.querySelector('#email')
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if(emailInput.value === " " || !isEmailValid(emailInput.value)) {
    alert("Email Invalido! Por favor, preencha o seu email corretamente");
    return;
  }
  form.submit();
})
// função que valida email
function isEmailValid(email) {
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z._-]+\.[a-zA-Z]{2,}$/
  )

  if(emailRegex.test(email)){
    return true
  }
  return false
}

