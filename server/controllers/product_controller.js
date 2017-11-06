module.exports = {
    getProduct: (req, res, next) => {
        const db = req.app.get('db');
        // console.log(1, req.params.id);
        db.get_product(req.params.id)
        .then(response => {
            res.status(200).send(response)
            
        }).catch(err => res.status(500).send(err));        
    },
    readProducts: (req, res, next) => {
        const db = req.app.get('db');
        db.all_products()
        .then(response => {
            res.status(200).send(response)
        }).catch(err => res.status(500).send(err));
    },
    addProduct: (req, res, next) => {
        const db = req.app.get('db');
        const {productid, title, img, price} = req.body
        db.add_product([productid, title, img, price])
        .then(products => {
            res.status(200).send(products)
        }).catch(err => res.status(500).send(err));
    }
}