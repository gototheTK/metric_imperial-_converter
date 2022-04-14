function ConvertHandler() {

  regexForNum = /[0-9\.]+/g;
  regexForUnit = /[a-z]+/i;

  units = {
    gal: 'gal',
    l: 'L',
    mi: 'mi',
    km: 'km',
    lbs: 'lbs',
    kg: 'kg'
  };

  convertedUnits = {
    gal: 'L',
    l: 'gal',
    mi: 'km',
    km: 'mi',
    lbs: 'kg',
    kg: 'lbs'
  };

  stringUnits = {
    gal: 'gallons',
    l: 'liters',
    mi: 'miles',
    km: 'kilometers',
    lbs: 'pounds',
    kg: 'kilograms'
  };

  this.invalid = (num=false, unit=false)=> {

    return num&&unit ? 'invalid number and unit' : num ? 'invalid number' : 'invalid unit'; 
    
  }

  this.getNum = function(input) {

    let result = input.match(regexForNum);
    if(result == null){
      return 1;
    }
    
    let numCount = result.length;
    if(numCount === 1){
      return Number(result.pop());
    }else if(numCount === 2){

      if(input.match(/\//g).length === 1)
        return result[0]/result[1];
      
    }
    return 'error';
  };
  
  this.getUnit = function(input) {
    
    const property = input.match(regexForUnit);
    if(property == null){
      return 'error';
    }
    
    const unit = this.spellOutUnit(property.pop());
    let result = units[unit];
    if(result){
      return result;
    }
    return 'error';
  };
  
  this.getReturnUnit = function(initUnit) {
    const unit = this.spellOutUnit(initUnit);
    let result = convertedUnits[unit];
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result = typeof unit === 'string' ? unit.toLowerCase() : null;
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    const unit = this.getReturnUnit(initUnit);
    switch(unit){
      case 'L':
        return Number((initNum * galToL).toFixed(5));
      case 'gal':
        return Number((initNum / galToL).toFixed(5));
      case 'kg':
        return Number((initNum * lbsToKg).toFixed(5));
      case 'lbs':
        return Number((initNum / lbsToKg).toFixed(5));
      case 'km':
        return Number((initNum * miToKm).toFixed(5));
      case 'mi':
        return Number((initNum / miToKm).toFixed(5));
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum} ${stringUnits[initUnit.toLowerCase()]} converts to ${returnNum} ${stringUnits[returnUnit.toLowerCase()]}`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
