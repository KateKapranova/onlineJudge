import test from 'ava'
import request from 'supertest'
import app from '../app'

test('Create a new weektask', async t => {
    t.plan(5)
    const weektaskToCreate = {
      name: 'Algorithms 1.0',
      deadline: '2019-12-05T23:00:00.000Z',
      releaseDate: '2019-11-25T23:00:00.000Z',
      maxPoints: 3,
    }

    const res = await request(app)
      .post('/weektask')
      .send(weektaskToCreate)
  
    // checking for server response status success
    t.is(res.status, 200)
  
    // comparing the created student's data
    t.is(res.body.name, weektaskToCreate.name)
    t.is(res.body.deadline, weektaskToCreate.deadline)
    t.is(res.body.releaseDate, weektaskToCreate.releaseDate)
    t.is(res.body.maxPoints, weektaskToCreate.maxPoints)
    
    //delete the weektask from DB 
    await request(app).delete(`/weektask/${res.body._id}`)
  })


test('Fetch a weektask', async t => {
    t.plan(3)
    const weektaskToCreate = {
        name: 'Algorithms 2.0',
        deadline: '2019-12-05T23:00:00.000Z',
        releaseDate: '2019-11-25T23:00:00.000Z',
        maxPoints: 5,
      }

    // create a weektask
    const WeektaskCreated = (await request(app)
        .post('/weektask')
        .send(weektaskToCreate)).body
    
    console.log(WeektaskCreated)
    
    // fetch the weektask we just created
    const fetchRes = await request(app).get(`/weektask/${WeektaskCreated._id}`)
    // checking for server response status success
    // this endpoint is rendering into HTML
    t.is(fetchRes.status, 200)

    const fetchResJson = await request(app).get(`/weektask/${WeektaskCreated._id}/json`)
    // checking for server response status success
    t.is(fetchResJson.status, 200)

    // this endpoint is responding with the user detail JSON data
    // compare the fetched user with created user
    const WeektaskFetched = fetchResJson.body
    t.deepEqual(WeektaskFetched, WeektaskCreated)

    //delete the student from DB because we have email uniqueness validation
    await request(app).delete(`/weektask/${WeektaskCreated._id}`)
})

test('Delete a weektask from database', async t => {
    t.plan(4)
  
    // first create a weektask
    const weektaskToCreate = {
        name: 'Algorithms 3.0',
        deadline: '2019-12-05T23:00:00.000Z',
        releaseDate: '2019-11-25T23:00:00.000Z',
        maxPoints: 2,
    }

    const WeektaskCreated = (await request(app)
      .post('/weektask')
      .send(weektaskToCreate)).body
  
    // delete the weektask
    const deleteRes = await request(app).delete(`/weektask/${WeektaskCreated._id}`)
    // checking for server response status success
    t.is(deleteRes.status, 200)
    t.is(deleteRes.ok, true)
  
    // trying to render the detail page for the deleted weektask
    const fetch = await request(app).get(`/weektask/${WeektaskCreated._id}`)
    // checking for server response status - page not found 404
    t.is(fetch.status, 404)
  
    // trying to fetch the JSON data of the deleted weektask
    const fetchJson = await request(app).get(`/weektask/${WeektaskCreated._id}/json`)
    // checking for server response status - page not found 404
    t.is(fetchJson.status, 404)
  })

  

test('Get a list of weektasks', async t => {
    t.plan(3)
  
    // first create a person to ensure that
    // there will be at least 1 user in people's list
    const weektaskToCreate = {
        name: 'Algorithms 4.0',
        deadline: '2019-12-05T23:00:00.000Z',
        releaseDate: '2019-11-25T23:00:00.000Z',
        maxPoints: 1,
    }
    const WeektaskCreated = await request(app)
      .post('/weektask')
      .send(weektaskToCreate)
  
    // get the list of people - render view
    const res = await request(app).get('/weektask/all')
    // checking for server response status success
    t.is(res.status, 200)
  
    // get the list of people - JSON
    const jsonRes = await request(app).get('/weektask/all/json')
    // checking for server response status success
    t.is(jsonRes.status, 200)
  
    // check the response whether it is an array
    t.true(Array.isArray(jsonRes.body), 'Body should be an array')
    // check the response whether at least there is 1 element
    // t.true(jsonRes.body.length > 0)

    await request(app).delete(`/weektask/${WeektaskCreated.body._id}`)
})



// test('Delete all weektasks from DB', async t => {
//     t.plan(5)
  
//     // first create a weektask
//     const weektaskToCreate = {
//         name: 'Algorithms 7.0',
//         deadline: '2019-12-05T23:00:00.000Z',
//         releaseDate: '2019-11-25T23:00:00.000Z',
//         maxPoints: 6,
//     }

//     const WeektaskCreated = (await request(app)
//       .post('/weektask')
//       .send(weektaskToCreate)).body
  
//     // delete all weektasks
//     const deleteRes = await request(app).delete('/weektask/all/delete')
//     // checking for server response status success
//     t.is(deleteRes.status, 200)
//     t.is(deleteRes.ok, true)
  
//     // trying to render the detail page for the deleted weektask
//     const fetch = await request(app).get(`/weektask/${WeektaskCreated._id}`)
//     // checking for server response status - page not found 404
//     t.is(fetch.status, 404)
  
//     // trying to fetch the JSON data of the deleted weektask
//     const fetchJson = await request(app).get(`/weektask/${WeektaskCreated._id}/json`)
//     // checking for server response status - page not found 404
//     t.is(fetchJson.status, 404)

//     const fetchWeektasks = await request(app).get('/weektask/all/json')
//     t.deepEqual(fetchWeektasks.body,[])
//   })