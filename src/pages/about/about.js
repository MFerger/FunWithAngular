export default configAbout => {
  require('./about.scss')
  return {
      url: '/about',
      template: require('./about.html'),
      controller: ($scope) => {
        $scope.title = 'This is the about page, yeahhhhhhhhhhhhh'
    }
  }
}
