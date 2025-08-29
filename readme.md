1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: We use getElementById to select the element that has a same Id attribute, getelementsByClassName selects all the element that have the same class name, querySelector select the first element that match the Css selector, querySelectorAll selects all elements that match the css selector.

2. How do you create and insert a new element into the DOM?
Ans: We use document.createElement("element name") to create an element and then use .appendChild() or .append() to insert into the Dom.

3. What is Event Bubbling and how does it work?
Ans: Event Bubbling is mechanism which shows when an event happen on an element, it also triggers it's parent element and then it's grand-parent and bubble up all the way to the root document.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event Delegation is a method to add an event listener to a parent element to watch for events happenning on all of its child elements. It is useful beacause it saves time, keeps the code clean, saves memory.

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: stopPropagation() method stops an event bubbling from a child element to it's parent element. preventDefault() is used to prevent the normal or default behavior for a certain event or program.
