function pattern(n){
  for(let i=0;i<n;i++){
    let start =i%2==0?1:0;
    let j=0;
    let res="";
    while(j<=i){
        res+=`${start} `;
        start=start==0?1:0;
        j++;
    }
    j=0;
    console.log(res)
  }
}
pattern(5)
pattern(10)
pattern(15)