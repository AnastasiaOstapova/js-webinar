const calc = require('../calc');
const expect = require('chai').expect;

describe.only('calc', () => {
    /*
     * calc(3).v // 3
     * calc(3).add(5).v // 8
     * calc(3).minus(2).v // 1
     * calc(4).sqrt().v // 2
     * calc(3).times(10).v // 30
     * calc(10).divide(2).v // 5
     * calc(10).modulo(5).v // 0
     * calc(5).divide(0) // throw error
     * calc(-3).sqrt() // throw error
     * calc(3).add(4)
     *     .minus(3)
     *     .times(6).v // 24
     */
    // TODO: write test cases to test calculator

    it('should return proper value', () => {
        const c = new calc(1000).v;

        expect(c).to.equal(1000);
    });

    describe('add', () => {
        it('should exist', () => {
            // GIVEN
            const c = new calc(25);

            // WHEN


            // THEN
            expect(c.add).not.to.be.undefined;
        });

        it('should add value to original one', () => {
            const c = new calc(17);
            const result = c.add(3).v;

            expect(result).to.equal(20);
        });

        it('should correctly add - substract - munus value', () => {
            const c = new calc(20);
            const result = c.add(-5).v;

            expect(result).to.equal(15);
        })
    });

    describe('minus', () => {
        it('should exist', () => {
            const c = new calc(76);

            expect(c.minus).not.to.be.undefined;
        });

        it('should substract value from original one', () => {
            const c = new calc(115);
            const result = c.minus(29).v;

            expect(result).to.equal(86);
        });

        it('should properly substract - add - negative value', () => {
            const c = new calc(84);
            const result = c.minus(-6).v;

            expect(result).to.equal(90);
        });
    });

    describe('times', () => {
        it('should exist', () => {
            const c = new calc(3);

            expect(c.times).not.to.be.undefined;
        });

        it('should multiply original value with passed one', () => {
            const c = new calc(10);
            const result = c.times(5).v;

            expect(result).to.equal(50);
        });

        it('should return 0 when multiplying on 0', () => {
            const c = new calc(1120);
            const result = c.times(0).v;

            expect(result).to.equal(0);
        });
    });

    describe('square', () => {
        it('should exist', () => {
            const c = new calc(25);

           expect(c.sqrt).not.to.be.undefined;
        });

        it('should return square from the value', () => {
            const c = new calc(121);
            const result = c.sqrt().v;

            expect(result).to.equal(11);
        });

        it('should throw error when passing minus value', () => {
            const c = new calc(-25);

            expect(() => c.sqrt()).to.throw('Square root of negative value cannot be determined!');
        });
    });

    describe('divide', () => {
        it('should exist', () => {
            const c = new calc(42);

            expect(c.divide).not.to.be.undefined;
        });

        it('should divide original value by passed one', () => {
            const c = new calc(10);
            const result = c.divide(2).v;

            expect(result).to.equal(5);
        });

        it('should handle division by 0', () => {
            const c = new calc(5);

            /* try {
                const result = c.divide(0).v;
            } catch (e) {
                expect(e).to.equal('Division by 0 is not possible!');
            } */

            // expect(() => c.divide(0)).to.throw('Division by 0 is not possible!');

            expect(() => c.divide(0)).to.throw('Division by 0 is not possible!');
        });
    });

    describe('modulo', () => {
        it('should exist', () => {
            const c = new calc(165);

            expect(c.modulo).not.to.be.undefined;
        });
        
        it('should return modulo of original value without reminder value', () => {
            const c = new calc(25);
            const result = c.modulo(5).v;
    
            expect(result).to.equal(0);
        });

        it('should return modulo of original value with reminder value', () => {
            const c = new calc(30);
            const result = c.modulo(7).v;
    
            expect(result).to.equal(2);
        });
    });

    it('should convert value to string', () => {
        const c = new calc(30);
        const result = c.toString();
    
        expect(result).to.be.a('string');
    });

    it('should correctly calculate chaining', () => {
        const c = new calc(2);
        const result = c.add(3).times(10).minus(7).v;
    
        expect(result).to.equal(43);
    });
});
