require('dotenv').config()
const app = require("./src/app")
const nodemailer = require('nodemailer')

const link = process.env.LINK
const port = process.env.PORT || 4000
const url = `${link}:${port}`

const emailConfig = nodemailer.createTransport({
    host: process.env.HOST_EMAIL,
    port: process.env.PORT_EMAIL,
    secure: false,
    auth: {
        user: 'brunosdesenvolvedor@gmail.com',
        pass: process.env.PASS
    }
})

const emailEnvio = {
    from: "brunosdesenvolvedor@gmail.com",
    to: "brunosflauta@gmail.com",
    subject: "Teste de automação ",
    html: "Testando aplicação de envio de e-mail automático com node."
}

emailConfig.sendMail(emailEnvio)
    .then(() => {
        return console.log('Email enviado com sucesso.')
    })
    .catch((erro) => {
        return console.log('Tivemos um erro ao tentar enviar o email. ' + erro)
    })

app.listen(port, () => {
    return console.log(`Servidor rodando em: ${url}`)
})