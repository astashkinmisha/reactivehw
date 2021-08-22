import Car from "../Car/Car";
import Form from "../Form/Form";
import {useEffect, useState} from "react";
import {getCars} from "../../services/CarService";

export default function Cars (){
    let [cars, setCars] = useState([]);


    useEffect(() => {
        getCars().then(value => setCars([...value]))
    },[cars])
    return (
        <div>
            {
                <Form/>
            }
            {
                cars.map(car =>
                    <Car car={car} key={car.id} />)
            }
        </div>
    );
}
