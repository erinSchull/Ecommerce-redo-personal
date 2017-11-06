INSERT INTO cart(productsid)
SELECT productid
FROM products 
WHERE productid = 1;