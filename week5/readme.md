# Axios requests for onlineJudge

## Get Requests

One can show all the students and all the weektasks registered in the system with:

```
localhost:3000/student/all
localhost:3000/weektask/all
```

One can display individual students and weektasks by their MongoDB id:
```
localhost:3000/student/:studentId
localhost:3000/weektask/:weektaskId
```

## Post Requests
One can post a new student with the following axios request:
```
axios.post('/student', {name: "Kamil", email: kamil@uni-potsdam.de", password: "qwerty"}).then(console.log)

```
It's important to note that each student must have a different email address.

One can post a new weektask with the following axios request:
```
axios.post('/weektask', {name: "Divide and Conquer", deadline: '2019-11-30T00:00', releaseDate: '2019-11-23T00:00',maxPoints: 3}).then(console.log)

```
In this case release date means a date when a task becomes available for submission. Generally students have a week to submit a task.

A registered student can submit a solution to a weektask as follows, where URL specifies
```
axios.post('/student/:studentId/submit/:weektaskId', {file: "task01.py"} ).then(console.log)
```

## Delete Requests

One can delete a student or a weektask with a delete request:

```
axios.delete('/student/:studentId').then(console.log)
axios.delete('/weektask/:weektaskId').then(console.log)
```