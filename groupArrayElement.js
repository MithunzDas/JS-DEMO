let A=[1,2,3,4,5,6,7];
let B=[];
let n=3;
let chunkSize=Math.floor(A.length/n);
if(A.length>=n)
{
    for(let i=0;i<A.length;i+=chunkSize)
    {
        B.push(A.slice(i,i+chunkSize));
    }
}
else
{
    console.log("Can't Possible to make sub Array");
}

if(B.length)
{
    console.log(B);
}
