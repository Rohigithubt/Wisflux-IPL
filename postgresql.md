SQL CRUD Operations:- 

1. Create:

INSERT INTO users (name, age, email) VALUES ('Rohit Jain', 21, 'rohitjain68134@gmail.com');

2. Read:

SELECT * FROM users WHERE age > 25;


3. Update:

UPDATE users SET email = 'rohitjain68134@gmail.com' WHERE name = 'Rohit Jain';


4. Delete:

DELETE FROM users WHERE name = 'Rohit Jain';


5. Aggregates:

SELECT COUNT(*), AVG(age), MAX(age), MIN(age) FROM users;


6. Group By

SELECT gender, COUNT(*) FROM users GROUP BY gender;
Joins
 
Inner Join:->
SELECT users.name, orders.amount
FROM users
INNER JOIN orders ON users.id = orders.user_id;

Left Join:->
SELECT users.name, orders.amount
FROM users
LEFT JOIN orders ON users.id = orders.user_id;

Right Join:->
SELECT users.name, orders.amount
FROM users
RIGHT JOIN orders ON users.id = orders.user_id;

Full Join:->
SELECT users.name, orders.amount
FROM users
FULL JOIN orders ON users.id = orders.user_id;