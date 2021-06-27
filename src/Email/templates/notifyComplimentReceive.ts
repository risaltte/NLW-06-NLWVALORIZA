const getTemplateEmailNotifyComplimentsReceive = (userName: string) => {
    return `
    <html>
    <head>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: Arial;
            }

            .container {
                width: 100%;
                max-width: 1000px;
                margin: 0 auto;
				padding: 0 20px;
            }

            html, body {
                height: 100%;
            }
			
			body {
				padding: 50px 100px;
				background: #cecece
			}

            .header {
                background-color: crimson;
                width: 100%;
                height: 70px;
                padding: 10px;
            }

            .title {
                font-size: 1.5rem;
                color: white;
                text-transform: uppercase;
                text-align: center;
                height: 100%;

                display: flex;
                justify-content: center;
                align-items: center;
            }

            .main {
                margin: 0 auto;
				background: white;
				padding: 50px 0;
            }

            p {
                font-size: 1rem;
                padding: 7px;
            }

            .footer {
                width: 100%;
                background-color: #333131;
            }

            .footer-content {
                padding: 10px;
                color: white;  
                font-family: Arial, Helvetica;   
                font-size: 0.8rem;           
            }

            .footer a {
                text-decoration: none;
                color: rgb(137, 164, 238);
            }

        </style>
    </head>
    <body>
        <div class="header container">
            <div class="container">
                <div class="title">                    
                    <div>nlw Valoriza</div>
                </div>
            </div>
        </div>
        <div class="main container">
            <div class="container">
                <p>
                    Olá <b>${userName}</b>,
                </p>
                <p>
                    Você recebeu um novo elogio no NLW Valoria. Parabéns pelo seu trabalho!
                </p>
                <p>
                    Um elogio é um indicativo que você tem desempenhado muito bem suas atividades e sua conduta tem sido aprovado pelos seus colegas.
                </p>
                <p>
                    Continue assim, não perca o foco.
                </p>
                <p>
					Você pode conferir seu elogio clicando <a href="#">aqui</a>.
                </p>
            </div>
        </div>
        <div class="footer container">
            <div class="container">
                <div class="footer-content">
                    <p>
                        <b>NLW Valoriza</b>
                    </p>
                    <Address>
                        Endereço: Rua Afonso Pena, 5368 <br>
                        Bairro: Centro <br>
                        Campo Grande - MS <br>
                        CEP: 792589-000 br
                        Telefone: 67 9 9999-9999 <br>
                        Email: <a href="mailto:contato@email.com">contato@email.com</a> <br>
                        site: <a href="">www.exemplo.com</a>
                    </Address>
                </div>
            </div>
        </div>
        
    </body>
    </html>`
};

export { getTemplateEmailNotifyComplimentsReceive };