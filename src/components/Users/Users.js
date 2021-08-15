import {useEffect, useState} from "react";
import User from "../User/User";
import {getUser} from "../../services/userService";


export default function Users (){
    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUser().then(value => setUsers([...value]))
    },[])
    return (
        <div>
            {
                users.map(value => <User key={value.id} user={value}/>)
            }
        </div>
    );
}
