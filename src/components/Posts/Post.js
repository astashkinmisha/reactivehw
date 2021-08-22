import {useHistory} from "react-router";

export default function Post ({post}){
    let history = useHistory();
    let navigate = () => {
        history.push('/posts/' + post.id, post)
    }
    return (
        <div>
            {post.title} - <button onClick={navigate}> post details</button>
        </div>
    );
}
