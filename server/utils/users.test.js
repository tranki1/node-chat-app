const expect = require('expect');
const { Users } = require('./users');

describe('User', () => {
  var users;
  beforeEach(() => {
    users = new Users();

    users.users = [
      {
        id: '1',
        name: 'mike',
        room: 'a'
      },
      {
        id: '2',
        name: 'tom',
        room: 'b'
      },
      {
        id: '3',
        name: 'jen',
        room: 'a'
      }
    ];
  });
  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'kim',
      room: 'node'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should get users by room name a', () => {
    expect(users.getUserList('a')).toEqual(['mike', 'jen']);
  });

  it('should get users by room name b', () => {
    expect(users.getUserList('b')).toEqual(['tom']);
  });

  it('should get user by id', () => {
    expect(users.getUser('1').id).toBe('1');
  });
  it('should not get user by id', () => {
    expect(users.getUser('99')).toBeFalsy();
  });

  it('should not remove user', () => {
    expect(users.removeUser('99')).toBeFalsy();
  });

  it('should remove user', () => {
    expect(users.removeUser('1').id).toBe('1');
  });
});
