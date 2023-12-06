function pattern(n){
    for(let i=1;i<=n;i++){
        let res="";
        for(let j=1;j<=i;j++){
            res+=`${i} `;
        }
        console.log(res)
    }
}
pattern(5);
pattern(10);
pattern(15);