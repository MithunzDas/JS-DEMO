const books=[
    {title:'To Kill a Mockingbird', author: 'Harper Lee', year: 1960},
    {title:'1984', author: 'George Orwell', year: 1949},
    {title:'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951},
];

const newBook={ title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 };
const clonedBook=[...books];  //cloning the array og books
clonedBook.push(newBook); //adding the newbook to cloned array

console.log(clonedBook);