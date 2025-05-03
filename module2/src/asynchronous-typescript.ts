{

    //promise

    // //simulate
    // const createPromise = () =>{
    //     return new Promise((resolve, reject) =>{
    //         const data: string = 'something'
    //         if(data){
    //             resolve(data)
    //         }
    //         else{
    //             reject('data not found')
    //         }
    //     })
    // }

    // //calling createPromise
    // const showData =async() =>{
    //     const data = await createPromise()
    //     console.log(data);
    // }

    // showData()






    // //simulate
    // const createPromise = (): Promise<string> =>{
    //     return new Promise<string>((resolve, reject) =>{
    //         const data: string = 'something'
    //         if(data){
    //             resolve(data)
    //         }
    //         else{
    //             reject('data not found')
    //         }
    //     })
    // }

    // //calling createPromise
    // const showData =async(): Promise<string> =>{
    //     const data: string = await createPromise();
    //     return data;
    //     // console.log(data);
    // }

    // showData()


    // // for boolean
    // //simulate
    // const createPromise = (): Promise<boolean> => {
    //     return new Promise<boolean>((resolve, reject) => {
    //         const data: boolean = true;
    //         if (data) {
    //             resolve(data)
    //         }
    //         else {
    //             reject('data not found')
    //         }
    //     })
    // }

    // //calling createPromise
    // const showData = async (): Promise<boolean> => {
    //     const data: boolean = await createPromise();
    //     return data;
    //     // console.log(data);
    // }

    // showData()








    // for object
    // //simulate

    // type Something = {
    //     something : string
    // }
    // // const createPromise = (): Promise<{something : string}> => {
    // const createPromise = (): Promise<Something> => {
    //     // return new Promise<{something : string}>((resolve, reject) => {
    //     return new Promise<Something>((resolve, reject) => {
    //         // const data: {something : string} = {something: 'something'};
    //         const data: Something = {something: 'something'};
    //         if (data) {
    //             resolve(data)
    //         }
    //         else {
    //             reject('data not found')
    //         }
    //     })
    // }

    // //calling createPromise
    // // const showData = async (): Promise<{something : string}> => {
    // const showData = async (): Promise<Something> => {
    //     // const data: {something : string} = await createPromise();
    //     const data: Something = await createPromise();
    //     return data;
    //     // console.log(data);
    // }

    // showData()








    //simulate
    type ToDo = {
        userId: number, 
        id: number, 
        title: string, 
        completed: boolean
    }

    const getToDo = async (): Promise<ToDo> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await response.json();
        // console.log(data);
        return data;
    }

    getToDo()

    type Something = {
        something: string
    }

    const createPromise = (): Promise<Something> => {
        return new Promise<Something>((resolve, reject) => {
            const data: Something = { something: 'something' };
            if (data) {
                resolve(data)
            }
            else {
                reject('data not found')
            }
        })
    }

    //calling createPromise
    const showData = async (): Promise<Something> => {
        const data: Something = await createPromise();
        return data;
        // console.log(data);
    }

    showData()








}