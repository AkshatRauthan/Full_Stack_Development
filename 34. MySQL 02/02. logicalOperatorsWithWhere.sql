USE IP_PROJECT;
SELECT * FROM ACCOUNTS;

-- 01.) AND OPERATOR => Used To Add More that One Condition
USE IP_PROJECT;
SELECT * FROM ACCOUNTS WHERE GENDER LIKE "F%" AND BRANCH_NAME = "Haridwar";

-- 02.) OR OPERATOR => Used To Find The Data Satisfying Any One Condition
USE IP_PROJECT;
SELECT * FROM ACCOUNTS WHERE BRANCH_NAME = "Mumbai" OR BRANCH_NAME = "Srinagar";

-- 03.) BETWEEN OPERATOR => Used To Find Data Values In A Given Range (Excluding The Ending Value of Range)
USE IP_PROJECT;
SELECT * FROM ACCOUNTS WHERE NAME BETWEEN "A%" AND "I%"; -- Data Of Persons With Name Starting From "A" To "H"

-- 04.) IN OPERATOR => Used To Find Data Values That Is Present Amongst Diffrent Daat Values
USE IP_PROJECT;
SELECT * FROM ACCOUNTS WHERE PERMANENT_ADDRESS IN ("Haridwar", "Shivalik Nagar");

-- 05.) NOT OPERATOR => To FInd The Data Which Does Not Satisfy The Given Condition
USE IP_PROJECT;
SELECT * FROM ACCOUNTS WHERE NAME NOT LIKE "A%";