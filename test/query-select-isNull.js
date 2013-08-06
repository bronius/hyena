var Query = require('../lib/query');
var assert = require('assert');
require('mocha');
var expectedSQL = "SELECT `users`.* FROM `users` WHERE `users`.`type` IS NULL";
var expectedValues = [];

describe('Select Query', function () {
  describe('isNull', function () {

    it('should generate the proper SQL', function () {
      var query = new Query({ table: 'users' });
      query
        .select()
        .where('type')
        .isNull();

      assert.equal(expectedSQL, query.toString());
      assert.deepEqual(expectedValues, query.values());

    });

  });
});
