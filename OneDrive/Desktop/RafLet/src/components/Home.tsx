import { ItemType } from "../@types/item";
import ItemHome from "./ItemHome";
import Footer from "./Footer";
import "./home.css"
import "./footer.css"

const items : ItemType[]= [
    {
        id: "iubwf-wbfiuf0wefnu-fweukfbnk",
        title: "Tricou cu imprimeu custome",
        img: [
            "./src/assets/images/image1.jpeg"
        ],
        sizes: 
            {
                size: "S",
                available: true,
                pieces: 5,
                color: "red",
                discount: 10
            } 
        ,
        price: 150,
        favorite: false,
        cart: false,
        description: "fweybfwubfu ybwfeybwefb webyfuewfb iufwebnfiuwen"
    },
    {
        id: "iubwf-wbfiuf0wefnu-fweukfbnk",
        title: "Tricou cu imprimeu custome",
        img: [
            "./src/assets/images/image1.jpeg"
        ],
        sizes: 
            {
                size: "S",
                available: true,
                pieces: 5,
                color: "red",
                discount: 10
            } 
        ,
        price: 150,
        favorite: false,
        cart: false,
        description: "fweybfwubfu ybwfeybwefb webyfuewfb iufwebnfiuwen"
    },
    {
        id: "iubwf-wbfiuf0wefnu-fweukfbnk",
        title: "Tricou cu imprimeu custome",
        img: [
            "./src/assets/images/image1.jpeg"
        ],
        sizes: 
            {
                size: "S",
                available: true,
                pieces: 5,
                color: "red",
                discount: 10
            } 
        ,
        price: 150,
        favorite: false,
        cart: false,
        description: "fweybfwubfu ybwfeybwefb webyfuewfb iufwebnfiuwen"
    },
    {
        id: "iubwf-wbfiuf0wefnu-fweukfbnk",
        title: "Tricou cu imprimeu custome",
        img: [
            "./src/assets/images/image1.jpeg"
        ],
        sizes: 
            {
                size: "S",
                available: true,
                pieces: 5,
                color: "red",
                discount: 10
            } 
        ,
        price: 150,
        favorite: false,
        cart: false,
        description: "fweybfwubfu ybwfeybwefb webyfuewfb iufwebnfiuwen"
    },
    {
        id: "iubwf-wbfiuf0wefnu-fweukfbnk",
        title: "Tricou cu imprimeu custome",
        img: [
            "./src/assets/images/image1.jpeg"
        ],
        sizes: 
            {
                size: "S",
                available: true,
                pieces: 5,
                color: "red",
                discount: 10
            } 
        ,
        price: 150,
        favorite: false,
        cart: false,
        description: "fweybfwubfu ybwfeybwefb webyfuewfb iufwebnfiuwen"
    },
    {
        id: "iubwf-wbfiuf0wefnu-fweukfbnk",
        title: "Tricou cu imprimeu custome",
        img: [
            "./src/assets/images/image1.jpeg"
        ],
        sizes: 
            {
                size: "S",
                available: true,
                pieces: 5,
                color: "red",
                discount: 10
            } 
        ,
        price: 150,
        favorite: false,
        cart: false,
        description: "fweybfwubfu ybwfeybwefb webyfuewfb iufwebnfiuwen"
    },
    {
        id: "iubwf-wbfiuf0wefnu-fweukfbnk",
        title: "Tricou cu imprimeu custome",
        img: [
            "./src/assets/images/image1.jpeg"
        ],
        sizes: 
            {
                size: "S",
                available: true,
                pieces: 5,
                color: "red",
                discount: 10
            } 
        ,
        price: 150,
        favorite: false,
        cart: false,
        description: "fweybfwubfu ybwfeybwefb webyfuewfb iufwebnfiuwen"
    }
]

const Home = () => {

    return (
        <div className="home">
            <div className="filter-items">
                <button>
                    <img src="./src/assets/favicons/menu.png" alt="filter" />
                </button> 
                <h4>Filtre</h4>
                <h4>Numar articole <br /> 100 </h4>
            </div>
            {/* creere pentru mai mult de 50 produse un buton care sa le afisze pe restul */}
            <div className="items">
                {
                    items.map( (item : ItemType) => {
                        return <ItemHome item={item}/>
                    })
                }
            </div>
            <Footer />
        </div>
    );
}

export default Home;