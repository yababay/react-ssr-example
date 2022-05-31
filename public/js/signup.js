function signupSubmit(e){
    e.preventDefault();
    const responce = await fetch('/auth/signup');
    if(responce.status > 299) throw 'Не удалось загрузить форму регистрации.';
    const html = await responce.text()
    document.querySelector('main').innerHTML = html;
}
