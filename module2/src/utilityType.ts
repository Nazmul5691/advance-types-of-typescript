{

    //utility type

    //pick

    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo : number
    }

    type Name = Pick<Person, "name">
    type NameAge = Pick<Person, "name" | "age">



}