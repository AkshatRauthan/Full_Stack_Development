-- GROUP BY CLAUSE => USED TO SEGRAGATE DATA AND APPLY AGREGATE FUNCTIONS ON GROUP OF DATA HAVING SAME VALUE FOR A GIVEN ATTRIBUTE

-- FOR EXAMPLE : THE BELOW CODE WILL RETURN THE NUMBER OF TUPLES HAVING THE SAME VALUE IN GENDER FIELD AS WELL AS THEIR VALUE OF GENRED.
USE IP_PROJECT;
SELECT GENDER, COUNT(*) AS "CUSTOMERS COUNT" FROM ACCOUNTS GROUP BY GENDER;

USE IP_PROJECT;
SELECT RESIDENTIAL_ADDRESS AS ADDRESS, COUNT(*) AS "CUSTOMERS COUNT" FROM ACCOUNTS GROUP BY RESIDENTIAL_ADDRESS;

-- OLDEST ACCOUNT HOLDER'S DATE OF BIRTH GROUPED BY RESIDENTIAL ADDRESS :
USE IP_PROJECT;
SELECT MAX(DATE_OF_BIRTH) AS "OLDEST DATE OF BIRTH", RESIDENTIAL_ADDRESS AS ADDRESS FROM ACCOUNTS GROUP BY RESIDENTIAL_ADDRESS;