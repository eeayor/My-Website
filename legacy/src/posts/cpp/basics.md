# Introduction To C++

C++ is the language that we are using in college so I thought I would go over setting up the enviornment and writing your first program particually hello world:

```c++
#include <iostream>

int main() 
{
  std::cout << "Hello world!" << std::endl;
}

```

and just breaking down the program and trying to understand what it really does.

### IDEs and why you Shouldn't use One
For the pourposes of learning I don't think an IDE is really that good and in many ways can hurt the student as on exams and such you will not have autocompletion, autoimports or anything, so it's a good idea in my opinion to use a text editor instead to write your C++ code from scratch such that you can actually remember syntax as that's what's tested on in programming classes. Another issue with IDEs is, the denial of understanding via abstraction of concepts. What this means is for example, when you load up a project in CLion or Visual Studio there is already prexisting "boilerplate" code that is present. The issue with that is, is the student fails to learn how the programming language actually works and becomes soely dependent on the "boilerplate" rather than actually understand how the program is run, and structured. IDEs can be good for people who already know how to program as it speeds up their process with features such as autocompletition and autoimport but for a student these features may end up doing more harm than good.

TLDR: IDEs are for people who already know how to program, and deny students fundemental understanding of programing by abstracting away the need for students to understand how code works. 


### Enviornment Setup
So if you're using a unix based operating system (mac os, linux, bsd) this enviornment setup guide is made for you. If you're on windows please get off my website, just kidding but seriously if you're on windows and planning on developing I would highly encourage installing a different operating system or installing WSL read more about it [here](https://docs.microsoft.com/en-us/windows/wsl/install-win10), but if unfortunately you have decided to stay on windows for some reason you can go get MinGW [here](http://www.mingw.org/) and attempt to follow along.


So the first step, is to have a compiler. gcc if you're on linux or bsd, clang if you're on mac os. On mac os I belive you have to download XCode so that you can get clang but I'm not sure because my mac already has XCode on it and I couldn't figure out if it came built in or not.

The second step is to create a cpp file. Run `touch main.cpp` all this does is initializes an empty file with the extention .cpp and the name main. 

The last step is: open main.cpp in your favorite text editor.

> Note on text editors; if you don't know what text editor to use I would recommend learning vim as it has the highest return on time investment of any text editor.

### The Program

```c++
#include <iostream>

int main()
{
  std::cout << "Hello world!";
  return 0;
}

```


So what is the program doing here? Obviously a lot of people will just copy and paste the code above into their text editor and just move on to the compile step but this part is pretty important. So first of all at the very top of our program we have `#include <iostream>` this is telling c++ to include the headerfile for the input output stream, we need this header file because we want to output to the console. This header includes cout and endl here in the program. In our main function you will notice that it says `int main()` the reason why it's an int and not a void is because legacy and ANSI without getting too much into it the main function will just return an integer based on weather or not the program ran sucsessfully. According to standards the value that indicates the program ran successfully is 0, so we `return 0;` in the main function to indicate that the program finnished running / it ran successfully. Technicly the compiler adds this on by default so it's not required for the program to work correctly but is still seen in many textbooks and classes. the main line of code here is the `std::cout << "Hello world!";` what's going on here is that we are taking a string (which is just an array of characters) and passing it through standard console out `std::cout` passing the string to the standard console output prints the string to the console.

### Compiling

On linux based system `g++ main.cpp -o main`
On mac os `clang++ main.cpp -o main`

Then run with `./main`

On windows `delete system32`



