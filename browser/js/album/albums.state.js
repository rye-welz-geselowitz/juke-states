juke.config(function ($stateProvider) {
	$stateProvider.state('albumList',{
		templateUrl: '/js/album/albums.html',
		url: '/albums',
		resolve: {
			albums: function(AlbumFactory){
				return AlbumFactory.fetchAll();
			}
		},
		controller: 'AlbumsCtrl' 
	})
})
