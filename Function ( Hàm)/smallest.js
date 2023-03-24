function smallest (number_1, number_2, number_3){
    let min = number_1;
    (min > number_2)? 
    (number_2 > number_3)? min = number_3 :min = number_2 :
    ( min > number_3)? min = number_3 : min ;
    return min ;
}
console.log(smallest(177 , 200 , 2));