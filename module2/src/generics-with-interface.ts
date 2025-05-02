{

    // interface Developer<T,X> {
    interface Developer<T,X = null> {     //set default value as null if there is no value
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        };
        smartWatch: T;
        bike?: X;
    }


    type PoorDeveloper = {
        brand: string, 
        display:string
    }

    // const poorDeveloper: Developer<{brand: string, display:string}> = {
    // const poorDeveloper: Developer<PoorDeveloper, null> = {         // give null for 2nd argument
    // if set default value for X , no need to give 2nd argument
    const poorDeveloper: Developer<PoorDeveloper> = {                 
        name: 'nazmul',
        computer: {
            brand: 'hp',
            model: 'corei8',
            releaseYear: 2010
        },
        smartWatch: {
            brand: 'casio',
            display: 'normal'
        }
    }


    interface RichDeveloper {
        brand: string, 
        display: string, 
        heartTrack: boolean, 
        sleepTrack: boolean
    }
    // const richDeveloper: Developer<{brand: string, display: string, heartTrack: boolean, sleepTrack: boolean}> 


    interface Bike  {
        brand: string, 
        model: string
    }
    const richDeveloper: Developer<RichDeveloper, Bike> 
    = {
        name: 'arif',
        computer: {
            brand: 'apple',
            model: 'corei8',
            releaseYear: 2020
        },
        smartWatch: {
            brand: 'apple',
            display: 'led',
            heartTrack: true,
            sleepTrack: true
        },
        bike: {
            brand: 'Yamaha',
            model: 'FZ'
        }
    }

}