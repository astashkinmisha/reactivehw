import {useEffect, useState} from "react";
import {Route} from "react-router-dom";
import UserDetails from "./UserDetails";
import User from "./User";
import {getUsers} from "../../services/users.api";


export default function Users (props){

    const {match:{url}, history} = props;

    let [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetching() {
            let usersList = await getUsers();
            setUsers([...usersList]);
        }
        fetching();
    },[])


    return (
        <div>
            {
                users.map(value => <User history={history} user={value} key={value.id}/>)
            }
            <Route path={`${url}/:id`} render={(props) => {
                return <UserDetails{...props}/>
            }}/>
        </div>
    );
}
