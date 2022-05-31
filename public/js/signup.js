async function signupSubmit(e){
    e.preventDefault();
    const form = document.querySelector('#signup-form');
    const username = form.querySelector('[name=username]').value;
    const password = form.querySelector('[name=password]').value;
    const email = form.querySelector('[name=email]').value;
    const responce = await fetch('/auth/signup', {
        method: 'POST', body: JSON.stringify({username, password, email}),
        headers: {'Content-Type': 'application/json'}
    });
    const html = await responce.text()
    document.querySelector('main').innerHTML = html;
    if(responce.status < 300) setupSubmit()
}
