// function pattern(n){
//     for(let i=1;i<=n;i++){
//       for(let j=1;j<=n-1;j++){
//         process.stdout.write(' ');
//       }
//       for(let k=i;k<=2*i-1;k++){
//         process.stdout.write('*');
//       }
//       console.log( );
//     }
    
// }
// pattern(5)
function pattern(n){
 const upwordPyramid =(n)=>{
  for(let i=1;i<=n;i++){
      for(let j=1;j<n-i;j++){
        process.stdout.write(" ");
      }
      for(let k=0;k<=2*i-1;k++){
        process.stdout.write('*');
      }
      console.log()
    }
 }
 const downwardPyramid =(n) =>{
  for(let i=1;i<=n;i++){
    for(let j=0;j<i;j++){
      process.stdout.write(" ");
    }
    for(let k=(n-i)*2-1;k>=0;k--){
      process.stdout.write('*');
    }
    console.log()
  }

 }
 upwordPyramid(n);
 downwardPyramid(n);
}
pattern(5);