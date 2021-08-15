export default function User ({user, showPosts}){

    return (
        <div>
            id: {user.id} - {user.name} <br/>
            <button onClick={()=> showPosts(user)}>details</button>

        </div>
    );
}
