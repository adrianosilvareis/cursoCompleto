import 'angular'
import 'angular-mocks'

import './index'

describe('Serviço myCrud da aplicação', () => {

  let _myCrud, $http

  beforeEach(angular.mock.module('myApp.service'))

  beforeEach(inject((myCrud, $httpBackend) => {
    _myCrud = myCrud
    $http = $httpBackend
  }))

  it('Serviço existe ?', () => {
    expect(_myCrud).toBeDefined()
  })

  it('Método setModel existe ?', function() {
    expect(_myCrud.setModel).toBeDefined()
  })

  describe('setModel executado', () => {
    
    let model 
    
    const server = "http://localhost:3000"

    const object =   {
      "id": 1,
      "nome": "Adriano"
    }

    const list = [
      {
        "id": 1,
        "nome": "Adriano"
      },
      {
        "id": 2,
        "nome": "Adriano"
      },
    ]

    beforeEach(() => {
      model = _myCrud.setModel('teste')
    })
    
    it('Tabela esta definida', () => {
      expect(model.config.table).toEqual('teste')
    })

    it('get retorna uma objecto unico objecto', () => {

      $http.whenGET(`${server}/teste/1`).respond(object)
      
      model.get(1).then(({data}) => expect(data).toEqual(object))
      
      $http.flush()

    })

    it('list retorna uma array', () => {
      $http.whenGET(`${server}/teste?_page=1&limit=10`).respond(list)

      model.list().then( ({data}) => expect(data).toEqual(list) )

      $http.flush()
    })

    it('Status 200 quando inserir novo Objeto', () => {
      $http.whenPOST(`${server}/teste/`).respond()

      model.insert({ name: 'jest test' })
        .then( res => expect(res.status).toEqual(200) )

      $http.flush()
    })
  })
})