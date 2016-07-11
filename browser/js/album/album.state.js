juke.config(function ($stateProvider) {
	$stateProvider.state('oneAlbum',{
		templateUrl: '/js/album/album.html',
		url: '/album/:id',
		resolve: {
			album: function(AlbumFactory,$stateParams){
				return AlbumFactory.fetchById($stateParams.id);
			}
		},
		controller: 'AlbumCtrl' 
	})
})