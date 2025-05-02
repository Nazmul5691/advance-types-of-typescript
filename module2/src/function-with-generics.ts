{

    const createArray = (param: string): string[] => {
        return [param]
    }

    const res1 = createArray('bangladesh')



    const createArrayWithGeneric = <T>(param: T): T[] =>{
        return [param]
    }

    const res2 = createArrayWithGeneric<string>("bangladesh")
    const res3 = createArrayWithGeneric<number>(22)
    const res4 = createArrayWithGeneric<boolean>(true)
    const res5 = createArrayWithGeneric<{id: number, name: string}>({name: 'nazmul', id: 22})

    type User = {
        id: number, 
        name: string
    }
    const res6 = createArrayWithGeneric<User>({name: 'nazmul', id: 22})




    // with tuple
    const createArrayWithGenericTuple = <T,X>(param1: T, param2: X): [T,X] =>{
        return [param1, param2]
    }

    const res7 = createArrayWithGenericTuple<string, string>('bangladesh', 'asia')
    const res8 = createArrayWithGenericTuple<string, number>('bangladesh', 2222)
    const res9 = createArrayWithGenericTuple<string, {zone: string}>('bangladesh', {zone: 'asia'})




    // const addCourseToStudent = <T>(param: T) =>{
    const addCourseToStudent = <T>(student: T) =>{
        const course = 'Next Level'

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({name: 'x', email: 'x@email.com', age: 22})
    const student2 = addCourseToStudent({name: 'y', email: 'y@email.com', roll: 10})

}