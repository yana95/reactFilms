
var filmInfo = require('./../reducer') ;

describe('filmInfo reducer', () => {
	it('should handle initial state', () => {
		expect(
			filmInfo(udefined, {})
		).toEqual({
	        casts: '',
	        id: 0,
	        director: ''
	    });
	})
})