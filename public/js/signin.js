async function signinSubmit(e){
    e.preventDefault();
    const form = document.querySelector('#signin-form');
    const username = form.querySelector('[name=username]').value;
    const password = form.querySelector('[name=password]').value;
    const responce = await fetch('/auth/signin', {
        method: 'POST', body: JSON.stringify({username, password}),
        headers: {'Content-Type': 'application/json'}
    });
    if(responce.status < 299) {
        window.top.location = '/'
        return
    }
    const html = await responce.text()
    document.querySelector('main').innerHTML = html;
}

