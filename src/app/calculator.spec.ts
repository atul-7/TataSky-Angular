import { Calculator } from './calculator';

describe('Calculator tests', () => {
    let calc:Calculator;
    beforeEach( ()=>{
      calc = new Calculator();
    });
    it('add(3,5)should be 5',()=>{
      let result:number=calc.add(3,4);
      expect(result).toBe(7);
    });
    it('sub(9,3)should be 6',()=>{
      let result:number=calc.sub(9,3);
      expect(result).toBe(6);
    });
  });

