// Assignment#1
// JavaScript
// Chapter 01

// Question 01
alert("Welcome to our website!...");


// Question 02
alert("Error!Please enter a valid password.");


// Question 03
alert("Welcome to JS Land...\nHappy Coding!");

//Question 04
alert("Welcome to JS Land!")
alert("Happy coding!\nPrevent this page from creating additional dialogs")

//Question 05
alert("Hello.. I can run JS through my web browser's console")

//Assignment 02
// Chapter 02

// Question 01
var username = "Shiza Khan"

// Question 02
var myName = "Shiza khan"

// Question 03
var message = "Hello World"
alert(message)

// Question 04
var name = "John Doe"
var age = "15 years old"
var certification = "Certified Mobile Application Development"
alert(name)
alert(age)
alert(certification)

// Question 05
var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP"
alert(pizza)

// Question 06
var email = "Sohailshiza56@gmail.com"
alert("My email address is " + email)

// Question 07
var book = "A smarter way to learn JavaScript"
alert("I am trying to learn from the Book " + book)

// Question 08
document.write("yah! I can write HTML content through Javavscript")

// Question 09
var des = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(des)

// Assignment 03
// Chapter 03

//Queston 01
var age = 15
alert("i am " + age + " years old")

//Question 02
var time = 10
alert("You have visited the site " + time + " times")

//Question 03
var birthyear = 2000
document.write("My birth year is " + birthyear + "<br>")

//Question 04
var visitorname = "Maryum"
var Product = "Shirt"
var quantity = 2
document.write(visitorname + " ordered " + quantity + " " + Product + " on ABC clothing store <br>")

// Assignment 04
// Question 04

var name, middle, last
var first, second, third, fourth, fifth

document.write("<h1>Rules for naming JS variables</h1>.<br> Variable names can only contain number,$, and _.For example $my_1stVariablev <br>Variables must begin with anumber,$, or _. For example $name, _name or name<br>Variable names are case Sensitive<br>Variable names should not be JS Keyword")


// Assignment 05
// Chapter 05

//Question 01
var a = 5
var b = 5
var c = a + b
document.write("The sum of 5 and 5 is " + c + "<br>")

//Question 02
var a = 5
var b = 6
var f = a - b
document.write("The answer is " + f + "<br>")
var d = a * b
document.write("The multiplication of  5 into 6 is " + d + "<br>")
var e = a % b
document.write("The modulus of 5 and 6 is " + e + "<br>")

//Question 03
var value
document.write("Value after variable declaration is : " + value + "<br>")
var number = 5
document.write("Initial value : " + number + "<br>")
document.write("Value after increment is : ", ++number + "<br>")
number = 7 + number
document.write("after addition is " + number + "<br>")
document.write("Value after decrement is : ", --number + "<br>")
number = number % 3
document.write("The remainder is :" + number + "<br>")


//Question 04
var cost = 600
var buy = 5
document.write("The cost to buy " + buy + " tickets to a movie is " + (buy * cost) + "PKR <br>")


//Question 05
document.write("Table of 3<br>")
var num = 3
for (i = 1; i <= 10; ++i) {
    v = num * i
    document.write(num + "*" + i + "=" + v + "<br>")
}

//Question 06
var cel = 25
var ferh = 77
var c = (ferh - 32) * 5 / 9
var f = (cel * 9 / 5) + 32
document.write(cel + "C is " + ferh + "C<br>")
document.write(ferh + "C is " + cel + "C<br>")


//Question 07
var item1 = 650
var item2 = 100
var quantity1 = 3
var quantity2 = 7
var shippingcharges = 100
document.write("Price of item 1 is " + item1 + "<br>" + "Quantity: " + quantity1 + "<br>")
document.write("Price of item 2 is " + item2 + "<br>" + "Quantity: " + quantity2 + "<br>")
var f = item1 * quantity1
var g = item2 * quantity2
document.write("The total cost is ", f + g + shippingcharges, "<br>")


//Question 08
var totalmarks = 980
var marksobt = 804
document.write("Total marks: " + totalmarks + "<br>marks obtained : " + marksobt + "<br>Percentage : " + ((marksobt / totalmarks) * 100 + "%<br>"))

//Question 09
var us = 10
var saudi = 25
document.write("Total currency in PKR is " + ((us * 104.8) + (saudi * 28)))

//Question 10
var numb = 2
document.write("<br>The result is : " + ((numb + 5) * 10) / 2)

//Question 11
var currentyear = 2016
var birthyear = 1992
document.write("<br>Your age is: " + (currentyear - birthyear))

//Question 12
var radius = 20
var circum = 2 * 3.142 * radius
var area = 3.142 * (radius * radius)
document.write("<br>Radius of a circle is :" + radius + "<br>The circumferense is : " + circum + "<br>The area is : " + area + "<br>")


//Question 13
var snack = "lays"
var currentage = 15
var maxage = 65
var amount = 3
var totalNeeded = (amount * 365) * (maxage - currentage)
document.write("You will need " + totalNeeded + " " + snack + " to last you until the ripe old age of " + maxage + "<br>")

// Assignment 06
// Chapter 6 to 9

// Question 01
var num = 10
document.write("Result")
document.write("<br>The value of a is " + num)

document.write("<br><br>The value of a++ is " + ++num)
document.write("<br>The value of a is " + num)
document.write("<br><br>The value of a++ is " + ++num)
document.write("<br>The value of a is " + num)
document.write("<br><br>The value of a-- is " + --num)
document.write("<br>The value of a is " + num)
document.write("<br><br>The value of a-- is " + --num)
document.write("<br>The value of a is " + num)

// Question 02
var a = 2, b = 1
document.write("--a : 1 <br> --a - --b : 1 <br> --a - --b + ++b : 1 - 0 + 1 <br> --a - --b + ++b + b-- : 1 - 0 + 1 + 1 <br>")
document.write(" The result is :", --a - --b + ++b + b--, "<br>")

// Question 03
var name = prompt("Enter Name")
alert("Welcome " + name)

// Question 05
var num = prompt("Enter Num1")
num = num * 1
if (num != 0) {
    document.write("Table of " + num + "<br>")
    for (var i = 1; i < 11; i++) {

        document.write(num + " x " + i + " = " + (num * i) + "<br>")


    }
}
else {
    document.write("Table of 5<br>")
    for (var i = 1; i < 11; i++) {

        document.write("5 x " + i + " = " + (5 * i) + "<br>")


    }

}
// Question 06
var sub1 = prompt("Enter Subject Name")
var sub2 = prompt("Enter Subject Name")
var sub3 = prompt("Enter Subject Name")
var total = 100
var mSub1 = prompt("Enter Subject Marks for " + sub1)
var mSub2 = prompt("Enter Subject Marks for" + sub2)
var mSub3 = prompt("Enter Subject Marks for " + sub3)

var percSub1 = (mSub1 / total) * 100
var percSub2 = (mSub2 / total) * 100
var percSub3 = (mSub3 / total) * 100
var subt = ++mSub1 + ++mSub3 + ++mSub2
var subt = subt - 3
--mSub1
--mSub2
--mSub3
var subtperc = (subt / 300) * 100
document.write("<table><tr> <td>" + sub1 + "</td> <td>" + total + "</td> <td>" + mSub1 + "</td> <td>" + percSub1 + "%</td> </tr>   <tr> <td>" + sub2 + "</td> <td>" + total + "</td> <td>" + mSub2 + "</td> <td>" + percSub2 + "%</td> </tr>   <tr> <td>" + sub3 + "</td> <td>" + total + "</td> <td>" + mSub3 + "</td> <td>" + percSub3 + "%</td> </tr> <tr> <td></td> <td>" + total * 3 + "</td> <td>" + subt + "</td> <td>" + subtperc + "%</td> </tr> </table>")

// Assignment 9-11
//Question 01
var city = prompt("Enter your city")
if (city == "karachi") {
    alert("Welcome to the city of lights")
}

//Question 02
var gender = prompt("Enter your gender")
if (gender == "male") {
    alert("Good Morning Sir.")
}
else if (gender == "female") {
    alert("Good Morning Ma'am.")
}

//Question 03
var traffic = prompt("Enter the color of road traffic signal")
if (traffic == "red") {
    alert("Must stop")
}
else if (traffic == "yellow") {
    alert("Ready to move")
}
else if (traffic == "green") {
    alert("move now")
}

//Question 04
var fuel = prompt("Enter the remaining fuel in car (in litres)")
if (fuel < 0.25) {
    alert("Please refill the fuel in your car")
}

//Question 05
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
if ("car" < "cat") {
    alert("car is smaller than cat");
}
//Question 06
var mark1 = +prompt("Enter your subject 1 marks")
var mark2 = +prompt("Enter your subject 2 marks")
var mark3 = +prompt("Enter your subject 3 marks")
var totalmarks1 = 300
var mark = mark1 + mark2 + mark3
var per = (mark / totalmarks1) * 100
alert("Total marks :" + mark)
alert("Percentage is :" + per)
if (per >= 80) {
    alert("Grade : A-one \n Remarks : Excellent")
}
else if (per >= 70) {
    alert("Grade : A \n Remarks : Good")
}
else if (per >= 60) {
    alert("Grade : B \n Remarks : You need to improve")
}
else if (per < 60) {
    alert("Grade : Fail \n Remarks : Sorry")
}

//Question 07
var secret = 6
var guess = +prompt("Guess the number")
if (guess == secret) {
    alert("Bingo!")
}
else if (guess + 1 == secret) {
    alert("You are close enough to guess the correct answer")
}

//Question 08
var number3 = +prompt("Enter the number")
if (number3 % 3 == 0) {
    document.write("Yes it is divisible by 3<br>")
}

//Question 09
var number2 = +prompt("Enter the number")
if (number2 % 2 == 0) {
    document.write("<br>It is even")
}
else {
    document.write("<br>It is odd")
}

//Question 10
var temp = +prompt("Enter the temperature")
if (temp > 40) {
    alert("It is too hot outside")
}
else if (temp > 30) {
    alert("The weather is normal")
}
else if (temp > 20) {
    alert("Today's weather is cool")
}
else if (temp > 10) {
    alert("OMG!Today's Weather is so cool")
}
//Question 11
var firstnum = +prompt("Enter the number")
var secondnum = +prompt("Enter the number")
var operation = prompt("Enter the operation")
if (operation == "+") {
    alert(firstnum + secondnum)
}
else if (operation == "-") {
    alert(firstnum - secondnum)
}
else if (operation == "%") {
    alert(firstnum % secondnum)
}
else if (operation == "*") {
    alert(firstnum * secondnum)
}
else if (operation == "/") {
    alert(firstnum / secondnum)
}

// Assignment 12-13
var a = prompt("Enter Number")


if (a > 0) {
    document.write("Number is positive ")
}
else if (a < 0) {
    document.write("Number is Negative")

} else {
    document.write("Number is 0")

}


var a = prompt("Enter Number")


if (a == "a" || a == "e" || a == "i" || a == "o" || a == "u") {
    document.write("True")
}
else {
    document.write("False")

}


var pass = "Password123"

var Cpass = prompt("Enter Password")

if (Cpass == "") {

    alert("Enter Pass")
}
else if (pass == Cpass) {

    alert("Correct! The password you  entered matches the original password")
}
else {
    alert("Incorrect password")
}

var hour = 13;
if (hour < 18) {
    greeting = "Good day"
}
else {
    greeting = "Good evening"
}

var time = prompt("Enter Time")
if (time >= 0000 && time < 1200) {

    alert("Good Morning")
}
else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon")
}
else if (time >= 1700 && time < 2100) {
    alert("Good Evening")
}
else if (time >= 2100 && time < 2359) {
    alert("Good Night")
}

// Assignment 14-16
//Question 01
var empty = []


//Question 03
var stringarray = ["yusra", "shiza", "asma"]

//Question 04
var numarray = [2, 3, 2, 4]

//Question 05
var booleanarray = [true, false]

//Question 06
var mixearray = ["yusra", 5, "+", true]

//Question 07
var edu = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil"]
document.write("<h4>Qualifications</h4>", edu[0], "<br>", edu[1], "<br>", edu[2], "<br>", edu[3], "<br>", edu[4], "<br>", edu[5], "<br>", edu[6])

//Question 08
var studentarray = ["yusra", "shiza", "asma"]
var scorestudent = ["497", "498", "499"]
var totalmarks1 = 500
document.write("<br>Score of ", studentarray[0], " is ", scorestudent[0], " and Percentage is ", (scorestudent[0] / totalmarks1) * 100, "%<br>")
document.write("Score of ", studentarray[1], " is ", "and Percentage is ", (scorestudent[1] / totalmarks1) * 100, "%<br>")
document.write("Score of ", studentarray[2], " is ", "and Percentage is ", (scorestudent[2] / totalmarks1) * 100, "%<br>")


//Question 09
var colorarray = ["blue", "red", "yellow"]
document.write(colorarray[0], "<br>", colorarray[1], "<br>", colorarray[2], "<br>")
var askuser = prompt("What color do you want to add in the beginning?")
colorarray.unshift(askuser)
document.write(colorarray, "<br>")
var inend = prompt("What color do you want to add in the end?")
colorarray.push(inend)
document.write(colorarray, "<br>")
var askuser1 = prompt("What  more colors do you want to add in the beginning?")
var askuser2 = prompt("What  more colors do you want to add in the beginning?")
colorarray.unshift(askuser1, askuser2)
document.write(colorarray, "<br>")
colorarray.shift()
document.write(colorarray, "<br>")
colorarray.pop()
document.write(colorarray, "<br>")
var askcolor = prompt("On which index do you want to add a color?")
var askcolorname = prompt("Write a color name")
colorarray.splice(askcolor, 0, askcolorname)
document.write(colorarray, "<br>")
var delcolor = prompt("Which index you want to delete the color")
colorarray.splice(delcolor, 1)
document.write(colorarray)

//Question 10
var sortscore = [32, 23, 54]
document.write("Score of students ", sortscore)
sortscore.sort()
document.write("<br>Ordered score of students ", sortscore, "<br>")

//Question 11
var cityname = ["Karachi", "Lahore", "Islamabad", "Quetta"]
var selected = [cityname[0], cityname[2]]
document.write("City names :", cityname, "<br> Selected city names: ", selected, "<br>")

//Question 12
var arr = ["This", "is", "my", "cat"]
document.write(arr.join(" "))

//Question 13
var newarr = []
newarr.push(3)
newarr.push(5)
newarr.push(6)
document.write("<br> The array is :", newarr)
document.write("<br> Values :", newarr.shift())
document.write("<br> Values :", newarr.shift())
document.write("<br> Values :", newarr.shift())

//Question 14
var newarr2 = []
newarr2.push(3)
newarr2.push(5)
newarr2.push(6)
document.write("<br> The array is :", newarr2)
document.write("<br> Values: ", newarr2.pop())
document.write("<br> Values: ", newarr2.pop())
document.write("<br> Values: ", newarr2.pop())

//Question 15
var mobilemanuf = ["<br>Apple", "Samsung", "Motorola", "Nokia", "Sony"]
document.write(mobilemanuf)

// chapter 21 - 25

// Question 01
// var Fname= window.prompt("Enter your first name")
// var Lname= window.prompt("Enter your last name")
// fullname = Fname + " " +Lname
// alert("Hello"+ " "+fullname+"!"+"\n"+"Have a good day..." )

// Question 02
// var x = prompt("Enter your favourite monile phone model")
// favourite = "My favourite phone is:" + " " + x + "<br>"
// document.write(favourite)
// for (i = 0; i < x.length; i++) {
//     count = i + 1

// } document.write("Length of string:" + " " + count + "<br>")

// Question 03
// var name= "Pakistan"
// document.write("String:" +name+ "<br>" + "index of 'n':" + name.indexOf("n"))

// Question 04
// var string= "Hello world"
// document.write("String:" +string+ "<br>" + "last index of 'l':" +string.lastIndexOf("l"))

// Question 05
// var x = "Pakistani"
// document.write("String:" +x+ "<br>" +"Caracter at index 3:"+ x.slice(3,4))

// Question 06
// var Fname = prompt("Enter first name:")
// var Lname = prompt("Enter last name:")
// fullname = Fname.concat(Lname)
// document.write("Hello"+ " "+fullname+"!"+"\n"+"Have a good day..." )

// Question 07
// var city = "Hyderabad"
// var replace = "Islam" + city.slice(5,9)
// document.write("City: " + city + "<br>" + "After replacement: " +replace)

// Question 08
// var message="Ali and Sami are best friends. They play cricket and football together."
// var x = message.replace(/and/g,"&")
// document.write("message: " + message + "<br>" +"After replacement: "+ x)

// Question 09
// var num = 472
// var str = (""+num)
// document.write("Type of '472' is : "+typeof str)
// document.write("<br><br> Type of "+num+" is : "+typeof num)

// Question 10
// var str_1 = window.prompt("Enter a string")
// document.write("User input: " + str_1)
// document.write("<br>String in Uppercase: "+str_1.toUpperCase(str_1))

// Question 11
// var str_2 = window.prompt("Enter a string")
// document.write("User input: " + str_2)
// document.write("<br>String in Titlecase: "+str_2.charAt(0).toUpperCase()+ str_2.substr(1).toLowerCase())

// Question 12
// var num_1 = 35.36
// document.write("Number: " + num_1 +"<br>Result: "+num_1.toString().replace(".",""))

// Question 13
// var str_1 = prompt("Enter any string: ")
// document.write("<br><br>" + str_1)
// var display;
// var arr = [];
// var spilt = str_1.split([])
// document.write("<br><br>" + spilt)
// for (var i = 0; i < str_1.length; i++) {
//     arr[i] = str_1.charCodeAt(i);
//     while (arr[i] == 33 || arr[i] == 44 || arr[i] == 46 || arr[i] == 64) {
//         alert("Please enter a valid username: ");
//         break;
//     }
// }

// Question 14
// var item = new Array()
// item[0] = "cake"
// item[1] = "apple pie"
// item[2] = "cookie"
// item[3] = "chips"
// item[4] = "patties"
// document.write(item)
// document.write(item.length)
// document.write(item[1])
// var search = prompt("What do you want: ")
// for (var i = 0; i < item.length; i++) {
//     while (item[i] == search) {
//         alert("Your item is in the list:")
//         break;
//     }
// }

// Question 15
// var pass=prompt("Enter the password")
// if(pass[0]==parseInt(pass)){
//     alert("Password can not begin with a number ")
// }
// else if(pass.length<6){
//     alert("Please enter a strong password")
// }
// else{
//     alert("Your Password is valid")
// }

// Question 16
// var str_1 = "University Of Karachi";
// var arr =str_1.split([]);
// document.write("<br>\n"+arr)

// Chapter 26 - 30

// Question 01
// var numbers=prompt("Enter the number")
// document.write("<br>Number: ",numbers,"<br>Round of: ",Math.round(numbers),"<br>Floor value: ",Math.floor(numbers),"<br>Ceil value: ",Math.ceil(numbers))

//Question  02
// var num=prompt("Enter negative number")
// document.write("<br>Number: ",num,"<br>Round of: ",Math.round(num),"<br>Floor value: ",Math.floor(num),"<br>Ceil value: ",Math.ceil(num))

//Question 03
// var absolute=prompt("Enter the number")
// document.write("<br> abs is: ",Math.abs(absolute))

//Question 04
// var dice="The number of dice is: "
// document.write("<br>",dice,(Math.round(Math.random(dice)*10)))

//Question 05
// var coin="Random coin value is: "
// var toss=(Math.round(Math.random(coin)*10))
// document.write("<br>",toss,"<br>")
// if(toss<=2){
//     document.write(coin," Head")
// }
// else{
//     document.write(coin," Tail")
// }

//Question6
// document.write("<br> The random number is: ",(Math.round(Math.random()*100)))

//Question 08
// var x = (Math.floor(Math.random()*10)+1)
// var guess = 1
// var y = prompt("Enter any number between 1-10: ")

// if (x==y){
//     alert("You guessed the right number in: "+guess+" guessess")
// }else if(x>y){
//     guess++;
//     alert("OOPS sorry try a smaller number: ")
// }else{
//     guess++;
//     alert("OOPS sorry try a greater number: ")
// }

// chapter 31-34

// Question 01
// var tdate = new Date()
// console.log(tdate)

// Question 02
// const monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];
// const d = new Date();
// console.log("Current month is: " + monthNames[d.getMonth()])

// Question 03
// var d=new Date()
// var k=d.toString()
// document.write("<br>Today is: ",k.slice(0,3))

// Question 04
// var d=new Date()
// var k=d.toString()
// var l=k.slice(0,3)
// if(l=="Sat"|l=="Sun"){
//     document.write("<br>It's a funday")
// }

//Question  11
// var w=new Date()
// var w2= new Date()
// w.setHours(17)
// document.write("<br> Current date ",w,"<br> 1 hour ago it was: ",w2)

//Question 12
// var dates=new Date()
// document.write("Current date: ",dates)
// dates.setFullYear(1920,06,17)
// document.write("<br> 100 years back it was ",dates)

//Question 13
// var d=new Date()
// var age=prompt("Enter your age: ")
// document.write("<br>Your birth year is : ", (d.getFullYear()-age))

//Question 14
var name = prompt("Enter your name")
var d = new Date()
var months = ["jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
var numberofunit = 300
var charges = 200
var netamount = numberofunit * charges
var late = 100
var gross = netamount + late
document.write("<h2>K-electric bill</h2><br>Customer Name : ", name, "<br>Month: ", months[d.getMonth()], "<br>Numbers of unit: ", numberofunit, "<br>Charges per unit: ", charges, "<br>net amount Payable(Within due date) : ", netamount, "<br>Late payment surcharge: ", late, "<br>Gross amount payable: ", gross)

// Chapter 35-38

//Question 01
// function first(){
//     d=new Date()
//     return d
// }
// document.write("<br>",first())

//Question 02
// var take=prompt("Enter first name")
// var last=prompt("Enter last name")
// function input(){
//     alert("Welcome! "+take+" "+last)
// }
// input()

//Question 03
// var num=+prompt("enter number")
// var num1=+prompt("enter number")
// function adding(){
//     b=num+num1
//     return b
// }
// document.write("<br>",adding())

//Question 04
// function calc(num1,opr,num2){
//     if(opr=="+"){
//         return num1+num2
//     }
//     else if(opr=="-"){
//         return num1-num2
//     }
//     else if(opr=="*"){
//         return num1*num2
//     }
//     else if(opr=="/"){
//         return num1/num2
//     }
// }
// document.write("<br>",calc(2,"+",2))

// /* Q5 */
// function sqr(n){
//     return (n**2)
// }
// document.write(sqr(6))

// /* Q6 */
// function fact(n){
//     ans = 1
//     for(i=n;i>=1;i--){
//         ans = ans*i
//     }
//     return ans
// }
// document.write(fact(5))

// /* Q7 */
// function count(s,e){
//     for(i=s;i<=e;i++){
//         document.write(i)
//     }
// }
// count(5,10)

// /* Q8 */
// function calculateHypotenuse(base,perp){
//     return calculateSquare()
//     function calculateSquare(){
//         hyp = (base**2)+(perp**2)
//         return hyp
//     }
// }
// document.write(calculateHypotenuse(4,6))

// /* Q9 */
// function calc(w,h){
//     var a = w * h
//     return a
// }   
// document.write(calc(2,4))
// document.write(calc(x,y))

// /* Q10 */
// function check(str) {
//     var len = Math.floor(str.length / 2);
//     for (var i = 0; i < len; i++)
//       if (str[i] !== str[str.length - i - 1])
//         return false;
//     return true;
//   }
// document.write(check('madam'))

// /* Q11 */
// function upper(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];

//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write(upper('the quick brown fox'))

// /* Q12 */
// function longest(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];
//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(longest( 'Web Development Tutorial'))

// /* Q13 */
// function counting(str,word){
//     var arr1 = str.split('')
//     count = 0
//     for(x=0;x<arr1.length;x++){
//         if(arr1[x]===word){
//             count += 1
//         }
//     }return count

// }
// document.write(counting( 'JSResourceS.com', 'o'))

// /* Q14 */
// function calcCircumference(radius){
//     cir = 2*3.142*radius
//     document.write("The circumference is ",cir)
// }

// function calcArea(radius){
//     area = 3.142*(radius**2)
//     document.write("<br>The area is ",area)
// }

// calcCircumference(4)
// calcArea(4)

//Write a custom function power (a,b) to calculate the value of a raised to b.

// function raisedto(a,b){
//     var theraise = a**b
//     return theraise
// }

// console.log(""+raisedto(3,2))

// //Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.
// var a = window.prompt("Enter the year: ")
// function leapyear(){
//     if(a%4==0){
//         return("This year is a leap year!")
//     }else{
//         return("This year is not a leap year!")
//     } 
// }

// console.log(""+leapyear())

// // If the lengths of the sides of a triangle are denoted by a, b, and
// // c, then area of triangle is given by
// // area = S(S − a)(S − b)(S − c)
// // where, S = ( a + b + c ) / 2

// function areatriangle(a,b,c){
//     var s=(a+b+c)/2;
//     var area = Math.sqrt(s*(s-a)*(s-b)*(s-c))
//     return area
// }

// console.log(""+areatriangle(2,3,4))

// //Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction.

// var chem = window.prompt("Enter number in chem:")
// var urdu = window.prompt("Enter number in urdu:")
// var physics = window.prompt("Enter number in physics:")

// function Marks(){
//     var totalmarks = parseInt(chem)+parseInt(urdu)+parseInt(physics)
//     return totalmarks
// }
// function percentage(){
//     var percent = (Marks()/300)*100
//     return percent
// }
// console.log("The total marks occupied are: "+Marks())
// console.log("Percentage is: "+percentage()+" %")

//Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.

var sentenc = ("The quick brown fox jumps over the lazy dog!");
console.log(sentenc)
function vowels(b){
        r = b.replace(/[aeiou]/g,"")
        return r
}
console.log(""+vowels("The quick brown fox jumps over the lazy dog"))

//Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text.

//The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters.

var distance = "13000kilometer"
function meters(){
    var met = (13000*1000)
    return met
}

function feets(){
    var feet = (13000*3280.84)
    return feet
}

function inches(){
    var inch = (13000*39370.1)
    return inch
}

function centimeters(){
    var cm = (13000*100000)
    return cm
}

console.log("13000kilometeres = "+meters()+" meters")
console.log("13000kilometeres = "+feets()+" feets")
console.log("13000kilometeres = "+inches()+" inches")
console.log("13000kilometeres = "+centimeters()+" cm")

function popup(message){
    alert(message)
}
// //

function remove_1(){
    var element1 = document.getElementById("1st");
    element1.remove();
}
function remove_2(){
    var element2 = document.getElementById("2nd");
    element2.remove();
}
function remove_3(){
    var element3 = document.getElementById("3rd");
    element3.remove();
}
function remove_4(){
    var element4 = document.getElementById("4th");
    element4.remove();
}

// //Display an image in browser. Change the picture on mouseover and set the first picture on mouseout.

function changeImage() {
    var mobile = document.getElementById('1')
    mobile.src = "C:\Users\shiza khan\Desktop\chapter 1-67\e49e439d8187c3696501abd4f380c90c.jpg"
}

function changeImagebefore() {
    var mobile = document.getElementById('1')
    mobile.src = "C:\Users\shiza khan\Desktop\chapter 1-67\zu82349845_main_tm1572713270.jpg"
}


//Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button. And show updated counter value in browser.

var clicks = 0;
function onClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
}

//Suppose in your webpage there is content area in which you have entered your item details, but user can only see some details on first look. When user clicks on “Read more” button, full detail of that particular item will be displayed.

function barapara() {
    var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.";
    document.getElementById("chotapara").innerHTML = expandedParagraph;
}


// /* CHAPTER 06-09 */
// /* Q1 */
var a = 10
document.write("Result:")
document.write("<br>The value of a is: ", a)
document.write("<br>-------------------------------")
a += 1
document.write("<br><br><br>The value of ++a is: ", a)
document.write("<br>Now the value of a is: ", a)
a += 1
document.write("<br><br><br>The value of ++a is: ", a)
document.write("<br>Now the value of a is: ", a)
a -= 1
document.write("<br><br><br>The value of --a is: ", a)
document.write("<br>Now the value of a is: ", a)
a -= 1
document.write("<br><br><br>The value of --a is: ", a)
document.write("<br>Now the value of a is: ", a)

// /* Q2 */
var a = 2
var b = 1
document.write("a is ", a)
document.write("<br>b is ", b)
var result = ((a - 1) - (b - 1)) + ((b + 1) + (b - 1))
document.write("<br>result is ", result)

// /* Q3 */
var user = window.prompt("enter your name :")
document.write("Welcome dear ", user)

// /* Q5 */
var lumber = window.prompt("enter the number :")
if (lumber == "") {
    var no = 5
    for (i = 1; i <= 10; i++) {
        document.write(no, " x ", i, "=" + no * i, "<br>")
    }
} else {
    for (i = 1; i <= 10; i++) {
        document.write(lumber, " x ", i, "=" + lumber * i, "<br>")
    }
}

// /* Q6 */
function mf() {
    var a1 = window.prompt("sub 1")
    var a2 = window.prompt("sub 2")
    var a3 = window.prompt("sub 3")
    var a11 = 100
    var a22 = 100
    var a33 = 100
    var a111 = window.prompt("score 1")
    var a222 = window.prompt("score 2")
    var a333 = window.prompt("score 3")
    var p1 = (a111 / a11) * 100
    var p2 = (a222 / a22) * 100
    var p3 = (a333 / a33) * 100
    var tm = a11 + a22 + a33
    var om = a111 + a222 + a333
    var tbl = document.getElementById("mytable");
    var row = tbl.insertRow();
    var c1 = row.insertCell();
    var c2 = row.insertCell();
    var c3 = row.insertCell();
    var c4 = row.insertCell();
    c1.innerHTML = a1;
    c2.innerHTML = a11
    c3.innerHTML = a111;
    c4.innerHTML = p1;
    var row2 = tbl.insertRow();
    var c1 = row2.insertCell();
    var c2 = row2.insertCell();
    var c3 = row2.insertCell();
    var c4 = row2.insertCell();
    c1.innerHTML = a2;
    c2.innerHTML = a22
    c3.innerHTML = a222;
    c4.innerHTML = p2;
    var row3 = tbl.insertRow();
    var c1 = row3.insertCell();
    var c2 = row3.insertCell();
    var c3 = row3.insertCell();
    var c4 = row3.insertCell();
    c1.innerHTML = a3;
    c2.innerHTML = a33
    c3.innerHTML = a333;
    c4.innerHTML = p3;
    var row4 = tbl.insertRow();
    var c1 = row4.insertCell();
    var c2 = row4.insertCell();
    var c3 = row4.insertCell();
    var c4 = row4.insertCell();
    c1.innerHTML = ""
    c2.innerHTML = a33 + a11 + a22;
    c3.innerHTML = a333 + a222 + a111;
    c4.innerHTML = (p3 + p1 + p2) / 3;