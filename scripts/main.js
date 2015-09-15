'use strict';

var count = 0;

var $likeButton = $('#likeButton');



$likeButton.on('click', function() {
	count++;
	if(count < 2) {
	$likeButton.html(count + ' Like');
	}
	else {
	$likeButton.html(count + ' Likes');
	}
});