#Backtracking

### What is Backtracking?

Backtracking is technically a tree search algorithm, but for the most part is used to
solve Constraint Satisfaction Problems (CSP) say we have a tree S of all possible
solutions to some CSP what backtracking does is it searches S and eliminates s (where
s is a subset of S) that can not possibly yield valid solutions.


So now none of that made sense let's look at the beginning.

### When would I want to use Backtracking?

So as stated before Backtracking is generally used to solve Constraint Satisfaction
Problems (CSP) so what is a Constraint Satisfaction Problem? A Constraint Satisfaction
is when you have some set of things where each thing must comply with a list
of constraints that problem has.

For example, Sudoku. You start with a 9x9 grid, we would define this grid as X and each
element in X, X<sub>i</sub>, X<sub>i</sub> would have to satisfy a list of constraints
C, in the case of Sudoku ~inRow ~inCol ~inBox these constraints constrain the domain D
in Sudoku D is 1-9 but each X<sub>i</sub> has a corresponding domain D<sub>i</sub> that
domain is limited on what it can be based on C, so if we start at the first elem
X<sub>1</sub> D<sub>1</sub> can be any value 1-9 given that no other values exist in X
now for X<sub>2</sub> the domain D<sub>2</sub> must comply with the constraints, ~inCol
~inRow ~inBox if we iterate across the row by incrementing col, we know that the first
elem. X<sub>1</sub> is both inBox and inRow but not inCol so the constraints put on
D<sub>2</sub> is that it can be any value 1-9 such that it's not the same value as
X<sub>1</sub> or any value 1-9 such that it's ~inRow or ~inBox, this would obviously
continues across the grid. Expanding upon this we would define the CSP as: <X, D, C>
where each X<sub>n</sub> has possible value D<sub>n</sub> such that it satisfies
C<sub>n</sub>.

For the most part though you don't want to actually use backtracking unless it's for
a specific problem such as solving Sudoku where there's really no other options because
The backtracking algorithm has exponential space and time complexity.

### Backtracking

Backtracking finds all/some solutions to a problem and incrementally includes new
candidates to solve the problem it backtracks candidates who prove to have no possible
valid solution saving precious computational resources that would have been wasted on
computing invalid solutions.

*Sudoku Example*:

```c++
bool solveSudoku( int grid[N][N], int row, int col)
{
  // if the index is at the end
  if (row == N - 1 && col == N) {
    // and if constraints satisfied
    if (isSafe(grid)) {
      // output solved grid
      printGrid(grid);
      // and return true
      return true;
    }
    
    // otherwise return false
    // meaning the grid is not actually solved
    return false;
  }

  // end of row move to next row
  // end of row is indicated by being at the last column
  if (col == N) {
    row++;
    col = 0;
  }

  // if the element is non zero keep as is
  if (grid[row][col] != UNASSIGNED)
    return solveSudoku(grid, row, col + 1);

  // consider digits from 1-9
  for (int num = 1; num <= 9; num++) {
    grid[row][col] = num;

    // recurse
    if (solveSudoku(grid, row, col + 1))
      // return true of we have reached the end
      return true;

    // failure
    grid[row][col] = 0;
  }
  
  // continue trying
  return false;
}
```


*Sudoku Example Backtracking*:


```c++
bool SolveSudoku (int grid[N][N])
{
    int row, col;

    // if there are no empty squares assume solved
    // this is technicaly bad but whatever
    if (!FindUnassignedLocation(grid, row, col))
        return true;

    for (int num = 1; num <= 9; num++) {
        // check constraints
        if (isSafe(grid, row, col, num)) {
            grid[row][col] = num;
            
            // recurse
            if (SolveSudoku(grid))
                return true;

            // this means failure
            grid[row][col] = UNASSIGNED;
        }
    }

    // trigger backtracking
    return false;
}
```

Checking the compiled runtime of backtracked vs not, the difference is huge, on average
the non-backtracked sudoku algorithm takes 7.9 ish sec whereas the backtracked algorithm
takes 0.002 sec on average.


































