# testAPI

TEST API

On a request to the server, the program will perform a match against a given set of item IDs and return matching values


##TO USE:

INSTALL:
`$ git clone https://github.com/mickberber/testAPI`
`$ cd testAPI`
`$ npm install`

RUN SERVER:
`$ node server.js`

WITH SERVER RUNNING USE CURL(OR GOOGLE POSTMAN):

FORMAT FOR CALLING THE API(CURL):
 `curl -X POST localhost:8080/?{item_goes_here}`

FROMAT FROM POSTMAN:
-Set request type to POST
SEND WITH THIS FORMAT: `localhost:8080/?{item_goes_here}`