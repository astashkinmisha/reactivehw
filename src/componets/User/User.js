export default function User ({user}){
const {id, name, username, age, address:{street, city, suite, zipcode}, geo:{lat, lng}} = user
    return (
        <div>
                <h1>Name: {id} {name} {username}<h1/>
                    <h2>Age: {age}</h2>
                    <p>Location: {street} {city} {suite} {zipcode}</p>
                    <br/>
                    <p>Geo: {lat} {lng}</p>
        </div>
    );
}
