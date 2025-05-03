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
    type NameAge = Pick<Person, "name" | "age">      //pick name and age



    // omit
    type ContactInfo = Omit<Person, 'name'| 'age'>     //omit name and age


    //required                   
    type PersonRequired = Required<Person>           //make all required


    // readonly

    type PersonReadOnly = Readonly<Person>

    // const person1 = {
    const person1 : PersonReadOnly = {
        name: 'nazmul',
        age: 22,
        email: 'dsksdjk',
        contactNo : 983789
    }

    person1.name = 'akash'




}