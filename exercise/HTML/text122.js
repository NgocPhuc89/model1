function randomarray (){
    let array = new Array (15);
    let max = array[0];
    for ( let i = 0 ; i < 15; i++){
        array[i] = Math.ceil(Math.random()* (100 - 10) + 10);
        if ( max < array[1]){
            max = array[1];
        }     
    }
    console.log(randomarray());
    console.log(array);
    console.log(max);
    //return array;
    //console.log(array);
    // let max = array[0];
    // for ( let j = 1 ; j < array.length ; j++){
    //     if(max < array[j]){
    //         max = array[j] ;
    //     }
    // }
    // return max;
}
// let num = randomarray();
// function findGreatest(num){
//     let max = num[0] ;
//     for ( let j = 1 ; j < num.length ; j++){
//         if(max < num[j]){
//             max = num[j] ;
//         }
//     }
//     return max ;
// }
// console.log(num);
// console.log(findGreatest(num));
