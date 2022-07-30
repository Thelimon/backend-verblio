<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# Backend Verblio challenge
## Overwiew

#### This project was made with NestJS and TypeScript, also Docker was used for hosting PostgresSQL database.

## Steps to run application

1. Clone the repository.
2. Install the dependencies with.
```bash
npm install
```
3. Turn on database.
```bash
docker compose up
```
4. Run the application with.
```bash
nest start --watch
````
5. For get, post and delete requests use:
```bash
localhost:3000/api/talk, attendee or speaker
```
6. For get a single talk use:
```bash
localhost:3000/api/talks/:talk_uid
```
