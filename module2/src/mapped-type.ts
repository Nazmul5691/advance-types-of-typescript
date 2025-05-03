{


    const arrayOfNum: number[] = [1, 2, 3]

    // const arrayOfString: string[] = ['1', '2', '3']
    const arrayOfString: string[] = arrayOfNum.map(number => number.toString())

    console.log(arrayOfString);




    type AreaNumber = {
        height: number;
        weight: number;
    }

    type Height = AreaNumber["height"]        //look up type

    // type AreaString = {
    //     height: string;
    //     weight: string;
    // }

    // type AreaString ={
    //     [key in "height" | "weight"] : string
    // }

    //use mapped
    // type AreaString = {
    //     // [key in keyof AreaNumber] : string
    //     [key in keyof AreaNumber]: boolean
    // }





    // use generic

    
    // T=> {height: string; weight: number}
    // key = T['height']
    type AreaString<T> = {
        // [key in keyof AreaNumber]: string
        [key in keyof T]: T[key]
    }

    const area1: AreaString<{height: string; weight: number}> ={
        height: '100',
        weight:  100
    }

}