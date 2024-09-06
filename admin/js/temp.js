$("button, a").click(function(){
	var $this = $(this);
	console.log($this, $this.context);
})

/* 이하 테스트용 스크립트 입니다. 삭제후 재작업 부탁드립니다. */
$(".menu a.depth2").on("click", function(){
	var $this = $(this);
	if($this.hasClass("active")){
	} else {
		$(".menu a").each(function(){
			$(this).removeClass("active");
			$(this).next().stop().slideUp(200);
		})
		$this.next().stop().slideDown(200);
		$this.toggleClass("active");
	}
})


function open_popup(target){
	var $this = "#" + target;
	$($this).css({
		"display" : "block"
	})
}

function close_popup(target){
	var $this = "#" + target;
	$($this).css({
		"display" : "none"
	})
}




let layer_popup = document.querySelector(".layer_popup");
if(layer_popup) {
	document.querySelector(".layer_footer button").addEventListener("click", function(){
		layer_popup.style.display = "none";
		body.style.overflowY = "auto";
	})
}