import * as React from "react";
import { Link } from "react-router-dom"
import { ItemContext } from "../features/Context/ItemContext";
import { ItemType } from "../@types/item";
import ConnectUser from "../utils/hooks/ConnectUser";
import ItemHome from "./ItemHome";
import Footer from "./Footer";
import "./favorite.css"

const Favorite = () => {
    const { token } = ConnectUser();
    const context = React.useContext(ItemContext); 

    let items; 
    if (context) 
        items = context.items; 
    else
        items = undefined;
    if(!items)
        throw new Error("Nu s-au putut incarca datele!");
        
    if(!token.user)
        return (
        <>
            <h1 className="favorite-title">Favorite</h1>
            <div className="favorite-continer">
                <img src="./src/assets/images/favorite-img.png" alt="" />
                <h1>Adauga</h1>
                <p>Salveaza rapid articolele pentru mai tarziu</p>
                <Link to="/account">
                    <button className="login-button">
                        Conecteaza-te
                    </button>
                </Link>
            </div>
            <div className="space"></div>
            <div className="favorite-to-home">
                <h3>Daca nu doresti sa intrii in contul tau continua sa vizionezi produsele.</h3>
                    <p>
                    <Link to="/">
                        Continua cumparaturile!
                    </Link>
                    </p>
            </div>
            <Footer />
        </>
        );

    return (
        <div>
            {
                items ?
                items.map( (item: ItemType) => {
                    return <ItemHome item={item}/>
                })
                :
                <h1 className="favorite-empty">Nu aveti niciun produs favorit. Intorceti-va la cuparaturi!</h1>
            }
            <Footer />
        </div>
    );

}

export default Favorite;