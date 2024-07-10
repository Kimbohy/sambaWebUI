<?php
// Allow access from a specific origin
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

$servername = "localhost";
$username = "kim";
$password = "kimbohy";

// Récupérer le corps de la requête JSON
$data = json_decode(file_get_contents('php://input'), true);

// Debug: Vérifier que les données sont bien reçues
file_put_contents('php://stderr', print_r($data, true));

$response = [];

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $name = $data['username'] ?? null;
    $pass = $data['password'] ?? null;
    $group = $data['group'] ?? null;

    if ($name && $pass && $group) {
        try {
            $conn = new mysqli($servername, $username, $password, "authentication");

            if ($conn->connect_error) {
                throw new Exception("Connection failed: " . $conn->connect_error);
            }

            // $hashed_password = password_hash($pass, PASSWORD_BCRYPT);
            $hashed_password = $pass;

            $stmt = $conn->prepare("INSERT INTO users (login, password, user_group) VALUES (?, ?, ?)");
            if (!$stmt) {
                throw new Exception("Prepare statement failed: " . $conn->error);
            }

            $stmt->bind_param("sss", $name, $hashed_password, $group);

            if ($stmt->execute()) {
                system("(echo $pass)|sudo sh ./smb.sh", $retval);
                if ($retval != 0) {
                    throw new Exception("Script execution failed");
                }
                $response = ["status" => "success", "message" => "$name added successfully"];
            } else {
                throw new Exception("Execute failed: " . $stmt->error);
            }

            $stmt->close();
            $conn->close();
        } catch (Exception $e) {
            $response = ["status" => "error", "message" => $e->getMessage()];
        }
    } else {
        $response = ["status" => "error", "message" => "Invalid input"];
    }
}

echo json_encode($response);
?>
