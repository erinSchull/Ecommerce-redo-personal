DELETE FROM cart 
WHERE id = $1;

SELECT *
FROM products
INNER JOIN cart
ON products.productid = cart.productsid;