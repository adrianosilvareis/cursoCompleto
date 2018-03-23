
/* @ngInject */
export default function($routeProvider){
  $routeProvider
    .when('/contatos',{
      template: require('./contatos.html'),
      cotroller: 'contatosController',
      resolve: {
        config: () => {
          title: 'Lista de Contatos'
        }
      }
    })
    .when('/contato',{
      template: require('./contato.html'),
      cotroller: 'contatoController',
      resolve: {
        config: () => {
          title: 'Adicionar Contato'
        }
      }
    })
    .when('/contato/:contatoId',{
      template: require('./contato.html'),
      cotroller: 'contatoController',
      resolve: {
        config: () => {
          title: 'Editar Contato'
        }
      }
    })
}