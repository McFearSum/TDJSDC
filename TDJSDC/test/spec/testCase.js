/*
This is a Test Driven JavaScript Development course spec file for testing
*/


describe('String trim test', function() {
	describe('Test trim should remove leading white-space(s)', function() {
		it('should remove leading white-space', function() {
			expect("    a string".trim()).toEqual("a string");
		});
	});
});