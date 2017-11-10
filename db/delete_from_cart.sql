DELETE FROM cart 
WHERE productsid = $1;

SELECT *
FROM products
INNER JOIN cart
ON products.productid = cart.productsid;