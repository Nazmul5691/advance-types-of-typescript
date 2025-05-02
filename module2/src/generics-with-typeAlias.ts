{
    //

    // generics type

    type GenericsType = Array<number>
    // type GenericsType = Array<string>
    // type GenericsType = Array<boolean>


    // const rollNumber: number[] = [1, 2, 3]
    // const rollNumber: Array<number> = [1, 2, 3]
    // const rollNumber: GenericsType = [1, 2, 3]


    // const mentors: string[] = ['x', 'y', 'z']
    // const mentors: Array<string> = ['x', 'y', 'z']
    // const mentors: GenericsType = ['x', 'y', 'z']


    // const boolArray: boolean[] = [true, false, true]
    // const boolArray: Array<boolean> = [true, false, true]
    // const boolArray: GenericsType = [true, false, true]



    // make dynamic generics
    const add = (x: number, y: number): number => x + y

    add(20, 30)

    // type GenericsType2<param> = Array<param>
    type GenericsType2<T> = Array<T>            //T use for industry level or Typescript

    const rollNumber: GenericsType2<number> = [1, 2, 3]

    const mentors: GenericsType2<string> = ['x', 'y', 'z']

    const boolArray: GenericsType2<boolean> = [true, false, true]



    // use it in object

    // const user: GenericsType2<object> = [
    // const user: GenericsType2<{ name: string, age: number }> = [
    //     {
    //         name: 'nazmul',
    //         age: 22,
    //     },
    //     {
    //         name: 'akash',
    //         age: 22,
    //     }
    // ]


    type User = {
        name: string,
        age: number
    }

    interface User2 {
        name: string,
        age: number
    }


    // const user: GenericsType2<User> = [
    const user: GenericsType2<User2> = [
        {
            name: 'nazmul',
            age: 22,
        },
        {
            name: 'akash',
            age: 22,
        }

    ]


    // generic tuple

    const user5: [string, string] = ['akash', 'batash']


    type GenericTuple<X, Y> = [X, Y]
    const user6: GenericTuple<string, string> = ['akash', 'batash']

    const user7: GenericTuple<number, {name: string, age: number}> = [1234, {name: 'nazmul', age: 444}]

    //
}