juke.config(function ($stateProvider) {

  $stateProvider.state('newPlaylist', {
  	url: '/newPlaylist',
  	//template: '<p>testing</p>',
  	templateUrl: '/js/playlist/templates/newplaylist.html',
  	controller: 'newPlaylistCtrl'
  })
   $stateProvider.state('playlist', {
    url: '/playlist/:playlistId',
    // template: '<p>HI</p>',
    templateUrl: '/js/playlist/templates/playlist.html',
    controller: 'playlistCtrl',
    resolve: {
      thePlaylist: function (PlaylistFactory, $stateParams) {
        return PlaylistFactory.findOnePlaylist($stateParams.playlistId);
      }
    }
  });
})