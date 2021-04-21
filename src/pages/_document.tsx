import React from 'react';
import Document, { Head, Main, NextScript, Html } from 'next/document'

export default class MyDocument extends Document {

    render() {
        return (
            <Html lang='pt'>

                <Head>
                    <meta charSet='utf-8' />

                    <title> NLW 5 Trilha React JS</title>

                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}