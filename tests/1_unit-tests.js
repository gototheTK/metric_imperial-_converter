const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

  suite('convertHandler1', ()=>{
    test('convertHandler1', ()=>{
      assert.isNumber(convertHandler.getNum('1Km'));
    });
  });

  suite('convertHandler2', ()=>{
    test('convertHandler2', ()=>{
    assert.isNumber(convertHandler.getNum('1.2Km'));
    });
  });

  suite('convertHandler3', ()=>{
    test('convertHandler3', ()=>{
      assert.isNumber(convertHandler.getNum('2.2/2Km'));
    });
  });

  suite('convertHandler4', ()=>{
    test('convertHandler4', ()=>{         
      assert.isNumber(convertHandler.getNum('1.2/1.3Km'));
    });
  });

  suite('convertHandler5', ()=>{
    test('convertHandler5', ()=>{ 
      assert.strictEqual(convertHandler.getNum('3/2/3Km'), 'error');
    });
  });

  suite('convertHandler6', ()=>{
    test('convertHandler6', ()=>{ 
  assert.strictEqual(convertHandler.getNum('Km'), 1);
    });
  });

  suite('convertHandler7', ()=>{
    test('convertHandler7', ()=>{ 
assert.strictEqual(convertHandler.getUnit('1km'), 'km');});
  });

  suite('convertHandler8', ()=>{
    test('convertHandler8', ()=>{ 
      assert.strictEqual(convertHandler.getUnit('1kmm'), 'error');
    });
  });

  suite('convertHandler9', ()=>{
    test('convertHandler9', ()=>{
      assert.strictEqual(convertHandler.spellOutUnit('KM'), 'km');
    });
  });

  suite('convertHandler10', ()=>{
    test('convertHandler10', ()=>{ 
      assert.strictEqual(convertHandler.getReturnUnit('L'),'gal');
    });
  });

  suite('convertHandler11', ()=>{
    test('convertHandler11', ()=>{     assert.strictEqual(convertHandler.convert(1,'L'),0.26417);
                                 });;
  });

  suite('convertHandler12', ()=>{
    test('convertHandler12', ()=>{ assert.strictEqual(convertHandler.convert(1,'gal'),3.78541);
                                  });
  });

  suite('convertHandler13', ()=>{
    test('convertHandler13', ()=>{  assert.strictEqual(convertHandler.convert(1,'mi'),1.60934);
                                  });
  });

  suite('convertHandler14', ()=>{
    test('convertHandler14', ()=>{ assert.strictEqual(convertHandler.convert(1,'km'),0.62137);
                                 });
  });

  suite('convertHandler15', ()=>{
    test('convertHandler15', ()=>{  assert.strictEqual(convertHandler.convert(1,'lbs'),0.45359);});
  });

  suite('convertHandler16', ()=>{
    test('convertHandler16', ()=>{  assert.strictEqual(convertHandler.convert(1,'kg'),2.20462);});
  });
  
    
      
});



  



