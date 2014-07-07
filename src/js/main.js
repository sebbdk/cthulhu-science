/* 
* @Author: sebb
* @Date:   2014-07-07 19:57:46
* @Last Modified by:   sebb
* @Last Modified time: 2014-07-07 19:58:56
*/

(function($) {

	$(document).ready(function(){
		load();
	});

	$(document).on('click', 'a', linkToScene);

	function linkToScene() {
		var id = $(this).attr('data-goto');
		console.log(id);
		gotoScene(id);
	}

	function load() {
	//	$.get('map.json', function(response) {
		//	scenes = response.game;
			gotoScene("start");
	//	}, 'json');
	}

	function gotoScene(id) {
		$('p').html(scenes[id].text);

		if(scenes[id].graphic) {
			$('img').attr('src', scenes[id].graphic);
		}

		$('.info-area a').remove();
		$.each(scenes[id].actions, function(index, action) {
			action
			$('.info-area').append('<a href="#" data-goto="' + action.goto + '">' + action.text + '</a>')
		});
	}

})(jQuery);