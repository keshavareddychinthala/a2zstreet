function pattern(n){
let start=1;
for(let i=1;i<=n;i++){
    let res=""
    for(let j=1;j<=i;j++){
      res+=`${start} `;
      start++;
    }
    console.log(res)
}

}
pattern(5)