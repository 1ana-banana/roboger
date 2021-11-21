# _Roboger by Anastasia Han_

#### By _**Anastasia Han**_

#### _a html webpage that takes user input of a number, submits it and returns a string of phrases._

## Technologies Used

* _VS Code_
* _CMDER_
* _Bootstrap_
* _Github_

## Description

_a phrase generator based on user number input._

## Tests

Describe: beepBoop()

Test: "It should return an array with a 0 if the number 0 is inputted"
Code: beepBoop(0);
Expected Output: 0

Test: "It should return a range of numbers from 0 to the user's inputted number."
Code: beepBoop(4);
Expected Output: 0,1,2,3,4

Test: "It should return a range of numbers from 0 to the user's inputted number, substituting "beep!" for 1."
Code: beepBoop(4);
Expected Output: 0,beep!,2,3,4

Test: "It should return a range of numbers from 0 to the user's inputted number, substituting "boop!" for 2."
Code: beepBoop(4);
Expected Output: 0,beep!,boop!,3,4

Test: "It should return a range of numbers from 0 to the user's inputted number, substituting "Won't you be my neighbor?" for 3."
Code: beepBoop(4);
Expected Output: 0,beep!,boop!,Won't you be my neighbor?,4

Test: "It should return a range of numbers from 0 to the user's inputted number, substituting "beep!" for any number that has a 1 as a digit."
Code: beepBoop(10);
Expected Output: 0,beep!,boop!,Won't you be my neighbor?,4,5,6,7,8,9,beep!

Test: "It should return a range of numbers from 0 to the user's inputted number, substituting "boop!" for any number that has a 2 as a digit, and while overriding 1 as a digit."
Code: beepBoop(12);
Expected Output:0,beep!,boop!,Won't you be my neighbor?,4,5,6,7,8,9,beep!,beep!,boop!!

Test: "It should return a range of numbers from 0 to the user's inputted number, substituting "Won't you be my neighbor?" for any number that has a 3 as a digit, and while overriding 1 and 2 as a digit."
Code: beepBoop(32);
Expected Output: 0,beep!,boop!,Won't you be my neighbor?,4,5,6,7,8,9,beep!,beep!,boop!,Won't you be my neighbor?,beep!,beep!,beep!,beep!,beep!,beep!,boop!,boop!,boop!,Won't you be my neighbor?,boop!,boop!,boop!,boop!,boop!,boop!,Won't you be my neighbor?,Won't you be my neighbor?,Won't you be my neighbor?


## Setup/Installation Requirements

* _Clone this repository to desktop._
* _Navigate to top level of the directory._
* _open langsuggest/index.html in the browser of your choice._

## Known Bugs

* _If user inputs anything other than a number, it should pop out an error._

## Github Pages Link

* _https://github.com/1ana-banana/roboger_

## License

MIT

Copyright (c) _11/19/2021_ _Anastasia Han_
