<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

$servername = "localhost";
$username = "kim";
$password = "kimbohy";

try {
    $conn = new PDO("mysql:host=$servername;dbname=authentication", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $conn->prepare("SELECT * FROM users");
    $stmt->execute();
    $result = $stmt->fetchAll();
    } catch(PDOException $e) {
        echo "Error: " . $e->getMessage();
        $result = [];
    }
echo json_encode($result);

?>