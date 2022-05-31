function setupSubmit(url = 'signin'){
    const form = document.querySelector(`#${url}-form`)
    form.addEventListener('submit', url == 'signup' ? signupSubmit : signinSubmit);
}

function loadForm(url){
    const button = document.querySelector(`#${url}-button`);
    if(!button) return
    document.querySelector(`#${url}-button`).addEventListener('click', async () => {
        const responce = await fetch(`/${url}`);
        if(responce.status > 299) throw 'Не удалось загрузить форму.';
        const html = await responce.text()
        const main = document.querySelector('main');
        main.innerHTML = html
        setupSubmit(url)
    })
}

loadForm('signup')
loadForm('signin')

