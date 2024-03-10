// Define a book class
class Book 
{
    constructor(id,title,author,year)
    {
        this.id=id;
        this.title=title;
        this.author=author;
        this.year=year;
        this.ratings=[];
        this.reviews=[];
    }
}

// collection of books to store
let books=[];

//Function to Add new Book
function addBook(title,author,year)
{
    let id=books.length+1;
    let newBook=new Book(id,title,author,year);
    books.push(newBook);
    console.log(`${title} has been added to the collection...`);
}

//Function to remove a book from Collection by ID
function removeBook(id)
{
    const index=books.findIndex(book=>book.id===id);
    if(index!==-1)
    {
        let removedBook=books.splice(index,1)[0];
        console.log(`${removedBook} has been removed from the collection...`);
    }
    else
    {
        console.log(`Book with ID ${id} not found in the collection... `)
    }
}

// Function to search book by Title
function searchBookByTitle(title)
{
    let matchingBooks=books.filter(book=>book.title.toLowerCase().includes(title.toLowerCase()));
    if(matchingBooks.length>0)
    {
        console.log(`Matching Book: `);
        matchingBooks.forEach(book=>console.log(`${book.title} by ${book.author} ${book.year}...`));
    }
    else
    {
        console.log("No Matching book found...")
    }
}

// Function to add ratings to books by ID
function addRatingToBook(id,rating)
{
    let book=books.find(book=>book.id===id);
    if(book)
    {
        book.ratings.push(rating);
        console.log(`Rating ${rating} is added to ${book.title}...`);
    }
    else{
        console.log(`Book with ID ${id} not found in the collection...`);
    }
}

//Function to add review to books by ID
function addReviewToBook(id,review)
{
    let book=books.find(book=>book.id===id);
    if(book)
    {
        book.reviews.push(review);
        console.log(`Review ${review} is added to ${book.title}...`);
    }
    else{
        console.log(`Book with ID ${id} not found in the collection...`);
    }
} 

// Function to compute Average rating to allBooks
function computeAverageRating()
{
    let totalRatings=0;
    let totalBooks=0;

    books.forEach(book=>
        {
            if(book.ratings.length>0)
            {
                totalRatings+=book.ratings.reduce((acc,curr)=>acc+curr,0);
                totalBooks+=1;
            }
        });

        if(totalBooks>0)
        {
            let average=totalRatings/totalBooks;
            console.log(`Average Ratings of Books: ${average.toFixed(2)}`);
        }
        else{
            console.log("No Rating found in the collection");
        }
}

// Menu function
function menu(option) {
    switch (option) {
        case 1:
            addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925);
            addBook("To Kill a Mockingbird", "Harper Lee", 1960);
            addBook("1984", "George Orwell", 1949);
            addBook("The Catcher in the Rye", "J.D. Salinger", 1951);
            break;
        case 2:
            removeBook(2);
            break;
        case 3:
            searchBookByTitle("1984");
            break;
        case 4:
            addRatingToBook(1, 4.5);
            break;
        case 5:
            addReviewToBook(1, "A captivating read!");
            break;
        case 6:
            computeAverageRating();
            break;
        case 7:
            console.log("Exiting...");
            break;
        default:
            console.log("Invalid option.");
    }
}

// Simulate menu usage
menu(1);
menu(2);
menu(3);
menu(4);
menu(5);
menu(6);
menu(7);
