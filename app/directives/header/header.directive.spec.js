import 'angular'
import 'angular-mocks'

import index from './index'

describe('Diretiva Header', () => {
  
  it('Deve compilar corretamente o menu', () => {
    let $scope, diretiva, element

    angular.mock.module(index)

    angular.mock.inject(( $compile, $rootScope ) => {
      $scope = $rootScope.$new()

      $scope.logo = {
        title: 'Home',
        src: false
      }
    
      $scope.menu = {
        pages: [
          {
            name: 'contatos',
            link: 'contatos',
            title: 'Contatos'
          },
          {
            name: 'user',
            link: 'users',
            title: 'Usuários'
          }
        ],
        dropdown: [
          {
            name: 'pages',
            link: 'pages',
            title: 'Mapa do site',
            itens: [
              {
                name: 'contatos',
                link: 'contatos',
                title: 'Contatos'
              },
              {
                name: 'user',
                link: 'users',
                title: 'Usuários'
              }
            ]
          }
        ]
      }

      diretiva = $compile('<header type="principal"></header>')($scope)
      $scope.$digest()
      
      expect(diretiva.text()).toContain("Home")
      expect(diretiva.text()).toContain("Contatos")
      expect(diretiva.text()).toContain("Usuários")
      expect(diretiva.text()).toContain("Mapa do site")
    })
  })
})