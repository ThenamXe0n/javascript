function findMaxNumber(numList=[2,3,9,0,4,6,12,33,25,1]){
    let max = 0
    let prevMax=0
    let curr =numList[0]
    for(let i=0;i<numList.length;i++){
        curr=numList[i]
        
        if(max<curr){
            prevMax=max
            max=curr
        }else{
            continue
        }
    }
    console.log("maximum",max,"secondlargest ",prevMax)  
    return max
}
function findMinNumber(numList=[2,3,9,0,4,6,12,33,25,1]){
    let min = numList[0]<numList[1] ? numList[0]:numList[1]
    //  let min =        2 
    let curr =numList[0]
    for(let i=0;i<numList.length;i++){
        curr=numList[i]
        
        if(min>curr){
            min=curr
        }else{
            continue
        }
    }
    console.log("minmum",min)  
    return min
}
findMaxNumber([140,55,77,100,110])
// findMinNumber([55,77,100,110])