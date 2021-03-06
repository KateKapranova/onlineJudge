# onlineJudge

Online Judge is a submission system for automatic grading of programming assignments at the Institute of Informatik (Universität Potsdam).

## Architecture

The online judge system will be deployed on servers of the Institute of Informatik and will include an online web client with two modi: student and admin. The system architecture will adopt a model-view-server approach. Frontend is realised with HTML, CSS, JS, Bootstrap. 
Backend is realised with Node.js, Express.js and MongoDB.

### Package layout
The project has been modularised. As of now, it is realised with the domain-driven design in mind and separated into models, views and services. The created objects are written into .json files. As of now, database is realised as a collection of .json files. The attached database is MongoDB.

### Implemented classes

#### Student
A Student object should be recognised by the system and can submit an assignment for grading, see the grading of a submission and view her/his semester performance.

#### Weektask

Weektask class is a model of a weekly programming assignment that is to be submitted by students. A task is graded by the judge system.
Multiple submissions correspond to a single task.

#### Submission
Submission instance is a solution to a particular weekly task submitted by a student. A submission should be an executable py-file and it is graded by the judge system. Each submission is associated with a particular student, a particular task and and a grade. Each submission should be parsed to detect potentially dangerous calls and library imports (requirement imposed by the sys admin). If the file was cleared, it can be checked against the submission deadline and file extension. If both are compliant, the file is run by the judge.

### Test coverage
Unit and integration tests are available in the test folder. Ava test package us used. Run the tests with the following command:
```
npm run test
```
