import {useEffect, useState} from "react";
import {getUsers} from "../../services/FetchService";
import User from "../User/User";

export default function Users (){
    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    })
    return (
        <div>
            {
                users.map(value => <User key={value.id} user={value}/>)
            }
        </div>
    );
}
