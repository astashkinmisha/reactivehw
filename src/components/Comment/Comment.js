export default function Comment ({comment: {id, name}}){
console.log({id,name})
    return (
        <div>
            {id} - {name}
        </div>
    );
}
