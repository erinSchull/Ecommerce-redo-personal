INSERT INTO orders(productsid)
SELECT productsid
FROM cart;

-- SELECT *
-- FROM products
-- INNER JOIN orders
-- ON products.productid = orders.productsid;