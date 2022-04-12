<?php

    if(isset($_POST['submit'])){

        $new_message = array(
            "image" => $_POST['image'],
            "name" => $_POST['name'],
            "description" => $_POST['description']
        );

        if(filesize("../JSON:test APIs/groups.json") == 0) {
            $first_group = array($new_group);
            $data_to_save = $first_group;

        } else {
            $old_records = json_decode(file_get_contents("../JSON:test APIs/groups.json"));

            array_push($old_records, $new_group);

            $data_to_save = $old_records;
        }

        if (!file_put_contents("../JSON:test APIs/groups.json", json_encode($data_to_save, JSON_PRETTY_PRINT), LOCK_EX)){
            $error = "Error storing message, please try again";
        }else {
            $success = "Manage is stored successfuly";
        }
    }