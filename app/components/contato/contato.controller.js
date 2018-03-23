// ngInject
export default function($scope, $routeParams){
  $scope.id = $routeParams;
  $scope.editMode = false;

  if($scope.id.contatoId){
    $scope.editMode = true;

  } else {
    $scope.editMode = false;

  }
}