const expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Jen';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect(typeof message.createAt).toBe('number');
    expect(message).toMatchObject({
      from,
      text
    });
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Admin';
    var latitude = 60;
    var longitude = 24;
    var url = 'https://www.google.com/maps?q=60,24';
    var message = generateLocationMessage(from, latitude, longitude);

    expect(typeof message.createAt).toBe('number');
    expect(message).toMatchObject({
      from,
      url
    });
    expect(typeof message.url).toBe('string');
  });
});
