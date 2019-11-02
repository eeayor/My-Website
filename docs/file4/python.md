# Python

Python is the best programing language if you disagree you're ugly.
## Variables

Variables are placeholders for some value. In python you can use variables by themselves without declaring type or some dumb shit for example:

```python
x = 5
print(x)

>>> 5
```

this works for anything in python, no types are ever declared and this will extend to arguements in a function later on.

```python
x = "value"
y = [3, 2, 1]

print(x)
>>> value

print(y)
>>> '[3, 2, 1]'
```

## Data Types

There are really only two data types that are useful in real life, that being double and String, since you don't actually have to declare anything it's probably better to not worry about data types and since memory constraints aren't real unless you're working with billions of data points, it's better to just use double and String for everything some people are ugly and use int, some algorithms will need you to use int for indexing or some dumbshit but besides that just use double. Strings are kind of obvious why you should use those over something like Char.

```python
# strings
name = "Jimmy"

# int
x = 5

# double
y = 3.2

print(name)
>>> Jimmy

print(x)
>>> 5

print(y)
>>> 3.2
```

## Casting

This is some dumb shit, casting is effectively useless in 90% of cases, this is really an unimportant concept but nonetheless.

```python
# by default when casting double -> int python floors the value
x = int(2.8)

"""
number to string is the only use case for 
casting in real life because the previous
case can just be acheived with (%) // and 
math.floor no reason to type cast numbers
"""

y = 3.1

print("number of points: "+str(x))
>>> number of points: 3.1
```

## Boolean

True and False, that's it nothing speical.

```python
# returns true

x = 3 > 1

# returns false

y = 2 < 1

# in a return statement

def stuff(x):
  if(x):
    return True
  else:
    return False
    
stuff(x)
>>> False
  
```

## Operators

These are kind of cool since python has some unique operators.

```
"""
* Multipication
** Power
% Modulus
+ Addition
- Subtraction
/ Division
// Floor Division
"""

a = 3 * 2
print(a)
>>> 6

b = 3**9
print(b)
>>> 19683

c = 7 % 5
print(c)
>>> 2

d = 2 + 9
print(d)
>>> 11

e = 9 - 3
print(e)
>>> 6

f = 9 / 3
print(f)
>>> 3

g = 9 // 2
print(g)
>>> 4
```

## Lists (Arrays)

In python Lists are one of the first most basic data structures, lists are just arrays of numbers where each number has some unique identifier called an index, this is the location of the number of value in the list.

```python
# list of strings
list = ["a", "b","c"]
print(list[0])
>>> a

# list of numbers
arr = [3, 2, 5, 1]
print(arr[1] + arr[2])
>>> 8
```

Some unique operations on lists include .pop(), len(), .append(), .insert(), and .remove()

```python
# made up array
arr = [2, 7, 5, 1]

a = arr.pop()

print(a)
>>> 1

arr.pop()
print(arr)

>>> '[2, 7, 5]'

b = len(arr)
print(b)
>>> 3

arr.append(1)

print(arr)
>>> '[2, 7, 5, 1]'

arr.insert(0, 9)
print(arr)
>>> '[9, 2, 7, 5, 1]'

arr.remove(9)
print(arr)
>>> '[2, 7, 5, 1]'
```
