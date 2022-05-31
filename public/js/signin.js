async function signinSubmit(e){
    e.preventDefault();
    const responce = await fetch('/auth/signin');
    if(responce.status > 299) throw 'Не удалось загрузить форму регистрации.';
    const html = await responce.text()
    document.querySelector('main').innerHTML = html;
}

