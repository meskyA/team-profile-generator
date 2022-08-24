# Team Profile Generator

## Description

The purpose of this project is to build a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. 
First I created a library folder and it that folder, I crated four script files for employee objects including manager, engineer and intern. 
After writing a unit test for every part of your code in the script files, I run tests using npm test command until all passed. 
Then, I created a script file (generateHTML.js) to run the application through.
In this script file I used inquirer to prompt the user through making a team out of the objects from your lib folder.
It  asks the user if they would like to create an employee object then based on the role of the employee that they had selected it will prompt the user for those data values.
It would ask the user for their name, email, id, and github, then after it uses those values to create an object of that class and add that object to an array for all of the employees.
Then I iterated over the array and made cards for the html file.
When I decided to finish building my team, I exit the application, and the HTML was generated.
My default email program opens and populates the TO field of the email with the address
The GitHub profile opens in a new tab and goes to the actual gitHub page. 
This project was challenging because it did not have starting codes and it involves several steps and folders. 
With several failed tests and mishaps, much google, and support from AskBCS, I learned that I could apply what I learned so far and was able to generate this app. 

![screen shot](/Assets/Screen-Shot-Team-Profile.png)
[vidoe](https://drive.google.com/file/d/15i5nZ5faj_HfABes3oWH6islap1zNAnC/view)
[vidoe](https://drive.google.com/file/d/1q1-8DgiKotjyxBREDG7eLIMblVH9SCgg/view)





