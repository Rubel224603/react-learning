import BookDetails from "./BookDetails"
import BookFeature from "./BookFeature"


function BookRow({ book }) {
    //console.log(book)
    
    return (
      <>
            <BookDetails title={book.title} author = { book.author} feature={book.feature}  />
            <BookFeature feature={ book.feature } />
        </>
    )
}


export default BookRow