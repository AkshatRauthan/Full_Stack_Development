-- Select Command Is Used To Select Data Values Present In The Table.

-- 1.) Selecting All The Tuples Present In The Table
USE IP_PROJECT;
SELECT * FROM ACCOUNTS;

-- 2.) Selecting Some Specific Fields From Table
USE IP_PROJECT;
SELECT S_No, Name, Gender FROM ACCOUNTS;

-- 3.) Selecting Fields With Some Conditions
USE IP_PROJECT;
SELECT * FROM ACCOUNTS Where Gender Like 'M%';

-- 4.) Selecting All Distinct Values Present In A Field In A Table
USE IP_PROJECT;
SELECT DISTINCT Branch_Name FROM ACCOUNTS;

-- 5.) Selecting All Details From Tuples Whose Name Starts With "P"
USE IP_PROJECT;
SELECT * FROM ACCOUNTS WHERE NAME LIKE "P%";