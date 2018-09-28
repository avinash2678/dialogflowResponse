'use strict';
var http = require("http");
var applicationResouces = require("./applicationResouces");
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements

http.createServer(function (request, response) {
    switch (request.method) {
        
        case "POST":
		 const agent = new WebhookClient({ request, response });
         console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
         console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
         console.log('parameters is  ' + agent.parameters['name']);
         const jsonRequest=JSON.stringify(request.body);
         console.log('jsonRequest --------------'+jsonRequest);
         var obj = JSON.parse(jsonRequest);
         console.log('result------------'+obj.queryResult.queryText);
		
		
             resp.writeHead(200, "operation  successfull", { "Content-Type": "application/json" });
             resp.write(JSON.stringify({ "fulfillmentText" :obj.queryResult.queryText }));
             resp.end();
           
            break;
        default:
          
            break;
    }
}).listen( applicationResouces.port);
