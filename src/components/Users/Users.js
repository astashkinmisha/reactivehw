import {useEffect, useState} from "react";
import User from "../User/User";
import {getUser} from "../../services/userService";
import {getPostsOfUser} from "../../services/getPostsOfUser";
import Posts from "../Posts/Posts";
import './Users.css';


export default function Users (){
    let [users, setUsers] = useState([]);
    let [posts, setPosts] = useState(null)

    useEffect(() => {
        getUser().then(value => setUsers([...value]))
    },[])
    const showPosts = (id) => {
        getPostsOfUser(id.id).then(value => setPosts([...value]))
    }
    return (
        <div className={'wrap'}>
            <div className={'Users-block'}>
            {
                users.map(value => <User key={value.id} user={value} showPosts={showPosts}/>)
            }
            </div>
                <div className={'Posts-block'}>
            {
             posts &&  <div className={'border-show'}> {posts.map(value => <Posts key={value.id} posts={value} />)}</div>
            }
                </div>
        </div>
    );
}
