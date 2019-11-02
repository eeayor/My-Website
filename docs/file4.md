# Computer Science

[Science](./file.md) | [Home](./README.md) | [Social Science](./file3.md) | [Math](./file2.md)

### Python

Python is the best programing language if you disagree you're ugly.
#### Variables

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

#### Data Types

There are really only two data types that are useful in real life, that being double and String, since you don't actually have to declare anything it's probably better to not worry about data types and since memory constraints aren't real unless you're working with billions of data points, it's better to just use double and String for everything some people are ugly and use int, some algorithms will need you to use int for indexing or some dumbshit but besides that just use double. Strings are kind of obvious why you should use those over something like Char.

```python
# strings
name = "Jimmy"

# int
x = 5

#double
y = 3.2

print(name)
>>> Jimmy

print(x)
>>> 5

print(y)
>>> 3.2
```

#### Casting

This is some dumb shit, casting is effectively useless in 90% of cases, this is really an unimportant concept but nonetheless.

```python
# by default when casting double -> int python floors the value
x = int(2.8)

"""
number to string is the only use case for 
casting in real life because the previous
case can just be acheived with (%) // and 
math.floor no reason to type cast numbers
```

y = 3.1

print("number of points: "+str(x))
>>> number of points: 3.1
```

#### Boolean

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

#### Operators

These are kind of cool since python has some unique operators.

* Multipication
** Power
% Modulus
+ Addition
- Subtraction
/ Division
// Floor Division

#### Lists (Arrays)

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

Resources:
* [Python](https://www.python.org/)
* [Tutorial Spot](https://www.tutorialspoint.com/python/index.htm)
* [W3 Schools](https://www.w3schools.com/python/)

### Data Science Notes

Data Science, is the science of DATA crazy right I know it's so crazy anyways here are my notes on data science:

* [Pandas](http://markdownnotes.com/+1a1p4m7)
* [Logistic Regression](http://markdownnotes.com/+11klzmy)
* [Elastic-Net](http://markdownnotes.com/+1bbamq3)
* [Lasso](http://markdownnotes.com/+1xg4jao)
* [Overfitting](http://markdownnotes.com/+3hycmo)
* [Regularization](http://markdownnotes.com/+1hmicgm)
* [SGD](http://markdownnotes.com/+1iod72j)
* [Ridge Regression](http://markdownnotes.com/+1cmkffs)
* [Linear Regression](http://markdownnotes.com/+1mmk55t)


Some Resources:

* [Kaggle](https://www.kaggle.com/)
* [Leet Code](https://leetcode.com/problemset/all/)
* [Pandas](https://pandas.pydata.org/pandas-docs/stable/)
* [Sklearn](https://scikit-learn.org/stable/user_guide.html)
* [Learning ML](https://github.com/logan-lieou/Learning-ML)
* [Homemade ML](https://github.com/trekhleb/homemade-machine-learning)
* [Google ML](https://developers.google.com/machine-learning/crash-course)

### CS50W Notes

This here is the sets of notes from Harvard's CS50W Which is a computer science class from Harvard Extension that specifically focuses on website development
with various languages ranging from HTML to SQL.

![CS50W Image](https://online-learning.harvard.edu/sites/default/files/styles/header/public/course/CS50x_web_4-modified.jpg?itok=8wo8PUle)

Notes From CS50W:

* [SQL Notes](./Notes/sql-notes.html)
* [HTML Notes](./Notes/html-css-notes.html)
* [GIT Notes](./Notes/git-notes.html)
* [Flask Notes](./Notes/flask-notes.html)
* [Project 0](./Notes/Project 0.html)
* [Project 1](./Notes/Project 1.html)
