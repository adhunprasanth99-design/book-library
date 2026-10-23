import  { useState } from 'react'
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeBook, clearBooks } from '../Redux/slice/bookSlice'
import Header from '../Components/Header'
import { FaTrash } from 'react-icons/fa'

function ReadingList() {

    const dispatch = useDispatch()

    const { readingList } = useSelector(state => state.bookReducer)

    const [search, setSearch] = useState('')

    const filteredBooks = readingList.filter(book =>
        book.title?.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <>
            <Header />

            <Container className="py-4">

                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2>My Reading List</h2>

                    <Button
                        variant="danger"
                        onClick={() => dispatch(clearBooks())}
                        disabled={readingList.length === 0}
                    >
                        Clear All
                    </Button>
                </div>

                <Form.Control
                    type="text"
                    placeholder="Search saved books..."
                    className="mb-4"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />

                <Row>
                    {filteredBooks.map(book => (
                        <Col md={4} lg={3} className="mb-4" key={book.key}>
                            <Card className="h-100 shadow-sm">
                                <Card.Body>

                                    <Card.Title>{book.title}</Card.Title>

                                    <Card.Text>
                                        <strong>Author:</strong>{' '}
                                        {book.author_name
                                            ? book.author_name.join(', ')
                                            : 'Unknown Author'}
                                    </Card.Text>

                                    <Button
                                        variant="danger"
                                        onClick={() => dispatch(removeBook(book.key))}
                                    >
                                        <FaTrash className="me-2" />
                                        Remove
                                    </Button>

                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {filteredBooks.length === 0 && (
                    <p className="text-center text-muted">
                        No books found in your Reading List.
                    </p>
                )}

            </Container>
        </>
    )
}

export default ReadingList