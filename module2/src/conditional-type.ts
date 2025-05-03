{

    //conditional type

    type a1 = number
    type a2 = number

    type x = a1 extends null ? true : false       //conditional type
    type y = a1 extends null ? true : a2 extends string ? true : false



    type BoroLucks = {
        car: string;
        bike: string;
        ship: string;
        plane: string;
    }


    // keyof borolucks

    // type CheckVehicle<T> = T extends "car" | "bike" | "ship" | "plane" ? true  : false
    type CheckVehicle<T> = T extends keyof BoroLucks ? true  : false

    type HasCar = CheckVehicle<"carr">
    type HasPlane = CheckVehicle<"plane">
}