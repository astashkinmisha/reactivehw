import Post from "../Post/Post";

export default function Posts ({posts}){
    return (
        <div>
            <Post post={posts}/>
        </div>
    );
}
