var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  });

//1.
  it('should update the display with the running total after buttons are clicked', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_multiply')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('8')
  })

//3.
it('can multiple operations be strung together', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number3')).click();
  element(by.css('#operator_subtract')).click();
  element(by.css('#number1')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#number8')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('10')
})

//4.

it('can give expected output for large numbers', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number1')).click();
  element(by.css('#number2')).click();
  element(by.css('#number3')).click();
  element(by.css('#number4')).click();
  element(by.css('#number5')).click();
  element(by.css('#number6')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number7')).click();
  element(by.css('#number8')).click();
  element(by.css('#number9')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('97406784')
})



});
