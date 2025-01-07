import React from "react";
import { ItemContext } from "../features/Context/ItemContext";
import { ItemType } from "../@types/item";
import Footer from "./Footer";
import "./item.css"
import "./footer.css"

const Item: React.FC<{ item: ItemType }> = ({ item }) => {
    const itemContext = React.useContext(ItemContext);
    const [favorite, setFavorite] = React.useState(false);
    const [describe, setDescribe] = React.useState(false);
    const [maintenance, setMaintenance] = React.useState(false);
    const [delivery, setDelivery] = React.useState(false);
    
    
    if (!itemContext) 
        throw new Error('Componenta trebuie să fie folosit în interiorul unui ItemProvider');

    const {handleSetOneItem} = itemContext;

    const handleFavorite = () => {
        setFavorite(!favorite);
        // modifica in baza de date statusul de favorit
    }

    const handleDescribe = () => {
        setDescribe(!describe);
    }
    const handleMaintenance = () => {
        setMaintenance(!maintenance);
    }
    const handleDelivery = () => {
        setDelivery(!delivery);
    }

    return (
        <div className="item">
            <img className="image" src={item.img[0]} alt="1" />
                <button className="heart-button" onClick={handleFavorite}>
                {
                    !favorite ?
                    <img className="heart" src="./src/assets/favicons/heart-empty.png" alt="heart" />
                    :
                    <img className="heart" src="./src/assets/favicons/heart-full.png" alt="heart" />
                }
                </button>
                <button className="back-button" onClick={handleSetOneItem}>
                    <img className="back" src="./src/assets/favicons/back-button.png" alt="heart" />
                </button>
                <div className="details">
                    <h5>{item.title}</h5>
                    <h3>{item.price} RON</h3>
                    <p> Culoare - {item.sizes?.color}</p>
                    <div style={{backgroundColor:`${item.sizes?.color}`, width:"40px", height:"40px"}}></div>
                    <p> Marime - {item.sizes?.size}</p>
                    <button>
                        <h2>Adauga - {item.price} RON</h2>
                    </button>
                    <h5> Livrare gratuita pentru total peste 250 RON</h5>
                    <h5> Retur 15 RON</h5>
                    <div onClick={handleDescribe}>
                        <h5> DESCRIERE </h5>
                        <img className="arrow-down" src="./src/assets/favicons/down-arrow.png" alt="arrow" />
                        {
                            describe ?
                            <div className="describe">
                                <p>{item.description}</p>
                            </div>
                            : null
                        }
                    </div>
                    <div onClick={handleMaintenance}>
                        <h5> COMPOZITIE SI INTRETINERE </h5>
                        <img className="arrow-down" src="./src/assets/favicons/down-arrow.png" alt="arrow" />
                        {
                            maintenance ?
                            <div className="maintenance">
                                <p>
                                Material: 60% BUMBAC, 40% POLIESTER washing
                                SPĂLĂLAŢI LA MAŞINĂ DE SPĂLAT, MAX. TEMP.30 ° C bleaching
                                NU FOLOSIŢI ÎNĂLBITOR drying
                                NU USCAŢI PRIN CENTRIFUGARE ironing
                                CĂLCAŢI LA TEMP.MAX. 110 ° C - FĂRĂ ABUR preservation
                                NU SE CURĂŢA CHIMIC
                                </p>
                            </div>
                            : null
                        }
                    </div>
                    <div onClick={handleDelivery}>
                        <h5> LIVRARE SI RETUR </h5>
                        <img className="arrow-down" src="./src/assets/favicons/down-arrow.png" alt="arrow" />
                        {
                            delivery ?
                            <div className="delivery">
                                <p>
                                Politica de expediere <br />
                                        Ridicare din magazin <br />
                                        GRATUITĂ <br />
                                        3-6 zile lucrătoare <br />

                                        Cargus Ship&Go - plata online: <br />
                                        10,99 RON* <br />
                                        3-6 zile lucrătoare <br />

                                        FanCourier Collect Point - plata online: <br />
                                        10,99 RON* <br />
                                        3-6 zile lucrătoare <br />

                                        Cargus Ship&Go - plata la livrare: <br />
                                        13,99 RON* <br />
                                        3-6 zile lucrătoare <br />

                                        FanCourier - Plata online: <br />
                                        16,99 RON* <br />
                                        3-6 zile lucrătoare <br />

                                        Cargus Curier - Plata la livrare: <br />
                                        18,99 RON* <br />
                                        3-6 zile lucrătoare <br />
                                        * - Livrare gratuită de la 159 RON <br />
                                </p>
                            </div>
                            : null
                        }
                    </div>
                </div>
            <Footer />
        </div>    
    );
}


export default Item;