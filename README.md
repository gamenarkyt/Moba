# Moba - Mock backend server
**Version:** 0.2

## For what?
- Every junior frontend developer should work with a backend. Json server and etc won't teach you how to work with the backend. Don't waste your time on todo lists app.

## What is CRUD?
- Create, read, update (patch) and delete functions for any endpoint.


## What is JWT?
- Json Web Token used for authorization on site without store password.


## Features:
- No configs or etc, just clone and run `yarn start:dev`
- Easy syntax for db (prisma orm)
- Support login and register with hash password and session auth token.
- Base project have (CRUD):
  1. Users endpoint 
  2. Posts endpoint 
  3. Auth endpoint 
- An opportunity to work with a real backend and understand how it works from the inside (this is important for junior frontend)
- simple for understanding usage examples (frontend)

## Roadmap:
- [ ] Endpoint
  - [x] Users endpoint
  - [ ] Posts endpoint
  - [ ] Auth endpoint
- [x] Typing dto with TypeScript
- [ ] Support hash and auth token (jwt)
- [ ] Validation Pipe
- [ ] Usage examples


## Install:
  1. Create folder like "mysite-backend" and go to it
  2. ```git clone https://github.com/gamenarkyt/Moba .```
  3.Create .env file and write this:
  ```js
DATABASE_URL="file:./dev.db"
JWT_SECRET="YOUR SECRET KEY"
```
  4. Start project ```yarn start:dev```

## I'm not a backend developer, if you find bug or etc you can push requests with corrections.


