# Deployment Process

## Tools

The following tools are needed for deployment: Docker, CLI heroku and docker-compose. Check their successful installation with the following commands

```
docker --version
heroku --version
docker-compose --version
```
If terminal says "permission denied", just add ```sudo``` before the command. Also some of the tools might be installed outside of /usr/bin. Add them to the PATH or update aliases in .bashrc.

## Deployment Preparation

### Stop the current instance of DB
Don't forget to stop the running instance of your DB because the deployed containerised version will use a different focal point.
In Linux use the command:
```
sudo systemctl stop mongodb
```
Keep in mind that your database data will be lost after it.

### Refactor your code

Split your code into two folders: backend and frontend. Add a Dockerfile into each of these folders. These Dockerfiles will automatically build a Docker image for frontend and backend sides. Using an image you can create as many Docker containers as needed on as many nodes/machines as you want. 

Add a docker-compose.yml into the root folder of your project. This file automatically creates a Docker container based on the specifications listed. Make necessary changes of the code to ensure the application can run not just on localhost and use a database instance. Apply changes in backend index.js, in frontend /src/store/index.js and vue.config.js.

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

The application is initially deployed in heroku cloud. For this register at heroku.com and run in terminal ```heroku login```, which will take you to heroku webpage, to complete login. After successful login syncronise your docker instance with the heroku account by ```sudo heroku container:login```.

Both frontend and backend are to be deployed in two distinct steps.

### Backend deployment

First, change into backend subdirectory and initialise a git repository:

```git init```

Then create a heroku app for backend:

```sudo heroku create "app-name-backend"```

Build the image of your backend app:

```sudo heroku container:push web```

and release the image with the command:

```sudo heroku container:release web```

From now on you can see the landing page of your backend view:

```sudo heroku open```

Don't forget to configure your DB connection:
```
sudo heroku config:set VUE_APP_API_URL="https://jscc19-${USER}-backend.herokuapp.com"
```

This will ensure that the other URLs are accessible as well. Try:

```sudo heroku open /student/all```

Since it is a fresh instance of DB, you expect to see an empty array.


### Frontend deployment

The steps are similar to the backend deployment.

Change into frontend subdirectory and initialise a git repo:

```git init```

Create a heroku app for frontend:

```sudo heroku create "app-name-frontend"```

Build the image of your frontend app:

```sudo heroku container:push web```

Establish a connection with your backend:

```heroku config:set VUE_APP_API_URL="https://app-name-backend.herokuapp.com"```

And finally release the image:

```sudo heroku container:release web```

Enjoy the frontend part of the application with:

```sudo heroku open```
