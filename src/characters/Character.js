export default function Character ({name, surname, age, info, photo}){
    return (
        <div>
            <h2>Name: {name} Surname: {surname}</h2>
            <h3>Age:{age}</h3>
            <p>Bio: {info}</p>
            <img src={photo} alt=""/>
        </div>
    );
}
