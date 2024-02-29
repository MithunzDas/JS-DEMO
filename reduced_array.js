// numArray=[1,2,3,4,5];
// const reduced=numArray.reduce((acc,curr)=>acc+curr,1);
// console.log(reduced);

obj=
    [  {
            name:'Mithun Das',
            cost:15,
        },
        {
            name:'Sourav Roy',
            cost:16,
        }
        
    ];
    const r=obj.reduce((acc,curr)=>acc+curr.cost,0);
    console.log(r);