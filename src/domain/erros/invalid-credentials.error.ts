export class InvalidCredntialsError extends Error {
    constructor () {
        super('Credenciais Inváçidas')
        this.name = 'InvalidCrednitalsError'
    }
}