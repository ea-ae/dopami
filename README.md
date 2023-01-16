# dopami

The name is a placeholder. Dopami is a full-stack web application created primarily for learning purposes.

## How to run

Build ASP.NET backend (VS2022 preferred), `npm install` & `npm run prod` in the `client` service to build frontend. To start the application, run a reverse proxy (e.g. `npm run server` for the dev server) together with the ASP.NET backend server.

When using Docker for deployment, first tweak the nginx and docker-compose configurations to match your needs (proper domain names, etc). Then run the prod or deploy script found in the `tools` folder.

## Media

![Screenshot](https://i.imgur.com/2PPFjNQ.png)
