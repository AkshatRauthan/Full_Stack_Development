--                                          ----------| FOREIGN KEY |----------

-- Foreign Key => Used To Connect Data Fields That Are Common Between Diffrent Tables.
-- A Table Can Have Any Number Of Foreign Keys.
-- The Referenced Data Field In The Source Table Must Be Its Primary Key.
-- The Data Type Of Both The Data Fields Must Be Same.
-- A Table Whose Primary Key Is Used As A Foreign Key Can't Be Deleted Until The Foreign Key Relation Is Present.
-- Can Have Duplicate or NULL Values.

USE COLLEGE;
CREATE TABLE STUDENT(STUDENT_ID INT PRIMARY KEY, STUDENT_NAME VARCHAR(30), AGE INT);
DESC STUDENT;

-- 1.) Adding Foreign Key During Table Creation.
USE COLLEGE;
DROP TABLE IF EXISTS Foreign_Key;
CREATE TABLE Foreign_Key(Roll_Number INT PRIMARY KEY, ID INT , FOREIGN KEY (ID) REFERENCES STUDENT(STUDENT_ID));
DESC Foreign_Key;

-- 2.) Adding Foreign Key After Table Creation.
USE COLLEGE;
DROP TABLE IF EXISTS Foreign_Key;
CREATE TABLE Foreign_Key(Roll_Number INT PRIMARY KEY, ID INT);
ALTER TABLE Foreign_Key ADD FOREIGN KEY (ID) REFERENCES STUDENT(STUDENT_ID);
DESC Foreign_Key;