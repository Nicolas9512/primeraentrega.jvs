console.log("calculadora")


let paso = prompt("elige el paso que deseas, \n 1-suma \n 2-resta \n 3-multiplicacion \n 4-division")
let A = prompt ("acciona el primer numero del paso")
let B = prompt ("acciona el segundo numero del paso")

while (paso !=4){

    switch (paso){

        case 1:
        console.log(A + B)
        break;

      case 2:
      console.log(A - B)
      break;

      case 3:
        console.log(A * B)
        break;

        case 4:
            console.log(A / B)
            break;

    }

}






