import {useEffect, useState} from "react";
import {getPosts, getUsers} from "../../services/FetchService";
import Post from "../Post/Post";


export default function Posts (){
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(value => setPosts([...value]))
    })
    return (
        <div>
            {
                posts.map(value => <Post key={value.id} post={value}/>)
            }
        </div>
    );
}
