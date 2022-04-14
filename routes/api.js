'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert').get((req, res) => {
    console.log(req.query);
     const initNum = convertHandler.getNum(req.query.input);
    
    const initUnit = convertHandler.getUnit(req.query.input);
    console.log(initNum, initUnit);
    const isNum = initNum === 'error';
    const isUnit = initUnit === 'error';
    if(isNum||isUnit){
      
      res.send(convertHandler.invalid(isNum, isUnit));
      return
    }

    const returnNum = convertHandler.convert(initNum, initUnit);

    const returnUnit = convertHandler.getReturnUnit(initUnit);

    const string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

    const result = 
      { initNum: initNum,
       initUnit: initUnit, 
       returnNum: returnNum, 
       returnUnit: returnUnit, 
       string: string }

    res.json(result);
    
  });

};
