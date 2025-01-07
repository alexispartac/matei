import React from "react";
import { ItemType } from "../@types/item";
import "./itemhome.css"
import Item from "./Item";
import { ItemContext } from "../features/Context/ItemContext";

const ItemHome: React.FC<{ item: ItemType }> = ({ item }) => {
    const [favorite, setFavorite] = React.useState(false);
    const itemContext = React.useContext(ItemContext);

    if (!itemContext) 
        throw new Error('Componenta trebuie să fie folosit în interiorul unui ItemProvider');

    const {oneItem, handleSetOneItem} = itemContext;

    const handleFavorite = () => {
        setFavorite(!favorite);
        // modifica in baza de date statusul de favorit
    }

    return (
        <div key={item.id}>
            <div className="item-home">
                <img className="image" onClick={handleSetOneItem} src={item.img[0]} alt="1" />
                <button onClick={handleFavorite}>
                {
                    !favorite ?
                    <img src="./src/assets/favicons/heart-empty.png" alt="heart" />
                    :
                    <img src="./src/assets/favicons/heart-full.png" alt="heart" />
                }
                </button>
                <div>
                    <h5>{item.title}</h5>
                    <h3>{item.price} RON</h3>
                </div>
            </div>    
            {
                !oneItem    
                ?
                null
                :
                <Item item={item}/>
                }
        </div>
    );
}


export default ItemHome;