# Learning a Programming Language

So today I was learning C# because Java is trash, as well as the fact I was looking into many different languages for writing a fullstack application and C# seemed like a good canidate due to the fact
.NET Core is so well documented. So basicly I had to learn C# and well how do I learn a language? 

# The Paradigm

If the language is like Java or C# then you want to look into Object Oriented Programming as a general concept because this is really important for understanding how these languages work. If I was to learn
a functional language like Haskell or F# then I may want to look at Functional Programming as a general concept. As for OOP most major programming languages rely on Object Oriented Programming, if you're
in school you may learn about the pillars of Object Oriented Programming
- Encapsulation
- Abstraction
- Inheritence
- Polymorphism
Now in all reality this means nothing what you need to know is how to express these pillars in the language itself, so for example in C#
```c#
// Inheritence
class species : genus {}
```
Inheritence attributes of genus are inherited to species
```c#
// Polymorphism
class canus 
{
  string getName() { return "dogs lol"; }
} 
class lupus:canus 
{ 
  string getName() { return "grey wolf"; } 
}
class aureus:canus
{
  string getName() { return "golden jackal"; }
}
```
Polymorphism a method getName() is assigned to many different operations based on the class.
```c#
// Abstraction
abstract class canus 
{
  private string _name;
  private int _age;
  
  public abstract string getName() { return "dogs lol"; }
}
```
Abstraction an abstract class cannot be instatiated but has to be inherited.
```c#
class canus
{
  public string name { get => _name; set => _name = value; }
  public int age { get => _age; set => _age = value; }
}
```
Encapsulation in C# is a bit different instead of methods we are able to encapsulate with get and set keywords which get values from the instatiated object and set values to given attributes.

# JSON Parsing

JSON is an important part of modern software development as JSON is the way in which we interact with databases or APIs, we want our programming language to be able to take an input as JSON and do something with
that input.

```c#

```



