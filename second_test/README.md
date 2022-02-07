## Solutions Engineer's second test
Congratulations on passing the first test!

Now, it is time to show your programming qualities.

## Description
Being able to track the capacity that a courier has in their vehicle left at any time is crucial. Our Dispatcher (the brain that optimizes the delivery routes) needs this input so that it can understand if a courier has room left or not in their vehicle.

## Main Goal

Write an API that will be queried by two services: the Stuart API and the Dispatcher.

The Stuart API will need to keep in sync the list of Couriers in the platform as well as their max capacity (in liters).
```bash
curl -X POST http://localhost:3000/couriers --data '
{
  "id": 1234,
  "max_capacity": 45
}'
```
The Dispatcher will need to query this API to find out which couriers do have available space.
```bash
curl -X GET http://localhost:3000/couriers/lookup --data '
{
  "capacity_required": 45
}'
```
Write the API that will allow adding, removing and updating couriers' capacities, and that will let lookup a list of couriers whose capacity is greater or equal to the one required.
## The solution choose

The project is seperated in two part:
 - First a [nodeJs express application](https://github.com/Filibert/solutions-engineers/tree/dev/second_test/courier-capacity-manager) write in typescript.
 - Secondly a mongoDB instance

To simplify the usage of the app there is a docker-compose.yaml to create both part and setting up the node secrets.

The connection between the app and the database is handle by [MongooseJS](https://mongoosejs.com/)
For the test part I used [Jest](https://jestjs.io/) and [superTest](https://github.com/visionmedia/supertest)

To run the project in dev mode you can run the mongo container ```docker-compose up mongo``` and in the [Courier-capacity-manager folder](https://github.com/Filibert/solutions-engineers/tree/dev/second_test/courier-capacity-manager) run ```npm run watch``` and start querrying the 8080 port or ```run npm test``` to play the jest test.

To simply try the result you can simply run ```docker-compose up```  

## Left To-do

There is still a lot to do ...
 - Adding a bunch of test but before everything else make a conf to create a new DB and clean it between test, maybe with [mongodb-memory-server](https://www.npmjs.com/package/mongodb-memory-server)
 - Be able to connect to the db create during the container creation to avoid use the default 'test' base
 - Play with [mutex](https://www.npmjs.com/package/async-mutex) to avoid race conditions  
