{
    //

    type User1 = {
        name: string;
        age: number;
    }

    const user1: User1 = {
        name: 'nazmul',
        age: 100,
    }


    // interface
    interface User2 {
        name: string;
        age: number;
    }

    const user2: User2 = {
        name: 'nazmul',
        age: 22
    }


    type rollNumber1 = number    // type alias can be used in all primitive type data 
    interface rollNumber2 {
        // interface can not be used in all primitive type data 
    }

    // type alias can be used in all primitive type data and object type
    // interface only used in object type data 


    // extend with type alias
    type UserWithRole1 = User1 & { role: number }

    const userWithRole1: UserWithRole1 = {
        name: 'nazmul',
        age: 22,
        role: 10
    }

    // extend with type interface
    interface UserWithRole2 extends User2 {
        role: number;
    }

    const userWithRole2: UserWithRole2 = {
        name: 'nazmul',
        age: 22,
        role: 100
    }


    // type to interface then extends
    interface UserWithRole2 extends User1 {
        role: number;
    }


    // use in an array

    type Roll = number[]
    const roll: Roll = [1, 2, 2]



    interface Roll2 {
        [index: number]: number
    }
    const roll2: Roll2 = [4, 5, 6]


    //use in function

    type Add1 = (num1: number, num2: number) => number;
    const add1: Add1 = (num1, num2) => num1 + num2;


    interface Add2 {
        (num1: number, num2: number) : number;
    }
    const add2: Add2 = (num1, num2) => num1 + num2

    //
}