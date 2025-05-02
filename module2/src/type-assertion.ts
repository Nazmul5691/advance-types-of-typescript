{

//

//type assertion
let anything : any

anything = "next level";

// (anything as string).    // show method of string

let otherThing : any

otherThing =  222;

// (otherThing as number).     // show method of number






const kgToGm = (value : string | number): string | number | undefined =>{
    if(typeof value === 'string'){
        const convertedNumber = parseFloat(value) * 1000;
        return convertedNumber;      //return number
        // return convertedNumber.toString()   // return string
    }
    else if(typeof value === 'number'){
        return value * 1000
    }
}


const result1 = kgToGm(1000) as number;
const result2 = kgToGm("1000") as string;

console.log(result1, result2);
console.log(typeof(result1), typeof(result2));



type CustomError= {
    message : string
}

try{

}
catch(error){
    console.log((error as CustomError).message);
}

//

}