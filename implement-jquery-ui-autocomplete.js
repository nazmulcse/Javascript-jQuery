1. For Remote binding (data comes from server with every on keyup)

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
    
