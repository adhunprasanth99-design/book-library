
import { Container } from 'react-bootstrap'
import { FaBookOpen, FaHeart } from 'react-icons/fa'

function Footer() {
    return (
        <footer
            className="text-light mt-5 py-4"
            style={{ backgroundColor: '#14213d' }}
        >
            <Container className="text-center">

                <h5 style={{ color: '#fca311' }}>
                    <FaBookOpen className="me-2" />
                    Book Library
                </h5>

                <p className="mb-2">
                    Discover books and build your own reading list.
                </p>

                <p className="mb-2">
                    Made with <FaHeart style={{ color: '#fca311' }} /> using React
                </p>

                <hr style={{ borderColor: '#fca311' }} />

                <small>
                    © {new Date().getFullYear()} Book Library
                </small>

            </Container>
        </footer>
    )
}

export default Footer