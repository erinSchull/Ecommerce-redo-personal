SELECT *
FROM products
INNER JOIN orders
ON products.productid = orders.productsid;