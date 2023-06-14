const scriptURL = 'https://script.google.com/macros/s/AKfycbzMdUSN03b051Oi613k42OfN8Cg0tE7RZB3R92Rp6JoxyOx93m80rKFU66Au27u7Vbr/exec'
const form = document.forms['contact-form']
const btnKirim = document.querySelector(".btn-kirim")
const btnLoading = document.querySelector(".btn-loading")
const myalert = document.querySelector(".my-alert")

form.addEventListener('submit', e => {
    e.preventDefault();
    
    
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
});

