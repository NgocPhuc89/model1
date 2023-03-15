const Equation = 'a * x * x + b * x + c = 0';
let a = 1;
let b = 2;
let c = 3;
let delta = (b * b) - (4 * a * c) ;
console.log("delta = " + delta)
if(delta ===0){
    console.log("nghiệm kép")
    let x = -b /(2 * a );
    console.log("x = " + x);
}
else{
    if(delta > 0){
        console.log("Phương trình có 2 nghiệm");
        let x1 = (-b + Math.sqrt(delta))/(2 * a)
        console.log("x1 =" + x1)
    }
}