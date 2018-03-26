//@ngInject
export default function($scope, myCrud){

  const Teste = myCrud.setModel('teste')

  Teste.list()
    .then(
      function({data}){
        $scope.teste = data
      },
      function({err}){
        $scope.err = err
      }
    )
}