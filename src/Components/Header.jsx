import  { useState, useEffect } from 'react'
import { Container, Nav, Navbar, Form, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { searchBook } from '../Redux/Slice/bookSlice'
import { FaBookOpen, FaBookmark } from 'react-icons/fa'

function Header({ insideHome }) {

    const dispatch = useDispatch()

    const { readingList } = useSelector(state => state.bookReducer)

    const [bookCount, setBookCount] = useState(0)

    useEffect(() => {
        setBookCount(readingList.length)
    }, [readingList])

    return (
        <Navbar expand="lg" fixed="top" style={{ backgroundColor: '#14213d' }}>
            <Container>

                <Navbar.Brand
                    as={Link}
                    to="/"
                    style={{
                        textDecoration: 'none',
                        fontSize: '28px',
                        color: '#fca311',
                        fontWeight: 'bold'
                    }}
                >
                    <FaBookOpen className="me-2" />
                    Book Library
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {insideHome && (
                    <Form.Control
                        type="text"
                        placeholder="Search books..."
                        className="ms-lg-4 me-lg-3 my-2 w-25"
                        onChange={e =>
                            dispatch(searchBook(e.target.value.toLowerCase()))
                        }
                    />
                )}

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">

                        <Nav.Link
                            as={Link}
                            to="/reading-list"
                            style={{
                                fontWeight: 'bold',
                                color: 'white'
                            }}
                        >
                            <FaBookmark style={{ color: '#fca311' }} className="me-2" />
                            Reading List

                            <Badge bg="warning" text="dark" className="ms-2">
                                {bookCount}
                            </Badge>
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default Header