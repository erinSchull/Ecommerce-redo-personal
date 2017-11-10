module.exports = {
    getProductsOnCart: (req, res, next) => {
        const db = req.app.get('db');
        const {productid} = req.params
        db.read_cart_products([productid])
        .then(response => {
            res.status(200).send(response)
        }).catch(err => res.status(500).send(err));
    },
    addToCart: (req, res, next) => {
        const db = req.app.get('db');
        const {productsid} = req.params;
        db.add_to_cart([productsid])
        .then(response => {
            res.status(200).send(response)
        }).catch(err => res.status(500).send(err));
    },
    removeFromCart: (req, res, next) => {
        const db = req.app.get('db');
        const {productsid} = req.params;
        console.log('testing the delete')
        db.delete_from_cart([productsid])
        .then(response => {
            res.status(200).send(response)
        }).catch(err => res.status(500).send(err));
    },
    clearCart: (req, res, next) => {
        console.log('testing the cart clear');
        const db = req.app.get('db');
        db.clear_cart()
        .then(response => {
            res.status(200).send(response)
        }).catch(err => res.status(500).send(err));
    }
}