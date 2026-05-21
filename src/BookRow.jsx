import BookDetails from "./BookDetails"
import BookFeature from "./BookFeature"


function BookRow({book}) {
    return (
      <>
            <BookDetails title={book.title} author = { book.author} />
            <BookFeature />
        </>
    )
}


export default BookRow