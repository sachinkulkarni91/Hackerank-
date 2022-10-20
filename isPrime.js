function prime(n){
    for(let i=2;i<n-1;i++){
        if(n%i==0){
        console.log("notPrime")
        break
        }
    }
    console.log("isPrime")
}
prime(7)
