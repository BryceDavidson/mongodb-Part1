const assert = require('assert');
const User = require('../src/user');

describe('Subdocuments', () => {
  it('Can create a sub document', (done) => {
    const joe = new User({
      name: 'Joe',
      posts: [{ title: 'post title' }]
    });

    joe.save()
      .then(() => User.findOne({ name: 'Joe' }))
      .then(user => {
        assert(user.posts[0].title === 'post title');
        done();
      });
  });

  it('Can add Subdocuments to an existing record', (done) => {
    const joe = new User({
      name: 'Joe',
      posts: []
    });

    joe.save()
    .then(() => User.findOne({ name: 'Joe' }))
    .then((user) => {
      user.posts.push({ title: 'New Post' });
      return user.save();
    })
    .then(() => User.findOne({ name: 'Joe' }))
    .then((user) => {
      assert(user.posts[0].title === 'New Post');
      done();
      });
  });
});
