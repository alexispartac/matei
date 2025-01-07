import path from 'path';


export const uploadImage = (req, res) => {

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    const image = req.files.image;

    const uploadPath = path.join("raflet/src/assets/images", image.name);
    image.mv(uploadPath, (err) => {
        if (err) {
            return res.status(500).send(err);
        }

        res.send('File uploaded!');
    });
};

export const addDiscount = (req, res) => {
    // const discount  = req.body;
    
    // adauga discount la toate produsele din baza de date

    res.send('Discount added!');
}

export const deleteDiscount = (req, res) => {
    const { discount } = req.body;
    console.log(discount);
    // sterge discount la toate produsele din baza de date

    res.send('Discount deleted!');
}


export const addItem = (req, res) => {
    // const  item  = req.body;
    // adauga in baz de date un item

    res.send('Item added!');
}

export const deleteItem = (req, res) => {
    // const { item } = req.body;

    // sterge din baz de date un item

    res.send('Item deleted!');
}
