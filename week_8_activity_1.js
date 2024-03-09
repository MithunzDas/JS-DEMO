const books=[
    {title:'To Kill a Mockingbird', author: 'Harper Lee', year: 1960},
    {title:'1984', author: 'George Orwell', year: 1949},
    {title:'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951},
];

books.forEach(b=>
    {
        console.log(`title: ${b.title}, author: ${b.author}, year: ${b.year}`);
    })