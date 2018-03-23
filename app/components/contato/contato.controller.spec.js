import 'angular'
import 'angular-route'
import 'angular-mocks'

import './index'

describe('Contato Controller', () => {

  let $scope, controller
  
  const instanceController = ($controller, _$scope_) => {
    $scope = _$scope_
    controller = $controller('ContatoController', { $scope })
  }

  const setEditMode = ($controller, _$scope_) => {
    $scope: _$scope_.$new()

    controller = $controller('ContatoController', {
      $scope,
      $routeParams: { contatoId: 1 }
    })
  }

  beforeEach(() => {
    angular.mock.module('myApp.contato')
  })

  beforeEach(inject(($controller, $rootScope) => {
    instanceController($controller, $rootScope.$new())
  }))
  
  it('O Controller esta definido', () => {
    expect(controller).toBeDefined()
  })
  
  describe('Em modo de cadastro', () => {
    it('contatoId não existe', () => {
      expect($scope.id.contatoId).toBeUndefined()
    })
  
    it('editMode = false', () => {
      expect($scope.editMode).toBeFalsy()
    })
  })

  describe('Em modo de edição', () => {
    
    const injected = ($controller, $rootScope) => setEditMode($controller, $rootScope.$new())

    beforeEach( inject( injected ) )

    it('O contatoId existe quando em modo de edicao', () => {
      expect($scope.id.contatoId).toEqual(1)
    })
    
    it('EditMode existe em modo de edição', () => {
      expect($scope.editMode).toBeTruthy()
    })
  })
  
})