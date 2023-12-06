function pattern(n){
    for(let i=1;i<=n;i++){
        let pat="";
        for(let j=i;j<=i*2-1;j++){
         pat+="*"+"";
        }
        console.log(pat)
    }
}
pattern(3);
pattern(5);
pattern(7);
