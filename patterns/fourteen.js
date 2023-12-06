function pattern(n){
    let start=97;
    for(let i=1;i<=n;i++){
        for (let j = 0; j <= i; j++) {
            let ch = String.fromCharCode('A'.charCodeAt(0) + j);
            process.stdout.write(`${ch}`)
        }
        console.log(" ")
    }
    
    }
    pattern(5)