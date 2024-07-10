<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Récupérer le corps de la requête JSON
$data = json_decode(file_get_contents('php://input'), true);

// Debug: Vérifier que les données sont bien reçues
file_put_contents('php://stderr', print_r($data, true));

$conn = new mysqli('localhost', 'kim', 'kimbohy', 'authentication');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $data['username'] ?? null;
    $password = $data['password'] ?? null;

    if ($username && $password) {
        $hashed_password = password_hash($password, PASSWORD_BCRYPT);
        $stmt = $conn->prepare("INSERT INTO admin (username, password) VALUES (?, ?)");
        $stmt->bind_param("ss", $username, $hashed_password);

        if ($stmt->execute()) {
            echo "User registered successfully";
        } else {
            echo "Error: " . $stmt->error;
        }

        $stmt->close();
    } else {
        echo "Username and password are required.";
    }
}

$conn->close();
?>