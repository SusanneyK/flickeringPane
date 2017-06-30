//设置变色格子的数目
var num = 3;

//设置闪动速度，单位毫秒
var msTime = 800;

//不喜欢太暗或者太亮的颜色，所以直接数组
//随机生成颜色的方法，见结尾注释
var colors = ["#1ABC9C","#3BAFDA","#AC92EC",
				"#D770AD","#E74C3C","#2980B9", 
				"#A0D468","#2ECC71","#8E44AD"]; 
var spans = document.getElementsByTagName("span"),
	buttons = document.getElementsByTagName("button");
var tInterval = null,
	tOut = null;
var arr = [0,1,2,3,4,5,6,7,8]


window.onload = function() {
	buttons[0].onclick = playFun;
	buttons[1].onclick = stopFun;
}

function playFun(){
	btnChange(buttons[0]);
	btnOut(buttons[1]);
	clsChange();
}

function stopFun(){
	clearInterval(tInterval);
    btnChange(buttons[1]);
    btnOut(buttons[0]);

    for (var i = 0; i < spans.length; i++) {
		spans[i].style.backgroundColor = '#FF8C00';
	}
}

//闪烁
function clsChange() {
	clearInterval(tInterval);
	tInterval=setInterval(bling,msTime);
}

function bling() {
	var index = changeC();
	tOut = setTimeout( function () {
		for (var i = 0; i < index.length; i++) {
			var s = index[i];
			spans[s].style.background = '#FF8C00';
		}
	},(msTime - 10));
}

function changeC() {
	var indexC = randomArr(arr,num),
		indexS = randomArr(arr,num);

	for (var i = 0; i < indexS.length; i++) {
	   var s = indexS[i];
	   var c = indexC[i];
	   spans[s].style.background = colors[c];
	}

	return indexS;
}

//样式改变
function btnChange(btn) {
	btn.style.background = '#FF8C00';
	btn.style.color = '#FFF';
}

function btnOut(btn) {
	btn.style.background = '#FFF';
	btn.style.color = '#FF8C00';
}

//取出任意不重复数组值
function randomArr(arr, num) {
    var tempArr = new Array();
    for (var index in arr) {
        tempArr.push(arr[index]);
    }
    var saveArr = new Array();
    for (var i = 0; i < num; i ++) {
            var arrIndex = Math.floor(Math.random()*tempArr.length);
            saveArr[i] = tempArr[arrIndex];
            tempArr.splice(arrIndex, 1);
    }
    return saveArr;
}

//随机生成颜色
// function randColor() {
// 	var colorStr = "";
// 	var randArr = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]

// 	for (var i = 0; i < 6; i++) {
// 		colorStr += randArr[Math.ceil(Math.random()*15)];
// 	}
// 	// element.style.backgroundColor = "#" + colorStr;
// }