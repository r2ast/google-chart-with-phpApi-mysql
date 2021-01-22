    <?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: PUT, GET, POST");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    //Custom json
    $chartdata = array(
    array("London" => 20000),
    array("New York" => 30000),
    array("Paris" => 50000),
    array("Berlin" => 10000),
    array("Kairo" => 55000),
    );
    echo json_encode($chartdata);
    ?>