1. For Remote binding (data comes from server with every on keyup)
----------------------------------------------------------------------

$(function () {
        $("#id").autocomplete({        // id is id of input control
            source: function (request, response) {
                $.ajax({
                    type: "POST",
                    url: "/url-link",
                    dataType: "json",
                    data: {
                        term: request.term
                    },
                    success: function (data) {
                        response(data);
                    }
                });
            },

            minLength: 3,
            select: function (event, ui) {
                $("#id").val(ui.item.id);
            }
        });
    });
    // Backend code in PHP
    $data = ['key'=>'value'];

            foreach ($data as $key => $value) {
                $json_data[] = array(
                    'value' => $value,
                    'id' => $key
                );
            }
      echo json_encode($json_data);
    
2. For Local Binding :
-----------------------------------------
var AutocompleteData = '<?php echo json_encode($data)?>';    // Add php array data to javascript.
var AutocompleteData = JSON.parse(AutocompleteData);      // parse json to javascript array
$("#id").autocomplete({
    source: AutocompleteData,   // Json parsed data

    minLength: 2,
    select: function (event, ui) {
        $("#id").val(ui.item.id);
    }
});

// Note : For this autocomplete must be added "jquery-ui.js" file
