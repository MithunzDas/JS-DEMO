
function priceArray(price)
{
    return (price+(0.1*price)).toFixed(2);
}

function getArray(thing)
{
    return thing.map(t=>
        {
            let priceWithTax=priceArray(t.price);
            return{
                ...t,
                priceWithTax:priceWithTax
            };
        });

}



//sample data
const thing=[
                { name: "book", price: 10 }, 
                { name: "pen", price: 2 }, 
                { name: "notebook", price: 5 }
            ];

            console.log(getArray(thing));