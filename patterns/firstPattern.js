function pattern(n){
    for(let i=0;i<n;i++){
        console.log(Array.from({length:n}).fill("*").join(""));
    }
}
pattern(5);
pattern(10);
pattern(15);
pattern(20);