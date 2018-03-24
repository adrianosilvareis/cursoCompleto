//@ngInject
const headerController = ($scope) => {
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
}

const header = () => ({
  restrict: 'E',
  template: require('./header.html'),
  controller: 'headerController',
})

export default angular
  .module('directive.header', [])
  .controller('headerController', headerController)
  .directive('header', header)
  .name