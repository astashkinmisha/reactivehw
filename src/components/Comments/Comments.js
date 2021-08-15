import {useEffect, useState} from "react";
import {getComments} from "../../services/commentsSevice";
import Comment from "../Comment/Comment";


export default function Comments (){
    let [comments, setComments] = useState([]);

    useEffect(() => {
        getComments().then(value => setComments([...value]))
    },[])
    return (
        <div>
            {
                comments.map(value => <Comment key={value.id} comment={value}/>)
            }
        </div>
    );
}
