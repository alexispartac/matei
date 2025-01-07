import "./cart.css"
import { Link } from "react-router-dom"
import ConnectUser from "../utils/hooks/ConnectUser";
const cart = null;

const Cart = () => {
    const { token } = ConnectUser();
    
    if(!token.user)
        return (
            <div className="cart-continer">
                <h4>Cosul de cumparaturi este gol</h4>
                <p>Daca ai adugat produse in cos la vizita <br /> trecuta pe site, te rugam sa te loghezi.</p>
                <br />
                <Link to="/account">
                    <button>
                        Conecteaza-te
                    </button>
                </Link>
                <br />
                <Link to="/">
                    <p>Sau continua cumparaturile!</p>
                </Link>
            </div>
        );

    if(!cart)
        return (
            <Link to="/">
                <p>Cosul este gol! Continua cumparaturile!</p>
            </Link>
        );
        
    return (
        <h1>Cart</h1>
    );
}

export default Cart;