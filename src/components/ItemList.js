import { useState, useEffect} from "react"
//styles
import './ItemList.css'

export default function ItemList() {

    const[Items,setItems]=useState([])


    useEffect(() => {

        fetch('http://localhost:3000/data')
        .then(response=>response.json())
        //sorting the data in fetching the json format itself
        .then(json=>setItems(json.sort((a, b) => a.id - b.id)));
       
    }, [])


    return (
        <div className="item-list">
            <h1>Item List</h1>
            <ul>
                {Items.map(data=>(
                    
                <li key={data.id}>
                <h2>{data.id}</h2>
                <h3>{data.name}</h3>
                </li>

                ))}
            </ul>
            
        </div>
    )
}
