<?php
$origin = $_SERVER['HTTP_ORIGIN'];
$originPort = parse_url($origin, PHP_URL_PORT);

if ($originPort == 5173) {
    header("Access-Control-Allow-Origin: $origin");
}
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

session_start();
session_unset();
session_destroy();
echo json_decode("Logout successful");
?>