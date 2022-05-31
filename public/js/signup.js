async function signupSubmit(e){
    e.preventDefault();
    const form = document.querySelector('#signup-form');
    const username = form.querySelector('[name=username]').value;
    const password = form.querySelector('[name=password]').value;
    console.log(username, password)
    const responce = await fetch('/auth/signup', {
        method: 'POST', body: JSON.stringify({username, password}),
        headers: {'Content-Type': 'application/json'}
    });
    if(responce.status > 299) throw 'Не удалось загрузить форму регистрации.';
    const html = await responce.text()
    document.querySelector('main').innerHTML = html;
}
