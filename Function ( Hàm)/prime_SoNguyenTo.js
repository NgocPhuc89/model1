function isprime(number){
    if( number <= 1){
        return number + "is not prime" ;
    }
    if (number == 2){
        return number + "prime" ;
    }
    for ( let i = 2 ; i < number ; i++){
        if( number % i == 0 ){
            return number + "is not prime" ;
        }
    }
    return number + " is prime";
}
console.log (isprime(97));