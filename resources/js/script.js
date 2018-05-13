function getPopUp (className) {
	var darker = document.getElementsByClassName('darker')[0];
	darker.style.display = 'flex';
	darker.getElementsByClassName(className)[0].style.display = 'flex';
	darker.getElementsByClassName('darker__dark')[0].style.display = 'flex';
	darker.close = function () {
		darker.style.display = 'none';
		darker.getElementsByClassName(className)[0].style.display = 'none';
	}
	darker.onclick = function (e) {
		e.preventDefault();
		if (e.target === darker.children[0]
		||
			e.target.className === 'closeBtn'
		){
			this.close();
		}
	}
	return darker;
}

function tabs () {
	var tabContainer = document.getElementsByClassName('product__tabs');

	if (tabContainer[0]) {
		tabContainer = tabContainer[0];
	} else {
		return false;
	}

	var tabHeader = tabContainer.children[0];
	var tabContent = tabContainer.children[1];

	var active = 0;

	document.getElementById('tabs').onclick = function (e) {
		e.preventDefault();
		if (typeof +e.target.dataset.tabId === 'number'
		&&
			!isNaN(+e.target.dataset.tabId)
		){
			change(active);
			active = +e.target.dataset.tabId;
			change(active);

			function change(id) {
				tabHeader.children[id].classList.toggle("active");
				tabContent.children[id].classList.toggle("active");
			}
		}

	};
}

function ActiveItem () {
	var active = 0;
	var collection = document.getElementsByClassName('photos__colection')[0];
	var showingItem = document.getElementsByClassName('mainPhoto-product')[0];
	if (!collection && !showingItem) {
		return false;
	}
	change(active);
	[].forEach.call(collection.children, (function(item) {
		item.onclick = function (e) {
			e.preventDefault();
			console.log(item)
			if (typeof +item.dataset.id === 'number'
			&&
				!isNaN(+item.dataset.id)
			){
				change(item.dataset.id);
			}
		};
	}));
	function change(id) {
		if (typeof showingItem.children[0] === 'object'
		&&
			typeof showingItem.children[0] !== null
		){
			showingItem.children[0].remove();
		}
		active = id;
		showingItem.appendChild(collection.children[active].cloneNode(true));
	}
}

function popUpSlider () {
	var popUp = document.getElementsByClassName('mainPhoto-product')[0];
	if (!popUp) {
		return false;
	}
	popUp.onclick = function (e) {
		e.preventDefault();
		var darker = getPopUp('darker__slider');
	}
	var slider = document.getElementsByClassName('darker__slider')[0].getElementsByClassName('darker__content-own')[0];
	var collection = document.getElementsByClassName('photos__colection')[0];
	slider.appendChild(collection.cloneNode(true));
	slider = Slider(slider.children[0]);
}

function popUpByer () {
	var popUp = document.getElementsByClassName('do-order')[0];
	if (!popUp) {
		return false;
	}
	popUp.onclick = function (e) {
		e.preventDefault();
		var darker = getPopUp('darker__product-set-bascet');
	}
}

function popUpAuth () {
	var popUp = document.getElementsByClassName('logo-container-item__title_cabinet')[0];
	if (!popUp) {
		return false;
	}
	popUp.onclick = function (e) {
		e.preventDefault();
		var darker = getPopUp('darker__auth');
	}
}

function popUpRegist () {
	var popUp = document.getElementsByClassName('do-regist-btn')[0];
	if (!popUp) {
		return false;
	}
	popUp.onclick = function (e) {
		e.preventDefault();
		var darker = getPopUp('darker__regist');
		document.getElementsByClassName('darker__auth')[0].style.display = 'none';
	}
}

function popUpSocialWeb () {
	var popUp = document.getElementsByClassName('popUp-share')[0];
	if (!popUp) {
		return false;
	}
	popUp.onclick = function (e) {
		e.preventDefault();
		var darker = getPopUp('darker__share');
	}
}

function plusMinus() {
	var conteainers = document.getElementsByClassName('__number');
	[].forEach.call(conteainers, function(item) {
		let div = item.children[1];
		div.innerHTML = '0';
		item.children[0].onclick = function () {
			if (div.innerHTML > 0){
				div.innerHTML--;
			}
		}

		item.children[2].onclick = function () {
			div.innerHTML++;
		}
	});
}

tabs();
ActiveItem();
popUpSlider();
popUpByer();
popUpAuth();
popUpRegist();
popUpSocialWeb();
plusMinus();
