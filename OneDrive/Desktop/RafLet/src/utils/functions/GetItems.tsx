// import axios from "axios";

// const GET_ITEMS_URL = "undefined"
export const GetItems = async(/*userToken : string*/)  => {
    try {
        // const response = await axios.get(GET_ITEMS_URL,
        //     {
        //         headers: {
        //             'Authorization': `Bearer ${userToken}`,
        //             'Content-Type': 'application/json; charset=utf-8',
        //             'Accept': 'application/json'
        //         },
        //         withCredentials: true
        //     }
        // );
        // const items = JSON.parse(response.data.body); 
        const items = [
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
        return items;
        
    }catch(error: unknown) {
        if (!error) {
            console.log('Network error:', error);
        } else {
            console.log('Error response:', error);
        }
    }

};
