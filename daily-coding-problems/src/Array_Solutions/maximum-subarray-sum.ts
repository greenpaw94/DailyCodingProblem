
export function findMaximumSubarraySum(initialArray: number[]): number[]{
    let maximumSumSoFar = 0;
    let runningSum = 0;

    //-----if starting numbers are < 0 skip until first non-negative number
    //-----if adding negative number brings sum below 0, reset running sum
    //-----if
    //-----if negative number does not cause sum to be less than 0, mark the place
    //-----if

    for(let currentIndex in initialArray){
        if(maximumSumSoFar >= 0 && initialArray[currentIndex] >= 0){

            maximumSumSoFar += initialArray[currentIndex];
            //runningSum = 0;
        }else if(true){
            runningSum += initialArray[currentIndex];
        }
    }
    return([1,2,2])
}