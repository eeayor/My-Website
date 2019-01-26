# Math

[Science](./file.md) | [Home](./README.md) | [Social Science](./file3.md) | [CS50W Notes](./flask-notes.md)

## Rolle’s Theorem

Informally, Rolle’s theorem states that if the outputs of a differentiable function f are equal at the endpoints of an interval, then there must be an interior point c where f'(c)=0. Figure illustrates this theorem.

![Rolle's Theorem](https://cnx.org/resources/9f7150213d442c25a178dfa4522641987a7eefcc/CNX_Calc_Figure_04_04_009.jpg)

Rolle's Theorem Definition
>Let f be a continuous function over the closed interval [a,b] and differentiable over the open interval (a,b) such that f(a)=f(b). There then exists at least one c∈(a,b) such that f'(c)=0.

### Proof

Let k=f(a)=f(b). We consider three cases:

f(x)=k for all x∈(a,b).
There exists x∈(a,b) such that f(x)>k.
There exists x∈(a,b) such that f(x)<k.
Case 1: If f(x)=0 for all x∈(a,b), then f'(x)=0 for all x∈(a,b).

Case 1: If f(x)=0 for all x∈(a,b), then f'(x)=0 for all x∈(a,b).
Case 2: Since f is a continuous function over the closed, bounded interval [a,b], by the extreme value theorem, it has an absolute maximum. Also, since there is a point x∈(a,b) such that f(x)>k, the absolute maximum is greater than k. Therefore, the absolute maximum does not occur at either endpoint. As a result, the absolute maximum must occur at an interior point c∈(a,b). Because f has a maximum at an interior point c, and f is differentiable at c, by Fermat’s theorem, f'(c)=0.
Case 3: The case when there exists a point x∈(a,b) such that f(x)<k is analogous to case 2, with maximum replaced by minimum.

An important point about Rolle’s theorem is that the differentiability of the function f is critical. If f is not differentiable, even at a single point, the result may not hold. For example, the function f(x)=|x|−1 is continuous over [−1,1] and f(−1)=0=f(1), but f'(c)≠0 for any c∈(−1,1) as shown in the following figure.

![](https://cnx.org/resources/9531b9f556e1af873bdab455695aafa3b48c8f27/CNX_Calc_Figure_04_04_002.jpg)

## The Mean Value Theorm and It's Meaning

Rolle’s theorem is a special case of the Mean Value Theorem. In Rolle’s theorem, we consider differentiable functions f defined on a closed interval [a,b] with f(a)=f(b). The Mean Value Theorem generalizes Rolle’s theorem by considering functions that do not necessarily have equal value at the endpoints. Consequently, we can view the Mean Value Theorem as a slanted version of Rolle’s theorem (Figure). The Mean Value Theorem states that if f is continuous over the closed interval [a,b] and differentiable over the open interval (a,b), then there exists a point c∈(a,b) such that the tangent line to the graph of f at c is parallel to the secant line connecting (a,f(a)) and (b,f(b)).

![](https://cnx.org/resources/93636db137f86180ba6563682c50d33f697d9396/CNX_Calc_Figure_04_04_010.jpg)
Mean Value Theorm Definition
>Let f be continuous over the closed interval [a,b] and differentiable over the open interval (a,b). Then, there exists at least one point c∈(a,b) such that

>f'(c)=f(b)−f(a)b−a.

### Proof

The proof follows from Rolle’s theorem by introducing an appropriate function that satisfies the criteria of Rolle’s theorem. Consider the line connecting (a,f(a)) and (b,f(b)). Since the slope of that line is

f(b)−f(a)b−a
and the line passes through the point (a,f(a)), the equation of that line can be written as

y=f(b)−f(a)b−a(x−a)+f(a).
Let g(x) denote the vertical difference between the point (x,f(x)) and the point (x,y) on that line. Therefore,

g(x)=f(x)−[f(b)−f(a)b−a(x−a)+f(a)].

![](https://cnx.org/resources/8f22590bb46713efdae2b7cc7ee843d9a4eeee4e/CNX_Calc_Figure_04_04_011.jpg)

Since the graph of f intersects the secant line when x=a and x=b, we see that g(a)=0=g(b). Since f is a differentiable function over (a,b), g is also a differentiable function over (a,b). Furthermore, since f is continuous over [a,b], g is also continuous over [a,b]. Therefore, g satisfies the criteria of Rolle’s theorem. Consequently, there exists a point c∈(a,b) such that g'(c)=0. Since

g'(x)=f'(x)−f(b)−f(a)b−a,
we see that

g'(c)=f'(c)−f(b)−f(a)b−a.
Since g'(c)=0, we conclude that

f'(c)=f(b)−f(a)b−a.


In the next example, we show how the Mean Value Theorem can be applied to the function f(x)=x−−√ over the interval [0,9]. The method is the same for other functions, although sometimes with more interesting consequences.


One application that helps illustrate the Mean Value Theorem involves velocity. For example, suppose we drive a car for 1 h down a straight road with an average velocity of 45 mph. Let s(t) and v(t) denote the position and velocity of the car, respectively, for 0≤t≤1 h. Assuming that the position function s(t) is differentiable, we can apply the Mean Value Theorem to conclude that, at some time c∈(0,1), the speed of the car was exactly

v(c)=s′(c)=s(1)−s(0)1−0=45mph.
