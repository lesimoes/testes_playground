const request = require('supertest');
const expect = require('expect')
var app = require('./server').app;

it('Should return response', function(done){
  request(app)
    .get('/')
    .expect(404)
    .expect(function(res){
      expect(res.body).toInclude({
        error: 'Page not found!'
      });
    })
    .end(done);
});

it('Deve retornar usuários', function(done){
  request(app)
  .get('/users')
  .expect(200)
  .expect(function(res){
    expect(res.body).toInclude({
      name: 'Leandro',
      age: 29
    })
  })
  .end(done)
})
