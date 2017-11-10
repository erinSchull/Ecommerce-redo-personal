SELECT *
FROM products
INNER JOIN cart
ON products.productid = cart.productsid;