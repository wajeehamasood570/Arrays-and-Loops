// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
// var arr = [ [ ], [ ], [ ] ];

// 2. Declare and initialize a multidimensional array
// representing the following matrix:
// var arr = [ [0 1 2 3], [1 0 1 2], [2 1 0 1] ];

// 3. Write a program to print numeric counting from 1 to 10.
// for(var i=1; i<11; i++)
// {
//     document.write(i);
//     document.write("<br>");
// }

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// var num = +prompt("enter any number which table u want to print");
// var num1 = +prompt("how many multiples u want to print");
// for (var i=1; i<=num1; i++)
// {
//     document.write( num + " * " + i + " = " + num*i + "<br>");
// }

// 5. Write a program to print items of the following array
// using for loop:
// var fruit = ["apple" , "banana" , "mango" , "orange" , "strawberry"];
//  for (var i=0; i<5; i++)
//  {
//     document.write("elemeno of index[" + i + "] " + "is " +  fruit[i]);
//     document.write("<br>");
//  }


// 6. Generate the following series in your browser. See
// example output.

// document.write("<h1>");
// document.write("counting")
// document.write("</h1>");
// for(var i=1; i<11; i++)
//  {
//      document.write(i);
//      document.write("<br>");
//  }

//  document.write("<h1>");
// document.write("reversed counting")
// document.write("</h1>");
// for(var i=10; i>0; i--)
//  {
//      document.write(i);
//      document.write("<br>");
//  }

//  document.write("<h1>");
// document.write("even")
// document.write("</h1>");
// for(var i=0; i<21; i++)
//  {
//      if(i%2==0)
//      {
//      document.write(i);
//      document.write("<br>");
 
//     }
// }


// document.write("<h1>");
// document.write("odd")
// document.write("</h1>");
// for(var i=0; i<21; i++)
//  {
//      if(i%2==1)
//      {
//      document.write(i);
//      document.write("<br>");
 
//     }
// }


// document.write("<h1>");
// document.write("series")
// document.write("</h1>");
// for(var i=0; i<21; i++)
//  {
//      if(i%2==0)
//      {
//      document.write(i+"K");
//      document.write("<br>");
 
//     }
// }

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not.

// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var order = prompt("welcome to my bakery. want do you want to order sir/maam?");
// for(var i=0; i<=5; i++)
// {
//     if(order==items[i])
//     {
//         break;   
//     }
     
   
    // document.write("we are sorry " + order + " is not available in our bakery. ");
// }
// document.write(order + " is present at index[" + i + "] in our bakery. ");


// else()

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

// var a = [24, 53, 78, 91, 12];
// for(var i=0; i<4; i++)
// {
//     var max = a[i];
//     if(max>a[i+1])
//     {
//         max=a[i];
//     }
// }
// console.log("the largest number is " + max);



// 8. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12].

// var a = [24, 53, 78, 91, 12];
// for(var i=0; i<4; i++)
// {
//     var max = a[i];
//     if(max<a[i+1])
//     {
//         max=a[i];
//     }
// }
// console.log("the smallest number is " + max);

    

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

// var num = 5;
// for (var i=1; i<=20; i++)
// {
//     document.write( num*i +" , ");
// }