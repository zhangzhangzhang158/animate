//获取元素对象
function getElem(obj) {
    return document.getElementById(obj)
}


/*添加监听事件*/
function addEL(ele,type,fn) {
    if (ele.addEventListener) {
        ele.addEventListener(type,fn,false)
    }else if (ele.attachEvent) {
        ele.attachEvent("on"+type,fn)
    }else {
        ele["on"+type]=fn;
    }
}