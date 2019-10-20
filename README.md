# onlineJudge

Online Judge is an online submission system for grading of Algorithms submissions at the Institute of Informatik (Universität Potsdam).

## Architecture

The online judge system will be deployed on servers of the Institute of Informatik and will include an online web client with two modi: student and admin. The system architecture will adopt a model-view-controller approach. Frontend is realised with HTML, CSS, JS, Bootstrap. 
Backend is realised with JS.

### Implemented classes

#### Student
A Student object should be recognised by the system and can submit an assignment for grading, see the grading of a submission and view her/his semester performance.

#### Weektask

Weektask class is a model of a weekly programming assignment that is to be submitted by students. A task is graded by the judge system.
Multiple submissions correspond to a single task.

#### Submission
Submission instance is a solution to a particular weekly task submitted by a student. A submission should be an executable py-file and it is graded by the judge system. Each submission is associated with a particular student, a particular task and and a grade. Each submission should be checked against the submission deadline and file extension.
