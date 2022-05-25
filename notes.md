# Notes

## Requirements
Your app must be a HTML/CSS/JS frontend that accesses data from a public API. All interactions between the client and the API should be handled asynchronously and use JSON as the communication format. Try to avoid using an API that requires a key. APIs that are free and require no authorization will be easiest to use. For ideas, see this list of no-auth APIs. If you would like to use an API that requires a key, please consult with your instructor on how to protect that key. NEVER push your API key to github!

Your entire app must run on a single page. There should be NO redirects. In other words, your project will contain a single HTML file.

Use at least 3 unique event-listeners that enable interactivity. Think search or filter functionality, toggling dark/light mode, upvoting posts, etc. Each of your event listeners should have its own unique callback function.

Your project must implement at least one instance of array iteration using available array methods (map, forEach, filter, etc). Manipulating your API data in some way should present an opportunity to implement your array iteration.

Follow good coding practices. Keep your code DRY (Do not repeat yourself) by utilizing functions to abstract repetitive code.

## Project idea

- Binge watch calculator: get an idea of how long it would take to watch a TV Show

### user stories

#### MVP
- I should type in a name of a tv show and see a list of results (submit event)(iterate over results) (completed)
- from those results I should be able to select a show and get the number of episodes and seasons of that show and average runtime (click event) (completed)
- I should see some brief information about the show (complete)
- I should be able to choose how many episodes a night I want to watch and get a number of sittings to complete (click event) (completed)

#### Stretch goals
- I should be able to break it down by season
- I should be able to tell how many episodes I've watched and get accurate results from there
- Using the current date and the number of episodes I want to watch per night, I should see a date when I will finish (completed)
- I should be able hold onto numbers and keep track when revisiting the app

#### miscelaneous issues
- Want to get accurate show counts to now, only episodes that have currently aired
- Add links to more info
