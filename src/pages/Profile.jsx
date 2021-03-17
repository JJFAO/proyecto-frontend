import Header from '../components/Header';
import User from '../components/User';

export default function Profile(props) {
    return (
        <div>
            <Header {...props} />
            <User user={props.user} token={props.token} />
        </div>
    );
}
