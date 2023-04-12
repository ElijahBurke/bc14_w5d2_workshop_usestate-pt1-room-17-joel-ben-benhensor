# React useState Workshop - Morning Tasks

If you get stuck, you can refer to the docs [here](https://beta.reactjs.org/learn/state-a-components-memory) and [here](https://beta.reactjs.org/apis/react/useState#usestate) for context, syntax, and examples as well as loads of other resources just a Google away!

Note: Remember to start your app with `npm start` in your terminal!

## Task 1 - Counter

**1.1:**

👉 This repo has the React app already created within it. You just need to install the Node modules. (If you forget the terminal command to do this, you can always Google it.)

**1.2:**

👉 Navigate to [App.js](./src/App.js). First, you'll need to import `useState` from React at the top of the file.

**1.3**

👉 Create a piece of state at the top of your `App` component called `count` with an initial state of `0`. If you need a reminder of how to declare state, check the [docs](https://react.dev/reference/react/useState)!

**1.4**

👉 Write a function called `handleCounterClick` that sets the `count` state to one more than its previous value (incrementing it by 1) each time it's called.

**1.5**

👉 In the JSX that the `App` component renders, update the h2 with `className='count'` to show the current value of the `count` state.

👉 Update the `className="countButton"` to call your `handleCounterClick` function when clicked.

Be sure to run and test your app and ensure your counter increments on the page before moving on!

## Task 2 - Random Name Generator

**2.1:**

👉 You've been provided with an array of bootcamper names in [this file](./src/bootcampers.js). Import it into your [App.js file](./src/App.js) so we can use it in our app.

**2.2:**

👉 Create a piece of state at the top of your `App` component called `bootcamperIndex` with an initial state of `0`.

**2.3:**

👉 Write a function called `handleBootcamperClick` within your app component, and inside of this, use the function from your useState to set the `bootcamperIndex` state to be a random number between zero and the length of the bootcampers array.

It's a good idea to test this function with `console.log` before moving on!

**2.4:**

👉 In the JSX that the app component renders, insert into the `<p>` tag the item of the bootcampers array at the current `bootcamperIndex` (instead of its current text of BOOTCAMPER NAME).

Remember, your state holds the _index_ - you'll then need to **use this index** to access the bootcamper at that position in the array. Your state should not contain a bootcamper name! Break it down until you can't break it down further and make a plan. If you don't remember how to access an item in an array using an index value, research online.

**2.5:**

👉 In the JSX that the app component renders, update the button to call your `handleBootcamperClick` function when it gets clicked. If you need a reminder on how to handle events in React, check the [docs](https://reactjs.org/docs/handling-events.html)

Great! Run your React app in the browser to test it. You should now be getting a random bootcamper every time you click that button.

## Task 3 - Random Compliments

**3.1:**

👉 Now try and repeat the outcome of task one still using handleBootcamperClick, but this time use a random compliment as well as the bootcamper names. There's an array of compliments in [here](./src/bootcampers.js) that you may have noticed earlier. Feel free to add more compliments to the array - you can never have enough nice things to say about people!

**3.2:**

👉 Make a new piece of state for the index of the compliment array and a separate `<p>` tag in your app component to display the compliment alongside the name you've generated in task one.

**3.3:**

👉 Add code to your `handleBootcamperClick` function so that it sets this additional state to be a random index between 0 and the length of the array of compliments as well.

Run your app to make sure that both a random bootcamper's name and a random compliment are both generated when you click the button.

## Bonus:

🌟 Create a `/components` folder, and break this app into `<Counter/>` and `<Bootcamper` components. Abstract the elements in `App` into these components and then import and call them within `App`. Test that your app still functions the same when you run it.

🌟 Think of a third state that you can add to your app, and then implement it. Experiment with using a different data type than the numbers you've been using.
