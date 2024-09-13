'use strict';

/*
atconnect
이하 전체 테스트 스크립트입니다.
개발에 맞게 새로 작성해서 적용 부탁드립니다.
*/


window.addEventListener("load", function(){
	let width = window.innerWidth;
	resize(width);
	let scrollY = window.scrollY;
	fn_scrollY(scrollY);
})

window.addEventListener("resize", function(){
	let width = window.innerWidth;
	resize(width);
})

window.addEventListener("scroll", function(){
	let scrollY = window.scrollY;
	fn_scrollY(scrollY);
})

function resize(resizeWidth){
	if(resizeWidth >= 786) {
		document.querySelector("header").classList.remove("mobile");
	} else {
		document.querySelector("header").classList.add("mobile");
	}
}


function fn_scrollY(ddd){
	if(ddd > 0) {
		document.querySelector("header").classList.add("active");
	} else {
		document.querySelector("header").classList.remove("active");
	}
}





/* 토글 메뉴 */
let toggleBtn = document.querySelector(".btn_menu_toggle button");
toggleBtn.addEventListener("click", function(){
	if(document.querySelector("#aside-nav").classList.contains("active")){
		document.querySelector("#aside-nav").classList.remove("active");
		// document.querySelector("#aside-nav").style.display = "none";
	} else {
		document.querySelector("#aside-nav").classList.add("active");
		// document.querySelector("#aside-nav").style.display = "block";
	}
})
/* // 토글 메뉴 */




/* aside */
let btn_close_aside = document.querySelector(".aside div.btn-close");
btn_close_aside.addEventListener("click", function(){
	document.querySelector("#aside-nav").classList.remove("active");
	// document.querySelector("#aside-nav").style.display = "none";
})
/* // aside */




/* 레이어팝업 닫기 */
let layers = document.querySelectorAll(".layer");
if(layers.length > 0) {
	layers.forEach(function(item){
		let btn_close = item.querySelector(".btn_close");
		btn_close.addEventListener("click", function(e){
			e.target.closest(".layer").style.display = "none";
		})
	})
}




/* select용 샘플 */
let selectElement = document.querySelectorAll("select");
if(selectElement.length > 0) {
	console.log(selectElement.length)
	selectElement.forEach(element => {
		let isOpen = false;
		element.addEventListener("click", function(){
			if(isOpen == false) {
				isOpen = true;
			} else {
				isOpen = false;
				element.blur();
			}
		})
		element.addEventListener("change", function(){
			element.classList.add("changed");
		})
		element.addEventListener("blur", function(){
			isOpen = false;
		})
	});
}
/* // select용 샘플 */



/* custom select 테스트 */
/* 상품선택 */
let btn_triger = document.querySelector("button.btn_triger");
let custom_select_optgroup = document.querySelector(".custom_select_optgroup");
btn_triger.addEventListener("click", function(item){
	btn_triger.parentElement.closest("div.btn").classList.toggle("active");
})
/* // 상품선택 */

/* 상품 선택시 버튼명을 상품명으로변경 */
let options = custom_select_optgroup.querySelectorAll("input");
options.forEach(function(item){
		item.addEventListener("change", function(){
			btn_triger.querySelector("span").innerText = item.getAttribute("title");
			// btn_triger.parentElement.closest("div.btn").classList.toggle("active");
	})
})
/* // 상품 선택시 버튼명을 상품명으로변경 */
/* // custom select 테스트 */