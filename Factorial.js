function Fact(n){
    if(n>1){
        return n * Fact(n-1)
    }
    else{
        return 1
    }
    
}

console.log(Fact(5));
