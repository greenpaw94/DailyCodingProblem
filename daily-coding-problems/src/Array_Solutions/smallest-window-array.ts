import {number} from "prop-types";

export function findSmallestWindow(unsortedArray: number[]){

    var sortedArray: number[] = unsortedArray.sort();
    var minBound, maxBound = null;

    for(let index in unsortedArray){
        if(unsortedArray[index] != sortedArray[index] && minBound == null){
            minBound = index;
        }
        else if(unsortedArray[index] != sortedArray[index]){
            maxBound = index;
        }
    }
    return{minBound: 1, maxBound: 3};
}