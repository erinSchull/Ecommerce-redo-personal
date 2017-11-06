module.exports= {
    getProductsOnOrders: (req, res, next) => {
        const db = req.app.get('db');
        const {productsid, orderid} = req.body
        db.join_order_products([productsid, orderid])
        .then(response => {
            res.status(200).send(response)
        }).catch(err => res.status(500).send(err));
    }
}