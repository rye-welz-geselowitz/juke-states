juke.config(function ($stateProvider) {
	$stateProvider.state('artistList',{
		templateUrl: '/js/artist/artists.html',
		url: '/artists',
		resolve: {
			artists: function(ArtistFactory){
				return ArtistFactory.fetchAll();
			}
		},
		controller: 'ArtistsCtrl' 
	})
})

juke.config(function ($stateProvider) {
	$stateProvider.state('oneArtist',{
		templateUrl: '/js/artist/artist.html',
		url: '/artist/:id',
		resolve: {
			artist: function(ArtistFactory,$stateParams){
				return ArtistFactory.fetchById($stateParams.id);
			}
		},
		controller: 'ArtistCtrl' 
	})
	.state('oneArtist.songs',{
		templateUrl: '/js/artist/artist.songs.html',
		url: '/songs',
		controller: 'ArtistCtrl' 

	})
	.state('oneArtist.albums',{
		templateUrl: '/js/artist/artist.albums.html',
		url: '/albums',
		controller: 'ArtistCtrl' 

	})
})
