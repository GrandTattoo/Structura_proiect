{"filter":false,"title":"utilizatori.js","tooltip":"/admin/js/utilizatori.js","undoManager":{"mark":10,"position":10,"stack":[[{"start":{"row":0,"column":0},"end":{"row":107,"column":1},"action":"insert","lines":["/*global $*/","","// READ recods on page load","$(document).ready(function () {","    readRecords(); // calling function","});","","// READ records","function readRecords() {","    $.get(\"/categories/\", {}, function (data, status) {","        data.forEach(function(value) {","            var row = '<tr id=\"row_id_'+ value.id +'\">'","            \t\t\t+ displayColumns(value)","        \t\t\t\t+ '</tr>';","            $('#articles').append(row);","        });","    });","}","","function displayColumns(value) {","    return \t'<td>'+value.id+'</td>'","            + '<td class=\"name\">'+value.name+'</td>'","\t\t\t+ '<td class=\"description\">'+value.description+'</td>'","\t\t\t+ '<td align=\"center\">'","\t\t\t+\t'<button onclick=\"viewRecord('+ value.id +')\" class=\"btn btn-edit\">Update</button>'","\t\t\t+ '</td>'","\t\t\t+ '<td align=\"center\">'","\t\t\t+\t'<button onclick=\"deleteRecord('+ value.id +')\" class=\"btn btn-danger\">Delete</button>'","\t\t\t+ '</td>';","}","","function addRecord() {","    $('#id').val('');","    $('#name').val('');","    $('#description').val('');","    ","    $('#myModalLabel').html('Add New Category');","  //  $('#add_new_record_modal').modal('show');","}","","function viewRecord(id) {","    var url = \"/categories/\" + id;","    ","    $.get(url, {}, function (data, status) {","        //bind the values to the form fields","        $('#name').val(data.name);","        $('#description').val(data.description);","","        $('#id').val(id);","        $('#myModalLabel').html('Edit Category');","        ","        $('#add_new_record_modal').modal('show');","    });","}","","function saveRecord() {","    var formData = $('#record_form').serializeObject();","    if(formData.id) {","        updateRecord(formData);","    } else {","        createRecord(formData);","    }","}","","function createRecord(formData) {","    $.ajax({","        url: '/categories/',","        type: 'POST',","        accepts: {","            json: 'application/json'","        },","        data: formData,","        success: function(data) {","            $('#add_new_record_modal').modal('hide');","            ","            var row = '<tr id=\"row_id_'+ data.id +'\">'","            \t\t\t+ displayColumns(data)","        \t\t\t\t+ '</tr>';","            $('#articles').append(row);","        } ","    });","}","","function updateRecord(formData) {","    $.ajax({","        url: '/categories/'+formData.id,","        type: 'PUT',","        accepts: {","            json: 'application/json'","        },","        data: formData,","        success: function(data) {","            $('#row_id_'+formData.id+'>td.name').html(formData.name);","            $('#row_id_'+formData.id+'>td.description').html(formData.description);","            $('#add_new_record_modal').modal('hide');","        } ","    });","}","","function deleteRecord(id) {","    $.ajax({","        url: '/categories/'+id,","        type: 'DELETE',","        success: function(data) {","            $('#row_id_'+id).remove();","        }","    });","}"],"id":1}],[{"start":{"row":9,"column":12},"end":{"row":9,"column":22},"action":"remove","lines":["categories"],"id":13},{"start":{"row":9,"column":12},"end":{"row":9,"column":23},"action":"insert","lines":["utilizatori"]}],[{"start":{"row":41,"column":16},"end":{"row":41,"column":26},"action":"remove","lines":["categories"],"id":14},{"start":{"row":41,"column":16},"end":{"row":41,"column":27},"action":"insert","lines":["utilizatori"]}],[{"start":{"row":66,"column":15},"end":{"row":66,"column":25},"action":"remove","lines":["categories"],"id":15},{"start":{"row":66,"column":15},"end":{"row":66,"column":26},"action":"insert","lines":["utilizatori"]}],[{"start":{"row":85,"column":15},"end":{"row":85,"column":25},"action":"remove","lines":["categories"],"id":16},{"start":{"row":85,"column":15},"end":{"row":85,"column":26},"action":"insert","lines":["utilizatori"]}],[{"start":{"row":101,"column":15},"end":{"row":101,"column":25},"action":"remove","lines":["categories"],"id":17},{"start":{"row":101,"column":15},"end":{"row":101,"column":26},"action":"insert","lines":["utilizatori"]}],[{"start":{"row":41,"column":16},"end":{"row":41,"column":27},"action":"remove","lines":["utilizatori"],"id":18},{"start":{"row":41,"column":16},"end":{"row":41,"column":28},"action":"insert","lines":["utilizatoris"]}],[{"start":{"row":66,"column":15},"end":{"row":66,"column":26},"action":"remove","lines":["utilizatori"],"id":19},{"start":{"row":66,"column":15},"end":{"row":66,"column":27},"action":"insert","lines":["utilizatoris"]}],[{"start":{"row":85,"column":15},"end":{"row":85,"column":26},"action":"remove","lines":["utilizatori"],"id":20},{"start":{"row":85,"column":15},"end":{"row":85,"column":27},"action":"insert","lines":["utilizatoris"]}],[{"start":{"row":101,"column":15},"end":{"row":101,"column":26},"action":"remove","lines":["utilizatori"],"id":21},{"start":{"row":101,"column":15},"end":{"row":101,"column":27},"action":"insert","lines":["utilizatoris"]}],[{"start":{"row":9,"column":23},"end":{"row":9,"column":24},"action":"insert","lines":["s"],"id":26}],[{"start":{"row":46,"column":8},"end":{"row":46,"column":11},"action":"insert","lines":["// "],"id":29}],[{"start":{"row":34,"column":4},"end":{"row":34,"column":7},"action":"insert","lines":["// "],"id":28}],[{"start":{"row":22,"column":0},"end":{"row":22,"column":3},"action":"insert","lines":["// "],"id":27}]]},"ace":{"folds":[],"scrolltop":354,"scrollleft":0,"selection":{"start":{"row":22,"column":0},"end":{"row":22,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":5,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1516113305029,"hash":"1453e80dcee5f74ecb499da6083756ec05d4dd44"}