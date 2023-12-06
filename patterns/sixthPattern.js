function pattern(n){
    for(let i=n;i>=1;i--){
        let start="";
        for(let j=1;j<=i;j++){
          start+=j+"";
        }
        console.log(start)
    }
}
pattern(5);
pattern(10);
pattern(15);