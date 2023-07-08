const scriptURL = 'https://script.google.com/macros/s/AKfycbyKleFrpZCWBVxP09LQMcWJTDHN7wGoaz7SZURRux_i5oLRGnPK9blm5ic-uamrLsGYtQ/exec'

const form = document.forms['patitas-perdidas']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>alert('Enviado!', response))
    .catch(error => console.error('Error!', error.message))
})