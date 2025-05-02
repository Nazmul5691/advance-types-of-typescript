{


    const addCourseToStudent = <T extends {id: number, name: string, email: string}>(student: T) => {
        const course = 'Next Level'

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        takeAche: string;
    }>({
        id: 22,
        name: 'x',
        email: 'x@email.com',
        takeAche: 'gorib'
    })

    const student2 = addCourseToStudent({
        id: 22,
        name: 'y',
        email: 'x@email.com',
        gariAche: 'bmw',
        bikeAche: 'Yamaha'
    })

    const student3 = addCourseToStudent({
        id: 22,
        name: 'x',
        email: 'z@email.com',
        takeAce: 'mutaMuti'
    })


}