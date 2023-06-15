const scriptURL = 'https://script.google.com/macros/s/AKfycbzMdUSN03b051Oi613k42OfN8Cg0tE7RZB3R92Rp6JoxyOx93m80rKFU66Au27u7Vbr/exec'
const form = document.forms['contact-form']
const btnKirim = document.querySelector(".btn-kirim")
const myalert = document.querySelector(".my-alert")

form.addEventListener('submit', e => {
    e.preventDefault();
    btnKirim.classList.toggle('d-none');
   
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            btnKirim.classList.toggle('d-none');
            myalert.classList.toggle('d-none');
            form.reset();
            console.log('Success!', response);
        })
        .catch(error => console.error('Error!', error.message))
});