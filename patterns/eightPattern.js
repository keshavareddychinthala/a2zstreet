function pattern(n){
  for(let i=n;i>=1;i--){
    let str="";
    for(let j=1;j<=i*2-1;j++){
       str+="*"+"";
    }
     for(let j=i;j<=2*i-1;j++){
        
     }
    console.log(str)
  }
}

pattern(5)
pattern(15)
pattern(53)