{"filter":false,"title":"serialize.js","tooltip":"/admin/js/serialize.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":16,"column":2},"action":"insert","lines":["//extending jQuery with a serializeObject method so that form values can be retrieved as JSON objects","$.fn.serializeObject = function()","{","    var o = {};","    var a = this.serializeArray();","    $.each(a, function() {","        if (o[this.name] !== undefined) {","            if (!o[this.name].push) {","                o[this.name] = [o[this.name]];","            }","            o[this.name].push(this.value || '');","        } else {","            o[this.name] = this.value || '';","        }","    });","    return o;","};"],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":11,"column":0},"end":{"row":14,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1516105554302,"hash":"cc6428cfeeb15fa87c3525e83e1d8938b3c7fe62"}