juke.controller('newPlaylistCtrl', function($scope, PlaylistFactory, $state){
	$scope.createPlaylist = function(){
		PlaylistFactory.create($scope.newPlaylist.name)
			.then(function(result){
				console.log('created playlist:',result);
				$scope.newPlaylistForm.$setPristine();
				$scope.newPlaylist = null;
				$state.go('playlist',{playlistId: result.id})
				// return result;	
			});
	};
})

juke.controller('playlistsCtrl', function($scope, PlaylistFactory){
	PlaylistFactory.findAllPlaylists().then(function(playlists){
		console.log('playlists:',playlists);
		$scope.playlists = playlists;
	}); 

	$scope.playlistClicked = function(id){

	}
	//$scope.playlists = PlaylistFactory.findAllPlaylists();
	console.log($scope.playlists);
})

juke.controller('playlistCtrl', function($scope, PlaylistFactory, ArtistFactory, thePlaylist){
	$scope.playlist = thePlaylist;
	ArtistFactory.fetchAll().then(function(artists){
		console.log(artists);
		$scope.artists = artists;
	})
})
