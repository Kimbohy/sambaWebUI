<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");


session_start();
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

    $stmt = $conn->prepare("SELECT id, password FROM admin WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();
    $stmt->bind_result($id, $hashed_password);
    $stmt->fetch();

    if ($stmt->num_rows > 0 && password_verify($password, $hashed_password)) {
        $_SESSION['user_id'] = $id;
        echo "Login successful";
    } else {
        echo "Invalid username or password";
    }

    $stmt->close();
}

$conn->close();
?>