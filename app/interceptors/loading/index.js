export default function($q, $rootScope, $timeout){
  return{
    request: config => {
      $rootScope.loading = true
      return config
    },
    requestError: config => {
      $timeout(() => {
        $rootScope.loading = false
      }, 500)
      return config
    },
    response: config => {
      $timeout(() => {
        $rootScope.loading = false
      }, 500)
      return config
    },
    responseError: config => {
      $timeout(() => {
        $rootScope.loading = false
      }, 500)
      return config
    }
  }
}