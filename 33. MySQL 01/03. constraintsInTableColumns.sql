-- 01.) NOT NUL => To Specify That A Columns Value Can't Be Null For Any Tuples.
-- 02.) UNIQUE  => To Specify That The Column's Value Must Be Unique For All The Tuples.
-- 03.) DEFAULT => To Specify A Default Value For The Column To Put In Place of Null Value In It.
-- 04.) CHECK   => To Limit The Values Of A Column To A Given Range

USE college;
CREATE TABLE IF NOT EXISTS constraints(
Roll_No INT UNIQUE, 
Student_Name VARCHAR(35) NOT NULL, 
Section char(1) DEFAULT "A", 
Gender CHAR(1),
Age INT,

USE college;
CONSTRAINT IsAdult CHECK (Age >= 18),
CONSTRAINT CHECK (Gender = "M" OR Gender = "F")
);

USE college;
DESC constraints;   -- To Show The Table Structure
SHOW CREATE TABLE constraints;  -- To Properly Inspect The Table Structure

USE college;
INSERT INTO constraints VALUES (01, "Akshat Rauthan", DEFAULT, "M", 20);
SELECT * FROM constraints;