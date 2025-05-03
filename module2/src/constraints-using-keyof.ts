{

    //generic constraints using keyof operator

    type Vehicle = {
        bike: string;
        car: string;
        ship: string
    }

    type Owner = 'ship' | 'car' | 'bike'    //manually

    type Owner2 = keyof Vehicle


    // const person: Owner = "" 
    // const person2: Owner2 = "" 



    // const user = {
    //     name: 'nazmul',
    //     age: 22,
    //     roll: 10,
    // }

    // user.name               //'nazmul
    // user['name']            //'nazmul



    // const getPropertyValue = (obj: object, key: string) => {
    // const getPropertyValue = <X, Y>(obj: X, key: Y) => {
    // const getPropertyValue = <X, Y extends "name" | "age" | "roll">(obj: X, key: Y) => {
    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key]
    }

    const user = {
        name: 'nazmul',
        age: 22,
        roll: 10,
    }

    const car = {
        name: 'toyota',
        model: 222,
        
    }

    // const result = getPropertyValue(user, 'jhj')
    const result = getPropertyValue(user, 'name')
    const result2 = getPropertyValue(car, 'model')


}