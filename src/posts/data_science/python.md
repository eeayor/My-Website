# Python

Python is a programming language, it's probably the easiest language to pick up and learn and understand. From a conceptual standpoint python is probably the best first language as you don't get overwhelmed by all kinds of extra stuff that's really not that important for a beginer such as trying to memorize `System.out.println();` or what the fuck `public static void main(String[] args) {` does or what the fuck `*int` means. Python is very strighforeward and easy to understand thus allowing for people to just understand programming, rather than memorizing programming.

A basic hello world: 

```python
print("Hello world!")
```

It's pretty self explainatory, print out hello world to the screen, that's it. other concepts are very simple in python as well such as functions.
```python
def sum(x, y):
	return x + y
```

You can see that it's a function because of the keyword `def` and you know what it's returning x + y because of the keyword `return` you also find that every function needs to return something, or does it? This is where python is kinda bad: 

```python
def hello(name):
	print("Hello " + str(name))
```

So someone who is starting out may actually think you are returning something in this function, perhaps a string, but really since types in python are implied this function is a `void` function meaning that it has no return statement. If a function has no `return` then it's void. What we are doing in this function is calling another function then mutating it's output by passing an arugment.

Something else that's kinda terrible about programming classes is OOP, and this is something that python does really well as python is considered a *multi paradigm* language you are not constrained to just OOP like in java or just procedural programming like in C.

```python 

# functional
sum = lambda x y: x + y

# or

sum([x, y])

# oop
class sum_obj:
	def __init__(self, x, y):
		self.x = x
		self.y = y
	def call(self):
		return self.x + self.y
		
# most people
def sum(x, y):
	return x + y

```

This is really op as it allows people to understand and learn multipule paradigms. Python is also really useful for a number of things, including data science, finance, web development, research (data collection, and math), automation / scripting , and IoT (micropython). You could include game development on there but in all reality py game is a meme and most practical use cases for python in game development fall under automation / scripting.
