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
where age=17 or age=25;

