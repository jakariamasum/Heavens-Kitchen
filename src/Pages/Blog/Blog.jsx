import React, { useRef } from 'react';
const Blog = () => {
  
    return (

        <div className='mx-32 my-14'>
            <div>
                <h1 className="text-3xl font-bold mb-3">The differences between uncontrolled and controlled components.</h1>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Controlled component</th>
                                <th>Uncontrolled component</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>The parent component has held over the form data.</td>
                                <td>The DOM itself holds control over the data.</td>
                            </tr>
                            <tr className="active">
                                <th>2</th>
                                <td>It does not maintain its internal state.</td>
                                <td>It maintains its internal state.</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>It allows validation control.</td>
                                <td>It does not allow validation control.</td>
                            </tr>
                            <tr className='active'>
                                <th>4</th>
                                <td>It has better control over the form data</td>
                                <td>It has limited control over the form data.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='my-6'>
                <h1 className="text-3xl font-bold mb-3">How to validate React props using PropTypes</h1>
                <ul>
                    <p>Import the PropTypes module from the prop-types package:
                        <li>import PropTypes from 'prop-types';</li>
                    </p>
                    <p>Declare the expected types and properties for your component's props using the propTypes property of the component:
                        <li>
                            MyComponent.propTypes =
                            prop: PropTypes.string.isRequired,
                            prop2: PropTypes.number,
                            prop3: PropTypes.bool
                            ;
                        </li>
                    </p>
                    <p>Pass the props to your component when rendering it:
                        <li>MyComponent prop1="hello" prop2={42} prop3={true} /</li>
                    </p>
                </ul>
            </div>
            <div>
                <h1 className="font-bold text-3xl">The difference between nodejs and express js</h1>
                <p>Express.js, on the other hand, is a popular web application framework built on top of Node.js. It provides a set of features and tools for building web applications and APIs, such as routing, middleware, and templating engines. Express.js simplifies the development of server-side applications by providing a structured and organized approach to building web applications. <br />
                    Here are some of the key differences between Node.js and Express.js: <br />
                    <ul className='list-disc ml-14'>
                        <li>Purpose: Node.js is a runtime environment for executing JavaScript code on the server-side, while Express.js is a web application framework built on top of Node.js.</li>
                        <li>Functionality: Node.js provides the basic functionality for building server-side applications, while Express.js provides additional features and tools for building web applications and APIs.</li>
                        <li>Flexibility: Node.js provides a lot of flexibility and control over the application architecture, while Express.js provides a more structured and opinionated approach to building web applications.</li>
                        <li>Learning curve: Node.js requires a deeper understanding of the underlying technologies, such as HTTP and network protocols, while Express.js abstracts away some of these complexities and provides a simpler, more intuitive API.</li>
                    </ul>
                </p>
            </div>
            <div>
                <h1 className="font-bold text-3xl my-6">What is a custom hook, and why will you create a custom hook?</h1>
                <p>
                    A custom hook is a reusable function in React that encapsulates a specific behavior and can be used across multiple components in an application. Custom hooks allow developers to abstract complex logic and state management into a single, reusable function, making it easier to maintain and reuse code. <br />
                    In React, hooks are functions that allow functional components to use state and other React features that were previously only available in class components. Custom hooks are simply hooks that are created by the developer for their specific use case. <br />
                    Developers create custom hooks to encapsulate complex logic and state management that may be used in multiple components. By doing this, the logic can be reused across components and avoid code duplication, making it easier to maintain and update code. Custom hooks can also help to keep components clean and easy to read, by separating out the logic into a separate function.</p>
            </div>
        </div>
    );
};

export default Blog;