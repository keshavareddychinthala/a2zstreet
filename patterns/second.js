function pattern(n){
   for(let i=1;i<=n;i++){
    let str ="";
    for(let j=1;j<=i;j++){
       str+="*"+"";
    }
    console.log(str);
   }
}
pattern(5)
pattern(10)
pattern(15)