<?php

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header('Content-Type: application/json');

$retour['free'] = shell_exec("df -h /dev/nvme0n1p5 | awk 'NR==2{print $4}'");
$retour['total'] = shell_exec("df -h /dev/nvme0n1p5 | awk 'NR==2{print $2}'");

echo json_encode($retour);
?>