import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import Memes from '../components/Memes';
// import { Redirect } from 'react-router-dom';

export default function Home({ token, user }) {
    // if (!token) {
    //     return <Redirect to="/login" />;
    // }
    return (
        <>
            <Header token={token} user={user} />
            <Container>
                <Memes />
            </Container>
        </>
    );
}
