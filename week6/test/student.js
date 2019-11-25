import test from 'ava'
import request from 'supertest'
import app from '../app'
const randomstring = require("randomstring")

test('Create a new Student', async t => {
    t.plan(6)
    const studentToCreate = {
      name: 'Max Mustermann',
      email: randomstring.generate(8)+'@uni-potsdam.de',
      average: 0,
      totalPoints: 0,
      password: "MySuperSecurePassword!!..+"
    }

    const res = await request(app)
      .post('/student')
      .send(studentToCreate)
  
    // checking for server response status success
    t.is(res.status, 200)
  
    // comparing the created student's data
    t.is(res.body.name, studentToCreate.name)
    t.is(res.body.email, studentToCreate.email)
    t.is(res.body.average, studentToCreate.average)
    t.is(res.body.total, studentToCreate.total)
    t.is(res.body.password, studentToCreate.password)

    //delete the student from DB because we have email uniqueness validation
    await request(app).delete(`/student/${res.body._id}`)
  })


test('Fetch a student', async t => {
    t.plan(3)
    const studentToCreate = {
      name: 'Felicia Mustermann',
      email: randomstring.generate(8)+'@uni-potsdam.de',
      average: 0,
      totalPoints: 0,
      password: "MySuperSecurePassword!!..+"
    }

    // first create a student
    const StudentCreated = (await request(app)
        .post('/student')
        .send(studentToCreate)).body

    
    // fetch the student we just created
    const fetchRes = await request(app).get(`/student/${StudentCreated._id}`)
    // checking for server response status success
    // this endpoint is rendering into HTML
    t.is(fetchRes.status, 200)

    const fetchResJson = await request(app).get(`/student/${StudentCreated._id}/json`)
    // checking for server response status success
    t.is(fetchResJson.status, 200)

    // this endpoint is responding with the user detail JSON data
    // compare the fetched user with created user
    const StudentFetched = fetchResJson.body
    t.deepEqual(StudentFetched, StudentCreated)

    //delete the student from DB because we have email uniqueness validation
    await request(app).delete(`/student/${StudentCreated._id}`)
})

test('Delete a student from DB', async t => {
    t.plan(4)
  
    // first create a person
    const studentToCreate = {
        name: 'Wiebke Mustermann',
        email: randomstring.generate(8)+'@uni-potsdam.de',
        average: 0,
        totalPoints: 0,
        password: "qwerty123"
    }

    const wiebkeStudentCreated = (await request(app)
      .post('/student')
      .send(studentToCreate)).body
  
    // delete the person
    const deleteRes = await request(app).delete(`/student/${wiebkeStudentCreated._id}`)
    // checking for server response status success
    t.is(deleteRes.status, 200)
    t.is(deleteRes.ok, true)
  
    // trying to render the detail page for the deleted user
    const fetch = await request(app).get(`/student/${wiebkeStudentCreated._id}`)
    // checking for server response status - page not found 404
    t.is(fetch.status, 404)
  
    // trying to fetch the JSON data of the deleted user
    const fetchJson = await request(app).get(`/student/${wiebkeStudentCreated._id}/json`)
    // checking for server response status - page not found 404
    t.is(fetchJson.status, 404)
  })

test('Get a list of students', async t => {
    t.plan(4)
  
    // first create a person to ensure that
    // there will be at least 1 user in people's list
    const studentToCreate = {
        name: 'Laura Mustermann',
        email: randomstring.generate(8)+'@uni-potsdam.de',
        average: 0,
        totalPoints: 0,
        password: "admin123"
    }
    const StudentCreated = await request(app)
      .post('/student')
      .send(studentToCreate)
  
    // get the list of people - render view
    const res = await request(app).get('/student/all')
    // checking for server response status success
    t.is(res.status, 200)
  
    // get the list of people - JSON
    const jsonRes = await request(app).get('/student/all/json')
    // checking for server response status success
    t.is(jsonRes.status, 200)
  
    // check the response whether it is an array
    t.true(Array.isArray(jsonRes.body), 'Body should be an array')
    // check the response whether at least there is 1 element
    t.true(jsonRes.body.length > 0)

    await request(app).delete(`/student/${StudentCreated.body._id}`)
})


test('Student can make a submission', async t => {
    const barbaraStudent = {
        name: 'Barbara Mustermann',
        email: randomstring.generate(8)+'@uni-potsdam.de',
        average: 0,
        totalPoints: 0,
        password: "dkhfkjhrk"
    }
  
    const greedy = {
        name: 'Algorithms 6.0',
        deadline: '2019-12-05T23:00:00.000Z',
        releaseDate: '2019-11-25T23:00:00.000Z',
        maxPoints: 1,
    }
  
    // create a student
    const createdStudent = (await request(app)
    .post('/student')
    .send(barbaraStudent)).body
  
    // create a weektask
    const createdWeektask = (await request(app)
    .post('/weektask')
    .send(greedy)).body
  
    // make a submission by student
    const makeSubmissionRes = await request(app)
    .post(`/student/${createdStudent._id}/submit/${createdWeektask._id}`)
    .send( {file: "something.py"} )
  
    // check the server response success
    t.is(makeSubmissionRes.status, 200)
  
    // response body is the altered data of the user
    // const MadeSubmission = makeSubmissionRes.body
    
    console.log(createdStudent)
    console.log(createdWeektask)

    await request(app).delete(`/student/${createdStudent._id}`)
    await request(app).delete(`/weektask/${createdWeektask._id}`)

    // check that user has that meetup on their meetups
    // t.is(studentAltered.submissions[0]._id, createdMeetup._id)
  
    // // check that user's meetup is the meetup we created
    // t.deepEqual(personAltered.meetups[0], createdMeetup)
  
    // // personAltered is not the same with the first created user
    // // createdPerson had no meetups
    // // personAltered has the meetup amongst their list of meetups
    // t.notDeepEqual(personAltered, createdPerson)
  })