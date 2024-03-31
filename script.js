const number = parseInt(prompt( `Введіть ціле число`)) ;
 let simpleNumber = true;
 if (number <=1) {
     simpleNumber= false;
 }
else {
    for ( let i= 2; i<= number / 2 ; i++ ) {
        if ( number % 2 === 0 ) {
            simpleNumber = false;
            break;
        }
    }
 }
if (simpleNumber) {
    console.log(`Число ${number} є простим`);

}
else {
    console.log(`Число ${number}  не є простим`)
}