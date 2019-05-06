import {number} from "prop-types";

export function productArray(initialArray:number[]): number[] {

    return multiply(initialArray);
}

function multiply(initialArray: number[]): number[]{

    var product: number = initialArray[0];
    var productArray: number[] = new Array(initialArray.length);
    var currentIndex = 0;

    for(let currentValue of initialArray){
        product *= currentValue;
    }

    for(let currentValue of initialArray){
        productArray[currentIndex] = product/currentValue;
        currentIndex++;
    }

    return(productArray);
}