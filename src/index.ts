import { menuPral } from './view/menuPral'
import { leerTeclado } from './view/entradaTeclado'

const main = async () => {
    let n: number
    do {

        n = await menuPral()
        switch(n){
            case 1:
                console.log("|------OPCION 1------|")
                await primo()
                break
            case 2:
                console.log("|------OPCION 2------|")
                await parimpar()
                break
            case 3:
                console.log("|------OPCION 3------|")
                await fechas()
                break
            case 0:
                console.log('\n|------ADIOS------|')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    }while (n != 0)
}




const primo = async () => {
    let n1: number
    let primo=true
    n1 =  parseInt( await leerTeclado('Dame un número')) 
    for (let x = 2; x < n1 / 2 ; x++) {
        if (n1 % x == 0) {
            primo=false
        }
    }
    if (primo==true) {
    console.log("El numero es primo")
    } else {
        console.log("El numero no es primo")
    }
}
const parimpar = async () => {
    let n1: number
    n1 =  parseInt( await leerTeclado('Dame un número')) 
    if (n1 % 2 == 0) {
        console.log("El número es par");
    
    } else {
        console.log("El número es impar");
    }
}
const fechas = async () => {
    console.log ("Inserte fecha para el primer usuario (aaaa-mm-dd)")
    let fecha1A= await(leerTeclado(' '))
    console.log ("Inserte fecha para el segundo usuario (aaaa-mm-dd)")
    let fecha2A= await(leerTeclado(' '))
    let fecha1Buena= new Date(fecha1A)
    let fecha2Buena = new Date(fecha2A)
    if (fecha1Buena.getTime() < fecha2Buena.getTime()) {
         console.log("El usuario 1 es mayor")

    } else {
          console.log ("El usuario 2 es mayor")
    }
}
main()