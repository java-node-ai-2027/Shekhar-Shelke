

CREATE DATABASE thinkitive_DB;
DROP DATABASE thinkitive_DB;

CREATE TABLE student(
	id INTEGER PRIMARY KEY,
	name VARCHAR(100),
	age INTEGER
);


-- SELECT table_name
-- FROM information_schema.tables
-- WHERE table_schema = 'public';


INSERT INTO student(id,name,age) 
VALUES 
 (2,'aditya',23),
 (3,'amol',22);

SELECT
    column_name,
    data_type,
    is_nullable
FROM information_schema.columns
WHERE table_name = 'student';

INSERT INTO students values(7,'',21);

select * from students;

CREATE TABLE courses(
	id INTEGER PRIMARY KEY,
	course_name VARCHAR(100)
)

drop table students;

CREATE TABLE students(
	id INTEGER PRIMARY KEY,
	name VARCHAR(100),
	course_id INTEGER,
	FOREIGN KEY (course_id) 
	REFERENCES courses(id)
);

INSERT INTO courses 
values (2,'react'),
(3,'python');

select * from courses;

insert into students 
values
(7,'mehesh',1),
(8,'sidharth',2),
(9,'vishwas',3);

select * from students
order by id;

ALTER TABLE students 
ADD COLUMN age INTEGER DEFAULT NULL ;

UPDATE students
SET age=28
WHERE age=21;

select * from students;
ORDER BY id;

ALTER TABLE students 
ADD COLUMN isActive BOOLEAN DEFAULT FALSE;

UPDATE students
SET isactive=true
WHERE age>23 OR age<18 ;

UPDATE students 
SET age=16
where name='aditya';

DELETE FROM students 
WHERE age<22;

SELECT 12%3<>0;

SELECT *
FROM students
WHERE age BETWEEN 20 AND 25;

SELECT * FROM students;


SELECT * FROM students
where age IN(21,22,23,16);

SELECT (name) from studentS 
where age IS NOT NULL;

SELECT name ||'-student' from students;

SELECT * FROM students 
where name LIKE 's%' and name LIKE '%r';

select * from students
where age=16 or age=25 or age=28;

select * from students 
where age>=22 OR name='aditya';

select * from students 
where course_id IN (1,2);

select * from students
ORDER BY age DESC;

SELECT  DISTINCT age,* from students;
select * from student;
SELECT COUNT(*) from students;
SELECT AVG(age) from students;
SELECT sum(course_id) from students;
SELECT min(age) from students;
SELECT max(age) from students;

select course_id, count(*) from students
GROUP BY course_id
ORDER BY course_id;

select age from students
GROUP BY age
HAVING COUNT(*)<2;

INSERT INTO courses 
values (5,'data analatics');

select * from students
order by id;


INSERT INTO students (id, name, age, isactive)
VALUES (31, 'kiko',43, true);

delete from courses
where id=4;

select * from courses;

INSERT INTO students (id, name, course_id, age, isactive)
VALUES
(10, 'Rahul Patil', 2, 12, true),
(11, 'Priya Deshmukh', 3, 15, false),
(12, 'Sneha Kulkarni', 1, 18, true),
(13, 'Rohit Jadhav', 2, 20, false),
(14, 'Neha Joshi', 3, 22, true),
(15, 'Akash Shinde', 1, 25, true),
(16, 'Pooja Pawar', 2, 27, false),
(17, 'Vikas More', 3, 30, true),
(18, 'Kiran Chavan', 1, 32, true),
(19, 'Amit Sharma', 2, 35, false),
(20, 'Rahul Patil', 3, 37, true),
(21, 'Priya Deshmukh', 1, 40, false),
(22, 'Sneha Kulkarni', 2, 42, true),
(23, 'Rohit Jadhav', 3, 44, false),
(24, 'Neha Joshi', 1, 45, true),
(25, 'Akash Shinde', 2, 47, true),
(26, 'Pooja Pawar', 3, 48, false),
(27, 'Vikas More', 1, 49, true),
(28, 'Kiran Chavan', 2, 50, false);

select * from courses;
select * from students;

SELECT s.id, s.name,s.age,s.isactive,c.course_name
FROM students AS s
INNER JOIN courses AS c
ON s.course_id=c.id 
order by s.id;

SELECT s.id, s.name,s.age,s.isactive,c.course_name
FROM students AS s
INNER JOIN courses AS c
ON s.course_id=c.id 
where c.course_name='python' and isactive=true;

SELECT s.name,c.course_name
from students s
LEFT JOIN courses c
ON s.course_id=	c.id;

select * from students;

SELECT
    c.course_name,
    s.name
FROM students s
RIGHT JOIN courses c
    ON s.course_id = c.id;


SELECT
    s.name,
    c.course_name
FROM students s
FULL OUTER JOIN courses c
    ON s.course_id = c.id;

select * from students
where name='kiko';

CREATE INDEX idx_student_name
ON students(name);

select * from idx_student_name;


-- ACID Properties example :

CREATE TABLE accounts (
    account_id INTEGER PRIMARY KEY,
    account_name VARCHAR(100),
    balance NUMERIC(10,2) CHECK (balance >= 0)
);


INSERT INTO accounts
(account_id, account_name, balance)
VALUES
(1, 'Amit', 10000),
(2, 'Rahul', 5000);


BEGIN;

UPDATE accounts
SET balance = balance - 2000
WHERE account_id = 1;

UPDATE accounts
SET balance = balance + 2000
WHERE account_id = 2;

COMMIT;

select * from accounts;

ROLLBACK;

CREATE TABLE foundation (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT CHECK (age >= 18)
);

INSERT INTO foundation (name, age)
VALUES ('Shekhar', 23);

INSERT INTO students (name, age)
VALUES ('Rahul', 15);

-- Output take error

-- ERROR:  null value in column "id" of relation "students" violates not-null constraint
-- Failing row contains (null, Shekhar, null, 23, f). 

-- SQL state: 23502
-- Detail: Failing row contains (null, Shekhar, null, 23, f).


ALTER TABLE students
ADD COLUMN email VARCHAR(100);

ALTER TABLE students
RENAME COLUMN name TO full_name;


ALTER TABLE students
ALTER COLUMN age TYPE BIGINT;

ALTER TABLE students
ADD CONSTRAINT age_check
CHECK (age >= 18);

SELECT *
FROM students
WHERE course_id IN (
    SELECT id
    FROM courses
    WHERE course_name = 'java'
);

SELECT *
FROM students
WHERE course_id IN (
    SELECT id
    FROM courses
    WHERE course_name IN ('java','python')
);

SELECT *
FROM courses c
WHERE EXISTS (
    SELECT 1
    FROM students s
    WHERE s.course_id = c.id
);

select * from courses c

select * from courses;


