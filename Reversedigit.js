let a =321;
let sum =0;
while(a!==0)
{
    let ld= a%10;
sum= (sum*10)+ld
a=Math.floor(a/10)
}
console.log(sum)
