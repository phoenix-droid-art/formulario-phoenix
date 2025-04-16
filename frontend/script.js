const telefoneInput = document.getElementById('telefone');
IMask(telefoneInput, {
    mask: '(00) 00000-0000'
});

document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault();

   const formulario = document.getElementById('formulario');
const loading = document.getElementById('loading');
const confirmacao = document.getElementById('confirmacao');
const formSection = document.getElementById('formulario-section');

formulario.addEventListener('submit', async (e) => {
  e.preventDefault();

  formSection.style.display = 'none';
  loading.classList.remove('hidden');

  const nome = formulario.nome.value;
  const email = formulario.email.value;
  const telefone = formulario.telefone.value;

  try {
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email, telefone })
    });

    if (response.ok) {
      loading.classList.add('hidden');
      confirmacao.classList.remove('hidden');
    } else {
      throw new Error('Erro ao enviar o formulário');
    }
  } catch (err) {
    alert('Erro ao enviar. Tente novamente.');
    formSection.style.display = 'block';
    loading.classList.add('hidden');
  }
});
