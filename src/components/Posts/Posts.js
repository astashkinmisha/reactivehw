import {getPosts} from "../../services/postService";
import {useEffect, useState} from "react";
import Post from "../Post/Post";

export default function Posts (){

    let [posts, setPosts] = useState([])

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
