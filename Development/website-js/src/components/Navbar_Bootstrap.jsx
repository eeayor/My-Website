import React from 'react'
import { Component } from 'react';
import { Navbar, NavDropdown, Nav, Form, Button, FormControl } from 'react-bootstrap';

class Navbar_Bootstrap extends Component {
    render() {
        return(
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <NavDropdown title="Computer Science" id="basic-nav-dropdown">
                        <NavDropdown.Item href="https://www.tutorialspoint.com/python/index.htm">Python</NavDropdown.Item>

                        <NavDropdown.Item href="https://www.geeksforgeeks.org/data-structures/">Data Structures</NavDropdown.Item>

                        <NavDropdown.Item href="https://ocw.mit.edu/courses/civil-and-environmental-engineering/1-204-computer-algorithms-in-systems-engineering-spring-2010/">Algorithms</NavDropdown.Item>

                        <NavDropdown.Item href="https://en.wikipedia.org/wiki/Automata_theory">Automata Theory</NavDropdown.Item>

                        <NavDropdown.Item href="https://ocw.mit.edu/courses/mechanical-engineering/2-158j-computational-geometry-spring-2003/">Computational Geometry</NavDropdown.Item>
                        <NavDropdown.Divider></NavDropdown.Divider>
                        <NavDropdown.Item href="https://stackabuse.com/functional-programming-in-python/">
                            Functional Programming
                        </NavDropdown.Item>
                        <NavDropdown.Item href="https://www.codeproject.com/Articles/22769/Introduction-to-Object-Oriented-Programming-Concep">
                            Object Oriented Programming
                        </NavDropdown.Item>
                        <NavDropdown.Item href="https://www.tutorialspoint.com/cprogramming/c_structures.htm">
                            Structural Programming
                        </NavDropdown.Item>
                        <NavDropdown.Item href="https://en.wikipedia.org/wiki/Procedural_programming">
                            Procedural Programming
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Data Science" id="basic-nav-dropdown">
                        <NavDropdown.Item href="https://pandas.pydata.org/pandas-docs/stable/">Pandas</NavDropdown.Item>

                        <NavDropdown.Item href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-867-machine-learning-fall-2006/">Machine Learning</NavDropdown.Item>

                        <NavDropdown.Item href="https://www.kaggle.com/learn/feature-engineering">Feature Engineering</NavDropdown.Item>

                    </NavDropdown>
                    <NavDropdown title="Math" id="basic-nav-dropdown">
                        <NavDropdown.Item href="https://ocw.mit.edu/resources/res-18-001-calculus-online-textbook-spring-2005/textbook/">Calculus</NavDropdown.Item>

                        <NavDropdown.Item href="https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/">Linear Algebra</NavDropdown.Item>

                        <NavDropdown.Item href="https://www.tutorialspoint.com/discrete_mathematics/index.htm">Discrete Maths</NavDropdown.Item>

                        <NavDropdown.Item href="https://brownmath.com/swt/pfswt.htm">Statistics</NavDropdown.Item>

                        <NavDropdown.Item href="http://tutorial.math.lamar.edu/Classes/DE/DE.aspx">Diff Eq</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navbar_Bootstrap