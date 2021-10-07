import { leerTeclado } from '../view/entradaTeclado'

export const menuPral = async () => {
    let n: number
    console.log('\n')
    console.log('1.-|------NUMERO PRIMO------|')
    console.log('2.-|------NUMERO PAR O IMPAR------|')
    console.log('3.-|------FECHAS------|')
    console.log('0.-|------SALIR------|')
    n = parseInt( await leerTeclado('opción: ') )
    return n
}