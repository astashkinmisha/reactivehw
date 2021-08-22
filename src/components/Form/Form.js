import {useState} from "react";
import {postCars} from "../../services/CarService";

export default function Form (){

    let [formM, setModels] = useState('');
    let [formP, setPrices] = useState(0);
    let [formY, setYears] = useState(0);
    let car = {model: formM, price: formP, year: formY}

    let addCar = (e) => {
        e.preventDefault();
        postCars(car);
    };
    let changeModel = (ev) => {
setModels(
    ev.target.value,
)
        console.log(formM);
    };
    let changePrice = (ev) => {
        setPrices(
            ev.target.value,
        )
        console.log(formP);
    };
    let changeYear = (ev) => {
        setYears(
            ev.target.value,
        )
        console.log(formY);
    };
    return (
        <div>
            {
                <form onClick={addCar}>
                    <input type="text" placeholder={'model'} name={'model'} value={formM}  onChange={changeModel} maxLength={20}/>
                    <input type="number" placeholder={'price'} name={'price'} value={formP} onChange={changePrice} min={0}/>
                    <input type="number" placeholder={'year'} name={'year'} value={formY} onChange={changeYear} min={1990} max={2021}/>
                    <button>submit</button>
                </form>
            }
        </div>
    );
}
