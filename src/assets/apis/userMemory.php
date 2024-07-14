<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header('Content-Type: application/json');

$userName = $_GET['userName'];
$folder_path = "/var/samba/$userName";
$retour['free'] = shell_exec("du -sh \"$folder_path\" | awk '{print $1}'");
echo json_encode($retour);
?>