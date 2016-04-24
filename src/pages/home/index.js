export default configHome => {
  require('./home.scss')
  return {
      url: '/',
      template: require('./home.html'),
      controller: ($scope) => {
        $scope.title = 'Hello Galvanize!!! Motha fucka'
    }
  }
}
