
import { Card, Button, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addBook } from '../Redux/slice/bookSlice'
import { FaBookmark } from 'react-icons/fa'

function BookCard({ book }) {

    const dispatch = useDispatch()

    return (
        <Col md={4} lg={3} className="mb-4">
            <Card className="h-100 shadow-sm">

                <Card.Body>
                    <Card.Title>
                        {book.title || 'Unknown Title'}
                    </Card.Title>

                    <Card.Text>
                        <strong>Author:</strong>{' '}
                        {book.author_name
                            ? book.author_name.join(', ')
                            : 'Unknown Author'}
                    </Card.Text>

                    <Card.Text>
                        <strong>First Published:</strong>{' '}
                        {book.first_publish_year || 'Unknown'}
                    </Card.Text>

                    <Button
                        variant="primary"
                        onClick={() => dispatch(addBook(book))}
                    >
                        <FaBookmark className="me-2" />
                        Add to Reading List
                    </Button>

                </Card.Body>

            </Card>
        </Col>
    )
}

export default BookCard