Self-Study/Essay Questions
 What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
	Answer: 
		PropTypes library is for testing the types of data passed in props. PropTypes is important because as an application becomes more complex many errors can come about by trying to manipulate a data using methods intended for a different data type.
		
 Describe a life-cycle event in React?
	Answer: 
		A life-cycle event in react is a component of the application flow. There is an order to the flow of a React application, each step or event has its own specific purpose. An example of a react life-cycle event would be mounting and unmounting from the dom, as well as when a component receives new data. We can declare special methods on the component class to run some code when a component mount and unmount.
		
 Explain the details of a Higher Order Component?
	Answer:
		A HOC in React is a pattern used to share common functionality between components without repeating code. A higher order component is actually not a component though, it is a function.
		
 What are three different ways to style components in React? Explain some of the benefits of each.
	Answer: 
		1. CSS Stylesheet. Old school. Easy. Can get messy in big applications.
		2. Inline styling. Style is defined as an object and passed in as variable within {}. Easy. Makes a component a true component because all references to style are contained within the component file itself as a JavaScript object.
		3. styled-components. Lets you define your css as a styled-component in a string literal, so you can define your css as a variable that can be passed. Like Inline styling styled-components lets you keep your styles contained within the component itself and the styling does not conflict with the other component styles.