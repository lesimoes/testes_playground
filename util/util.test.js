var util = require('./util')
const expect = require('expect')

describe('util', function(){
  describe('#add', function(){
    it('Deve adicionar dois números', function() {
      var res = util.add(3,11);
      expect(res).toBe(3 + 11).toBeA('number')
      // if(res !== 14)
      //   throw new Error('value not correct ' + res)
    });
  })

  it('Deve retornar o quadrado', function(){
    var rand = Math.floor((Math.random() * 10) + 1);
    var res = util.square(rand);
    expect(res).toBe(Math.pow(rand, 2)).toBeA('number')
    if(Math.sqrt(res) !== rand)
    throw new Error('Deveria ser '+ Math.pow(rand, 2) + ' mas foi ' + res)
  })

  it('Confere user', function(){
    var user = {location: 'Juiz de Fora', age : 29};
    var res = util.setName(user, 'Leandro Simões');

    expect(res).toInclude({
      firstName: 'Leandro',
      lastName: 'Simões'
    })

  });

  it('Deve async', function(done){
    util.asyncadd(2,3, function(sum) {
      expect(sum).toBe(5).toBeA('number');
      done();
    })

  })
})
// it('Teste do teste', function(){
//     //expect({name : 'Leandro'}).toEqual({name : 'Leandro'})
//     //expect([2,3,4]).toInclude(2);
//     expect({
//       name: 'Leandro',
//       age : '29',
//       location: 'Juiz de Fora'
//     }).toInclude({age : 29})
// })
