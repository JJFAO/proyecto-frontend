import { Container } from 'react-bootstrap';
import Header from '../components/Header';
// import { Redirect } from 'react-router-dom';

export default function Home({ token }) {
    // if (!token) {
    //     return <Redirect to="/login" />;
    // }
    return (
        <>
            <Header token={token} />
            <Container>
                <h1>Home</h1>
            </Container>
        </>
    );
}
