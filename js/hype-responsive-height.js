function layoutRequest(hypeDocument, element, event) {
    //returns [{name: xxx; height:xxx; width:xxx; breakpoint: xxx}, ...]
    var _layouts = hypeDocument.layoutsForSceneNamed(hypeDocument.currentSceneName());
    //current Layoutname
    var layoutName = hypeDocument.currentLayoutName();

    //get data for current Layout -> {name: xxx; height:xxx; width:xxx; breakpoint: xxx}
    var res = null;

    for (var i = 0; i < _layouts.length; i++) {
        var Obj = _layouts[i];
        if (Obj.name === layoutName) {
            res = Obj;
            break;
        }
    }


    // set hypeDocumentElement height depending on layoutratio ...
    if (res) {
        var ratioScale = res['width'] / res['height'];
        var hypeEl = document.getElementById(hypeDocument.documentId());
        var currentWidth = hypeEl.offsetWidth;
        var newHeight = currentWidth / ratioScale;
        hypeEl.style.height = newHeight + 'px';


        hypeDocument.relayoutIfNecessary();
    }


    return false

}

if ("HYPE_eventListeners" in window === false) {
    window.HYPE_eventListeners = Array();
}
window.HYPE_eventListeners.push({
    "type": "HypeLayoutRequest",
    "callback": layoutRequest
});