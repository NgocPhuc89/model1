function generateArray(size, min, max) {
    let array = new Array(size);
    for (let i = 0; i < array.length; i++) {
        array[i] = Math.ceil(Math.random() * (max - min) + min);
    }
    //console.log(array.toString());
    return array;
    //generateArray(15 , 1 , 30 );
}
 let array_1 = generateArray(10, 5, 20);
// let array_2 = generateArray(10, 100, 500);
// console.log (array_1.toString());
// console.log (array_2);
//console.log (generateArray(10 , 1, 30));
//console.log (generateArray(10 , 100, 300 ).toString());
//document.write (generateArray(10 , 1, 30));
//document.write (generateArray(10 , 100, 300 ).toString());
function find(x , array){
    for ( let i = 0 ; i < array.length ; i++){
        if( x == array[i]){
            return true;
        }
    }
    return false;
}
console.log (array_1);
console.log (find( 17 , array_1));