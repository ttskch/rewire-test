var func = require('../index');
var rewire = require('rewire');
// func = rewire('../index');   // uncomment this line to fail test2

describe('test', function () {
    it('test1', function () {
        spyOn(console, 'log');

        func();

        expect(console.log).toHaveBeenCalledWith(1);
        expect(console.log).not.toHaveBeenCalledWith(2);
        expect(console.log).toHaveBeenCalledWith(3);
    });

    it('test2', function () {
        jasmine.clock().install();

        spyOn(console, 'log');

        func();

        jasmine.clock().tick(101);

        expect(console.log).toHaveBeenCalledWith(2);

        jasmine.clock().uninstall();
    });
});
