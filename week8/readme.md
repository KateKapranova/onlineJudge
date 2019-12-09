# Deployment Process

## Tools

The following tools are needed for deployment: Docker, CLI heroku and docker-compose. Check their successful installation with the following commands

```
docker --version
heroku --version
docker-compose --version
```
If terminal says "permission denied", just add ```sudo``` before the command. Also some of the tools might be installed outside of /usr/bin. Add them to the PATH or update aliases in .bashrc.
Register at heroku.com and run in terminal ```heroku login```, which will take you to heroku webpage.

## Deployment Preparation

### Stop the current instance of DB
Don't forget to stop the running instance of your DB because the deployed containerised version will use a different focal point.
In Linux use the command:
```
sudo systemctl stop mongodb
```

### Refactor your code

Split your code into two folders: backend and frontend. Add a Dockerfile into each of these folders. Put a docker-compose.yml into the root folder of your project. Make necessary configurations of the code to ensure the application can run not just on localhost and use a database instance. Change in backend index.js and in frontend /src/store/index.js and vue.config.js.

### Create containers
Start the docker deamon with
```
sudo dockerd
```
and create containers for backend and frontend with 
```
sudo docker-compose up
```
Now everything is ready for deployment.

## Deployment walkthrough