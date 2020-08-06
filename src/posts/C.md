# The C Programming Language

To get started with programming C you may want to install gcc, which is the gnu c compiler. The C compiler cc is pre installed on most machines, gcc is also pre installed on most machines, the commands will work with cc or gcc.

You may have to install gcc or cc manually on Windows, and I don't really know how to or care to know how to do that, you can probably just look it up it's probably not that hard.

So the first thing you may want to do is write a program, this is really simple writing a C program all you have to do is start up your favorite text editor, and save the file type as .c for example the following program:

```c
int main() {

}
```

As you can see there is nothing there except for the main function. You can save this program as program.c and compile it with gcc like follows: `gcc program.c -o program` then run the program with `./program` there is no output obviously because there's nothing that you put in your program. In order to get output you need to include the header stdio, in order to do this:

```c
#include <stdio.h>

int main() {

}
```

Now you can get output with the printf function. We can read the documentation for printf [here](https://devdocs.io/c/io/fprintf) as we can see the printf function is pretty complicated. `int printf( const char *format, ...);` the reason why printf is an int, is because apparently void didn't exist back then so printf returns the number of characters. A string in C is not actually a string but rather an array of characters, so when passing the const char of *format argument that's actually a pointer of type char to your "string" which can contain special format operators. The documentation says the format is a null-terminated multibyte string specifying how to interpret the data contained within an input string. The format string contains normal characters like 'a' 'b' 'c' 'd' etc. except for '%' which acts an an introductory character. What this means is when the compiler runs into '%' it then knows that the following will point to some value in order in the additional arguements %d, for example points to a digit in the later arguements so if you pass `printf("%d", 3);` it will print out 3 you cannot do just `printf(3)` as 3 is not a string. But when you pass %d it points to the first arguement of type *int, *long, etc. Finally it takes the mutated char array, and outputs it to stdout which is the console in this case. You may also want to include another special character, which isn't specified in the documentation as it's just a character that you can input regardless of language: '\n' is the character value of a cariage return. C doesn't include \n at the end of it's output by default so when you run ./program the output may look super jank.

```c
#include <stdio.h>

int main() {
  printf("%d\n", 3);
}
```


Here is a test post, really that's all it is.
