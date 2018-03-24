import 'angular'
import 'angular-mocks'

import './index'

describe('Diretiva Header', () => {

  let $scope, controller

  beforeEach(() => {
    angular.mock.module('directive.header')
  })

  beforeEach(inject(($controller, $rootScope) => {
    $scope = $rootScope.$new()

    controller = $controller('headerController', {
      $scope
    })
  }))

  it('Controller esta definido', () => {
    expect(controller).toBeDefined()
  })

  it('Menu foi carregado e contém paginas e dropdown', () => {
    expect(Object.keys($scope.menu)).toHaveLength(2)
  })

  it('O logo foi carregado e contém o titulo da tela', () => {
    expect($scope.logo.title).toBeDefined()
  })
})