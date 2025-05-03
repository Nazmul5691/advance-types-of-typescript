{
 
    //promise

    //simulate
    const createPromise = () =>{
        return new Promise((resolve, reject) =>{
            const data: string = 'something'
            if(data){
                resolve(data)
            }
            else{
                reject('data not found')
            }
        })
    }

    //calling createPromise
    const showData =async() =>{
        const data = await createPromise()
        console.log(data);
    }

    showData()






}