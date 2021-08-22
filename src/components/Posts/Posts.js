import {useEffect, useState} from "react";
import {getPosts} from "../../services/posts.api";
import PostDetails from "./PostDetails";
import {Route} from "react-router-dom";
import Post from "./Post";



export default function Posts (props){

    const {match:{url}, history} = props;

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetching() {
            let postsList = await getPosts();
            setPosts([...postsList]);
        }
        fetching();
    },[])


    return (
        <div>
            {
                posts.map(value => <Post history={history} post={value} key={value.id}/>)
            }
            <Route path={`${url}/:id`} render={(props) => {
                return <PostDetails{...props}/>
            }}/>
        </div>
    );
}
