/* 
* @Author: sebb
* @Date:   2014-07-07 19:57:46
* @Last Modified by:   sebb
* @Last Modified time: 2015-04-08 02:43:13
*/

(function($) {

	$(document).ready(function(){
		load();
	});

	$(document).on('click', 'a', linkToScene);

	function linkToScene(evt) {
		evt.preventDefault();
		
		var id = $(this).attr('data-goto');
		console.log(id);
		gotoScene(id);
	}

	function load() {
		$('.game-wrapper').hide();
		setTimeout(function() {
			gotoScene("start");	
			$('.game-wrapper').fadeIn();
		}, 2000);
		
	}

	function gotoScene(id) {
		_track('choice_load', id);

		if(id == "The end!") {
			_track('complete_play', id);			
		}

		$('p').html(scenes[id].text);

		if(scenes[id].graphic) {
			$('img').attr('src', scenes[id].graphic);
		}

		$('.info-area a').remove();
		$.each(scenes[id].actions, function(index, action) {
			action
			$('.info-area').append('<a href="#" data-goto="' + action.goto + '"> - ' + action.text + '</a>')
		});
	}

})(jQuery);