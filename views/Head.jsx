import React from 'react'

export default function Head (props){
    return (
        <head>
            <meta charSet="utf-8" />
            <link rel="stylesheet" href="./css/bootstrap.min.css" />
            <link rel="stylesheet" href="./css/index.css" />
            <script src="./js/bootstrap.min.js" defer></script>
            <script src="./js/signup.js" defer></script>
            <script src="./js/signin.js" defer></script>
            <script src="./js/load-forms.js" defer></script>
            <title>React SSR example</title>
        </head>
    );
}

