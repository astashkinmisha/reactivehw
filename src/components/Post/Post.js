export default function Post ({post: {title, body, id}}){
    return (
        <div>
            {id} - {title}
        </div>
    );
}
