import timestampInterceptor from './timestamp'
import errorInterceptor from './error'
import loadingInterceptor from './loading'

const interceptorConfig = $httpProvider => {
  $httpProvider.interceptors.push('timestampInterceptor')
  $httpProvider.interceptors.push('errorInterceptor')
  $httpProvider.interceptors.push('loadingInterceptor')
}

const configRoute = $routeProvider => {
  $routeProvider.when('/error', {
    template: require('./error/error.html')
  })
}

export default angular
  .module('myApp.interceptor', [])
  .factory('timestampInterceptor', timestampInterceptor)
  .factory('errorInterceptor', errorInterceptor)
  .factory('loadingInterceptor', loadingInterceptor)
  .config(interceptorConfig)
  .config(configRoute)
  .name