function autoSizeEvt(e) {
    autoSize(e.target);
}

function windowResizeEvt(e) {
    resizeAllTextareas();
}

function resizeAllTextareas() {
    var taArray = getTextareasArray();
    taArray.forEach(function (ta) {
        autoSize(ta);
    });
}

function getTextareasArray() {
    var taArray = [];
    var taList = document.getElementsByTagName('textarea');
    for (var i = 0; i < taList.length; i++) {
        taArray.push(taList[i]);
    }
    return taArray;
}

function autoSize(ta) {
    var style = window.getComputedStyle(ta, null);
    ta.style.height = 'auto';
    ta.style.overflowY = 'hidden';

    var scrollHeight = ta.scrollHeight;
    var offsetHeight;

    if (style.boxSizing === 'content-box') {
        offsetHeight = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
    } else {
        offsetHeight = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
    }

    ta.style.height = scrollHeight + offsetHeight + 'px';
}

var taArray = getTextareasArray();
taArray.forEach(function (ta) {
    autoSize(ta);
    ta.addEventListener('input', autoSizeEvt);
});

window.addEventListener('resize', windowResizeEvt);
