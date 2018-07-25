var request = require('request');

describe('calc', () => {
  it('should multiply 2 and 2', () => {
    expect(2*2).toBe(4) //5 to fail replace 4 with 5
  });
});

describe('get message', () => {
  it('should return 200 ok', (done) => {
    request.get('http://localhost:3000/messages', (err, res) => {
      //console.log(res.body);
      expect(res.statusCode).toEqual(200);
      done()
    })
  });

  it('should return a list, thats not empty', (done) => {
    request.get('http://localhost:3000/messages', (err, res) => {
      //console.log(res.body);
      expect(JSON.parse(res.body).length).toBeGreaterThan(0);
      done()
    })
  });

});

describe('get message from user', () => {
  it('should return 200 ok', (done) => {
    request.get('http://localhost:3000/messages/tim', (err, res) => {
      //console.log(res.body);
      expect(res.statusCode).toEqual(200);
      done()
    })
  });

  it('name should be tim', (done) => {
    request.get('http://localhost:3000/messages/Tim', (err, res) => {
      //console.log(res.body);
      expect(JSON.parse(res.body)[0].name).toEqual('Tim');
      done()
    })
  });

})
