--                                           ---------| PRIMARY KEY |---------

-- Primary Key => Used To Uniquely Identify All The Available Tuples.
-- A Single Table Can Have Only One Primary Key.
-- A Primary Key Can Be A Single Column Or A Collection Of Many Data Fields.


-- 01.) Assigning Primary Key During Table Creation
USE college;
DROP Table IF EXISTS Primary_Key;
CREATE TABLE Primary_Key(Id INT PRIMARY KEY, Student_Name VARCHAR(30), Age INT);
DESC Primary_Key;
-- OR --
USE college;
DROP Table IF EXISTS Primary_Key;
CREATE TABLE Primary_Key(Id INT, Student_Name VARCHAR(30), Age INT, PRIMARY KEY (Id));
DESC Primary_Key;


-- 02.) Assigning Primary Key After Table Creation
USE college;
DROP Table IF EXISTS Primary_Key;
CREATE TABLE Primary_Key(Id INT, Student_Name VARCHAR(30), Age INT);
ALTER TABLE Primary_Key ADD CONSTRAINT PRIMARY KEY (Id);
DESC Primary_Key;


-- 03.) Assigning Primary Key As A Combination Of Many Data Fields.
USE college;
DROP Table IF EXISTS Primary_Key;
CREATE TABLE Primary_Key(Id INT, Student_Name VARCHAR(30), Age INT);
ALTER TABLE Primary_Key ADD CONSTRAINT PRIMARY KEY (Id, Student_Name);
DESC Primary_Key;
-- OR --
USE college;
DROP Table IF EXISTS Primary_Key;
CREATE TABLE Primary_Key(Id INT, Student_Name VARCHAR(30), Age INT, PRIMARY KEY (Id, Student_Name));
DESC Primary_Key;