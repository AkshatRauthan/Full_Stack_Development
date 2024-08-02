-- The Where Clause Is Used Along With The Select Command To Select Specific Data That Matches Specific Conditions

USE IP_Project;
SELECT * FROM MONEY_SENT;
SELECT * FROM ACCOUNTS;

-- 1.) Adding Conditions Using Where Clause
USE IP_Project;
SELECT * FROM MONEY_SENT WHERE AMOUNT >= 5000;

-- 2.) Selecting Fields With Some Conditions
USE IP_PROJECT;
SELECT * FROM ACCOUNTS Where Gender Like 'M%';

-- 3.) Selecting All Distinct Values Present In A Field In A Table
USE IP_PROJECT;
SELECT DISTINCT Branch_Name FROM ACCOUNTS;

-- 4.) Selecting All Details From Tuples Whose Name Starts With "P"
USE IP_PROJECT;
SELECT * FROM ACCOUNTS WHERE NAME LIKE "P%";