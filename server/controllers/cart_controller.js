module.exports = {
    getProductsOnCart: (req, res, next) => {
        const db = req.app.get('db');
        const {cartid} = req.params
        db.join_cart_products([cartid])
        .then(response => {
            res.status(200).send(response)
        }).catch(err => res.status(500).send(err));
    },
    addToCart: (req, res, next) => {
        const db = req.app.get('db');
        const {productsid, cartid} = req.body;
        db.add_to_cart([productsid, cartid])
        .then(response => {
            res.status(200).send(response)
        }).catch(err => res.status(500).send(err));
    },
    removeFromCart: (req, res, next) => {
        const db = req.app.get('db');
        const {productsid} = req.params;
        db.delete_from_cart([productsid])
        .then(response => {
            res.status(200).send(response)
        }).catch(err => res.status(500).send(err));
    }
}