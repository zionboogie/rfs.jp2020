//@prepros-prepend common.js

/*#########################################################

画面解析後のイベント

#########################################################*/
document.addEventListener("DOMContentLoaded", function(event) {
	// タイトルのアニメーション
	if( !sp ){
		item = document.querySelectorAll(".js_entry_title .js_title");
		for (var i = 0; i < item.length; i++) {
			item[i].innerHTML = item[i].innerText.replace(/([^\x00-\x80]|\w)/g, "<span class='char_animation'>$&</span>");
		}
		anime.timeline({})
			.add({
				targets: '.js_entry_title .char_animation',
				scale: [4,1],
				opacity: [0,1],
				translateZ: 0,
				easing: "easeInExpo",
				duration: 600,
				delay: function(el, i) {
					return 70*i;
				}
			});
	}
});