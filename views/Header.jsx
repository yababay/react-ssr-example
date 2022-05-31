import React from 'react'

export default function Header (props){
    return (
        <header>
            <nav className="navbar navbar-dark bg-dark shadow">
                <button className="docs-sidebar-toggler docs-sidebar-visible me-2 d-xl-none" id="docs-sidebar-toggler" type="button">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <a className="navbar-brand ms-3" href="#/">
                    <img className="me-2" src="img/logo.svg" alt="logo" width="32" height="32" />
                    <span>Привет, {props.user && props.user.username || 'мир'}!</span>
                </a>
                <div>
                    {
                        !props.user ?  <button id="signup-button" className="btn btn-primary">Зарегистрироваться</button> : ''
                    }
                    <button id="signin-button" className="btn btn-primary">Выйти</button>
                </div>
            </nav>
        </header>
    );
}

