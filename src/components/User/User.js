export default function User ({user: {id, name, age}}){

    return (
        <div>
            id: {id} - {name} <br/>
            age: {age} <br/>
        </div>
    );
}
