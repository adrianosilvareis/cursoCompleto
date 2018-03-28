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
    
    const newObject = { 
      "id":3, 
      "name": "jest test" 
    }

    const updateObject = {
      "id": 1,
      "nome": "update teste"
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
      
      model.get(1).then(({ data }) => expect(data).toEqual(object))
      
      $http.flush()

    })

    it('list retorna uma array', () => {
      $http.whenGET(`${server}/teste?_page=1&limit=10`).respond(list)

      model.list().then( ({ data }) => expect(data).toEqual(list) )

      $http.flush()
    })

    it('Insert retorna newObject', () => {
      $http.whenPOST(`${server}/teste/`).respond(newObject)

      model.insert({ name: 'jest test' })
        .then( ({ data }) => expect(data).toEqual(newObject) )

      $http.flush()
    })

    it('Update retorna objeto atualizado', () => {
      $http.whenPOST(`${server}/teste/1`).respond(updateObject)

      model.update(1, updateObject)
        .then( ({ data }) => expect(data).toEqual(updateObject) )

      $http.flush()
    })

    it('Delete retorna status = 200', () => {
      $http.whenDELETE(`${server}/teste/1`).respond()

      model.remove(1)
        .then( ({ status }) => expect(status).toEqual(200) )

      $http.flush()
    })

  })
})