

    function BookDetails({title, author,feature}) {
        // const author = props.author
        // const title = props.title
        return (
            <div>
                 <p>{ feature }</p>
                <h1>{ title }</h1>
                <p>{ author }</p>
               
            </div>
        )
    }

    export default BookDetails