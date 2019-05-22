'use strict';

//get libraries
const express = require('express');
var queue = require('express-queue');
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path');

//create express web-app
const app = express();
const invoke = require('./invokeNetwork');
const query = require('./queryNetwork');
var _time = "T00:00:00Z";

//declare port
var port = process.env.PORT || 8000;
if (process.env.VCAP_APPLICATION) {
  port = process.env.PORT;
}

app.use(bodyParser.json());

//Using queue middleware
app.use(queue({ activeLimit: 30, queuedLimit: -1 }));

//run app on port
app.listen(port, function () {
  console.log('app running on port: %d', port);
});

//-------------------------------------------------------------
//----------------------  POST API'S    -----------------------
//-------------------------------------------------------------

app.post('/api/addconversions', async function (req, res) {

  var request = {
    chaincodeId: 'adverce',
    fcn: 'addConversion',
    args: [
      req.body.conversionID,
      req.body.fk_website_id,
      req.body.fk_event_id,
      req.body.fk_segment_id,
      req.body.fk_campaign_id,
      req.body.fk_advertiser_id,
      req.body.fk_network_id,
      req.body.fk_publisher_id,
      req.body.ad_id,
      req.body.ad_type,
      req.body.transaction_id,
      req.body.transaction_status,
      req.body.transaction_type,
      req.body.conversion_ordervalue,
      req.body.conversion_sale_ordernumber,
      req.body.conversion_lead_ordernumber,
      req.body.campaign_name,
      req.body.website_name,
      req.body.conversion_segment_name,
      req.body.conversion_event_name,
      req.body.reject_reason,
      req.body.publisher_commission,
      req.body.network_commission,
      req.body.network_commission_percentage,
      req.body.registered_ip,
      req.body.country,
      req.body.device,
      req.body.country_code,
      req.body.invoiced,
      req.body.not_paid_by_advertiser,
      req.body.paid_to_publisher,
      req.body.paid_by_advertiser,
      req.body.createdAt + _time
    ]
  };

  let response = await invoke.invokeCreate(request);
  if (response) {
    if(response.status == 200)
    res.status(response.status).send({ message: "The Conversion with ID: "+req.body.conversionID+ " is stored in the blockchain with " +response.message  });
    else
    res.status(response.status).send({ message: response.message});
  }
});

app.post('/api/addclicks', async function (req, res) {

  var request = {
    chaincodeId: 'adverce',
    fcn: 'addClick',
    args: [
      req.body.clickID,
      req.body.fk_website_id,
      req.body.fk_network_id,
      req.body.fk_advertiser_id,
      req.body.fk_campaign_id,
      req.body.fk_publisher_id,
      req.body.ad_id,
      req.body.ad_type,
      req.body.website_name,
      req.body.campaign_name,
      req.body.sub_id,
      req.body.sub_id_1,
      req.body.sub_id_2,
      req.body.sub_id_3,
      req.body.sub_id_4,
      req.body.country,
      req.body.country_code,
      req.body.cpc,
      req.body.ip,
      req.body.trans_id,
      req.body.checksum,
      req.body.user_agent,
      req.body.is_tablet,
      req.body.is_mobile,
      req.body.is_desktop,
      req.body.createdAt + _time
    ]
  };

  let response = await invoke.invokeCreate(request);
  if (response) {
    if(response.status == 200)
    res.status(response.status).send({ message: "The click with ID: "+req.body.clickID+ " is stored in the blockchain with " +response.message  });
    else
    res.status(response.status).send({ message: response.message});
  }

});

//-------------------------------------------------------------
//----------------------  PUT API'S    -----------------------
//-------------------------------------------------------------

app.put('/api/updateclicks', async function (req, res) {

  var request = {
    chaincodeId: 'adverce',
    fcn: 'updateClick',
    args: [
      req.body.clickID,
      req.body.fk_website_id,
      req.body.fk_network_id,
      req.body.fk_advertiser_id,
      req.body.fk_campaign_id,
      req.body.fk_publisher_id,
      req.body.ad_id,
      req.body.ad_type,
      req.body.website_name,
      req.body.campaign_name,
      req.body.sub_id,
      req.body.sub_id_1,
      req.body.sub_id_2,
      req.body.sub_id_3,
      req.body.sub_id_4,
      req.body.country,
      req.body.country_code,
      req.body.cpc,
      req.body.ip,
      req.body.trans_id,
      req.body.checksum,
      req.body.user_agent,
      req.body.is_tablet,
      req.body.is_mobile,
      req.body.is_desktop,
      req.body.createdAt + _time
    ]
  };

  let response = await invoke.invokeCreate(request);
  if (response) {
    if(response.status == 200)
    res.status(response.status).send({ message: "The click with ID: "+req.body.clickID+ " is updated in the blockchain with " +response.message  });
    else
    res.status(response.status).send({ message: response.message});
  }

});

app.put('/api/updateconversions', async function (req, res) {

  var request = {
    chaincodeId: 'adverce',
    fcn: 'updateConversion',
    args: [
      req.body.conversionID,
      req.body.fk_website_id,
      req.body.fk_event_id,
      req.body.fk_segment_id,
      req.body.fk_campaign_id,
      req.body.fk_advertiser_id,
      req.body.fk_network_id,
      req.body.fk_publisher_id,
      req.body.ad_id,
      req.body.ad_type,
      req.body.transaction_id,
      req.body.transaction_status,
      req.body.transaction_type,
      req.body.conversion_ordervalue,
      req.body.conversion_sale_ordernumber,
      req.body.conversion_lead_ordernumber,
      req.body.campaign_name,
      req.body.website_name,
      req.body.conversion_segment_name,
      req.body.conversion_event_name,
      req.body.reject_reason,
      req.body.publisher_commission,
      req.body.network_commission,
      req.body.network_commission_percentage,
      req.body.registered_ip,
      req.body.country,
      req.body.device,
      req.body.country_code,
      req.body.invoiced,
      req.body.not_paid_by_advertiser,
      req.body.paid_to_publisher,
      req.body.paid_by_advertiser,
      req.body.createdAt + _time,
    ]
  };

  let response = await invoke.invokeCreate(request);
  if (response) {
    if(response.status == 200)
    res.status(response.status).send({ message: "The Conversion with ID: "+req.body.conversionID+ " is updated in the blockchain with " +response.message  });
    else
    res.status(response.status).send({ message: response.message});
  }
});

//-------------------------------------------------------------
//----------------------  GET API'S FOR CLICKS-----------------
//-------------------------------------------------------------


app.get('/api/queryclickbyid', async function (req, res) {

  const request = {
    chaincodeId: 'adverce',
    fcn: 'queryClick',
    args: [req.query.clickID]
  };
  let response = await query.invokeQuery(request)
  if (response) {
    if(response.status == 200)
    res.status(response.status).send({ message: JSON.parse(response.message) });
    else
    res.status(response.status).send({ message: response.message });
  }

});

app.get('/api/queryclicksbycreatedate', async function (req, res) {
  const request = {
    chaincodeId: 'adverce',
    fcn: 'queryClicksByCreatedAt',
    args: [req.query.createdAt + _time]
  };
  console.log(request)
  let response = await query.invokeQuery(request)
  if (response) {
    if(response.status == 200)
    res.status(response.status).send({ message: JSON.parse(response.message) });
    else
    res.status(response.status).send({ message: response.message });
  }
});

app.get('/api/queryclicksbetweencreateddate', async function (req, res) {
  const request = {
    chaincodeId: 'adverce',
    fcn: 'queryClicksBetweenCreatedDate',
    args: [req.query.startdate + _time, req.query.enddate + _time]
  };
  let response = await query.invokeQuery(request)
  if (response) {
    if(response.status == 200)
    res.status(response.status).send({ message: JSON.parse(response.message) });
    else
    res.status(response.status).send({ message: response.message });
  }
});

//-------------------------------------------------------------
//---------------  GET API'S FOR CONVERSIONS  -----------------
//-------------------------------------------------------------

app.get('/api/queryconversionbyid', async function (req, res) {
  const request = {
    chaincodeId: 'adverce',
    fcn: 'queryConversion',
    args: [req.query.conversionID]
  };
  let response = await query.invokeQuery(request);
  if (response) {
    if(response.status == 200)
    res.status(response.status).send({ message: JSON.parse(response.message) });
    else
    res.status(response.status).send({ message: response.message });
  }
});

app.get('/api/queryconversionsbycreatedate', async function (req, res) {
  const request = {
    chaincodeId: 'adverce',
    fcn: 'queryConversionsByCreatedAt',
    args: [req.query.createdAt + _time]
  };
  console.log(req.query.createdAt + _time)
  let response = await query.invokeQuery(request)
  if (response) {
    if(response.status == 200)
    res.status(response.status).send({ message: JSON.parse(response.message) });
    else
    res.status(response.status).send({ message: response.message });
  }
});

app.get('/api/queryconversionsbetweencreateddate', async function (req, res) {
  const request = {
    chaincodeId: 'adverce',
    fcn: 'queryConversionsBetweenCreatedDate',
    args: [req.query.startdate + _time, req.body.enddate + _time]
  };
  let response = await query.invokeQuery(request)
  if (response) {
    if(response.status == 200)
    res.status(response.status).send({ message: JSON.parse(response.message) });
    else
    res.status(response.status).send({ message: response.message });
  }
});


//-------------------------------------------------------------
//----------------------  DELETE API'S    ------------------------
//-------------------------------------------------------------

app.post("/api/deleteclick",async function(req,res){
  const request = {
    chaincodeId: 'adverce',
    fcn: 'deleteClick',
    args: [req.body.clickID]
  };
  let response = await invoke.invokeCreate(request);
  if (response) {
    if(response.status == 200)
    res.status(response.status).send({ message: "The click with ID: "+req.body.clickID+ " is deleted from the blockchain. " +response.message });
    else
    res.status(response.status).send({ message: response.message});
  }
});

app.post("/api/deleteconversion",async function(req,res){
  const request = {
    chaincodeId: 'adverce',
    fcn: 'deleteConversion',
    args: [req.body.conversionID]
  };
  let response = await invoke.invokeCreate(request);
  if (response) {
    if(response.status == 200)
    res.status(response.status).send({ message: "The click with ID: "+req.body.conversionID+ " is deleted from the blockchain. " +response.message });
    else
    res.status(response.status).send({ message: response.message});
  }
});