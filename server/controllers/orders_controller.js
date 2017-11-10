module.exports= {
    getProductsOnOrders: (req, res, next) => {
        const db = req.app.get('db');
        const {productsid, orderid} = req.body
        db.read_order_products([productsid, orderid])
        .then(response => {
            res.status(200).send(response)
        }).catch(err => res.status(500).send(err));
    },
    createOrderOnCart: (req, res, next) => {
        const db = req.app.get('db');
        const {productsid} = req.body;
        db.create_order([productsid])
        .then(response => {
            res.status(200).send(response)
        }).catch(err => res.status(500).send(err));
    }
}