// requires to be able to make assertions inside our it block
const User = require('../src/user.js');
const assert = require('assert');

// writes to the console
describe('Creating records', () => {
  it('Should save a user', (done) => {
    //this instance has a tonne of functions tied to it
    const joe = new User({ name: 'Joe' });
    //since joe is a new instance of user
    // we have the Mongoose methods on the object autimaticly
    // .save() returns a promise
    joe.save()
    .then(() => {
      //if joe has been saved is new === false, if not new joe.isNew === false
        assert(!joe.isNew);
        done();
      });
  });
});
