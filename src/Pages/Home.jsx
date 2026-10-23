
import  { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Header from '../Components/Header'
import BookCard from '../Components/BookCard'

function Home() {

    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)

    const searchKey = useSelector(state => state.bookReducer.searchKey)

    const getBooks = async (query) => {
        try {
            setLoading(true)

            const response = await axios.get(
                `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=20`
            )

            setBooks(response.data.docs || [])
        }
        catch (error) {
            console.log(error)
            setBooks([])
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getBooks('javascript')
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchKey.trim()) {
                getBooks(searchKey)
            } else {
                getBooks('javascript')
            }
        }, 400)

        return () => clearTimeout(timer)
    }, [searchKey])

    return (
        <>
            <Header insideHome={true} />

            <Container className="py-4">

                <h2 className="text-center mb-4">
                    Discover Books
                </h2>

                {loading && (
                    <p className="text-center">Loading books...</p>
                )}

                {!loading && books.length === 0 && (
                    <p className="text-center">
                        No books found.
                    </p>
                )}

                <Row>
                    {!loading && books.map(book => (
                        <BookCard key={book.key} book={book} />
                    ))}
                </Row>

            </Container>
        </>
    )
}

export default Home

