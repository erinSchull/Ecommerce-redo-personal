SELECT *
FROM orders
INNER JOIN products
ON orders.productsid = products.productid;