# Javascript SPA - Project

In order to demonstrate my proficiency with what I've learned about web development with JavaScript, I am creating this SPA to show my *skillz*!?!

## Techincal Requirements

- [X] The application must be an HTML, CSS, and JavaScript frontend with a Rails API backend. All interactions between the client and the server must be handled asynchronously (AJAX) and use JSON as the communication format.

- [X] The JavaScript application must use Object Oriented JavaScript (classes) to encapsulate related data and behavior.

- [X] The domain model served by the Rails backend must include a resource with at least one has-many relationship. For example, if you were building an Instagram clone, you might display a list of photos with associated comments.

- [ ] The backend and frontend must collaborate to demonstrate Client-Server Communication. Your application should have at least 3 AJAX calls, covering at least 2 of Create, Read, Update, and Delete (CRUD). Your client-side JavaScript code must use fetch with the appropriate HTTP verb, and your Rails API should use RESTful conventions.

## Planning

**When I visit my site ...**

- I can choose from a variety of charachters to let it loose on.
- I can choose from a variety of items to throw at my charachter.
- My charachter has many expressions.
- My charachter has many sayings.
- My charachter will be knocked out after X long

**Models needed**

- *charachters*: name, title, imageUrl, knockout_phrase
  - has_many *sayings*: phrase, belongs_to charachter
- *items*: name, damage, base_imageUrl, splat_imageUrl
- *expressions*: description, imageUrl

**Controller/Route Setup**

- charachter: index, show, update
  - saying: update, show
- items: index, show
- expressions: show


**Stretch Goals
- [ ] Create localStorage for User