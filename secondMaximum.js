const arr = [20,120,111,215,54,78];
var firstMax=-Infinity
var secondMax=-Infinity
const secMax=()=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]>firstMax){
            secondMax=firstMax
            firstMax=arr[i]
            //console.log(firstMax)
        }
        else if(arr[i]>secondMax && arr[i]<firstMax){
            secondMax=arr[i]
        }
    }
     console.log(secondMax)
}
secMax(arr)
