const mixedArr= [1, 2, 'a', 'b', true, false, null, undefined, {}, [], () => {}];


function countByArray(arr)
{
    const count ={};
    arr.forEach(e=>
    {
        const type=typeof e;
        if(count[type]===undefined)
        {
            count[type]=1;
        }
        else
        {
            count[type]++;
        }
    });
    return count;
};

console.log(countByArray(mixedArr));

    

