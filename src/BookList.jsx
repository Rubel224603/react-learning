
import BookRow from "./BookRow"


const BOOKS = [
    {
        id: 1,
        title: "lorem ipsum is the",
        author: "Mr x",
        is_feature:true
    },
    {
        id: 2,
        title: "lorem ipsum is the",
        author: "Mr x",
        is_feature:true
    },
    {
        id: 3,
        title: "lorem ipsum is the",
        author: "Mr x",
        is_feature:true
    },
    {
        id: 4,
        title: "lorem ipsum is the",
        author: "Mr x",
        is_feature:true
    },
    {
        id: 5,
        title: "lorem ipsum is the",
        author: "Mr x",
        is_feature:true
    }
];


function Booklist() { 
    return (
        <ul>
            { 
                BOOKS.map((book) => { 
                    <li key={ book.id}>
                        <BookRow book={book} />
                    </li>
                    
                })
            }
          
        </ul>

    )
}

export default Booklist