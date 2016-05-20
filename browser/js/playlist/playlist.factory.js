juke.factory('PlaylistFactory', function($http, SongFactory){
	var obj = {};
	var cachedPlaylists = [];
	obj.create = function(playlistName){
		return $http.post('/api/playlists', {name: playlistName})
		.then(function(newPlaylist){
			cachedPlaylists.push(newPlaylist.data);
			console.log(newPlaylist);
			return newPlaylist.data;
		})
	}
	obj.findAllPlaylists = function(){
		return $http.get('/api/playlists')
		.then(function(arrayOfPlaylists){
			angular.copy(arrayOfPlaylists.data, cachedPlaylists);
			return cachedPlaylists;
		})	
	}
	obj.findOnePlaylist = function(playlistID){
		return $http.get('/api/playlists/' + playlistID)
		.then(function(playlist){
			return playlist.data;
		})
	}
	return obj;
})