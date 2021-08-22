import {useHistory} from "react-router";

export default function User ({user}){
    let history = useHistory();

    console.log(user);
    let navigate = () => {
        history.push('/users/' + user.id, user)
    };
    return (
        <div>
            {user.name} - <button onClick={navigate}> user details</button>
        </div>
    );
}
