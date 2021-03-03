const validation = () => {
  const required = document.querySelectorAll('.requerido');
  const lines = document.querySelectorAll('.line');
  const button = document.querySelector('form');

  for (let i = 0; i < required.length; i += 1) {
    if (required[i].value === '') {
      required[i].classList.add('red');
      const p = document.createElement('p');
      p.innerHTML = 'Verificar el campo';
      lines[i].appendChild(p);
    }
  }

  if (
    (required[0].value !== '')
    && (required[1].value !== '')
    && (required[2].value !== '')
  ) {
    const p = document.createElement('p');
    p.innerHTML = 'Su formulario fue enviado';
    button.appendChild(p);
    // form.reset();
  }
};

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  validation();
});
