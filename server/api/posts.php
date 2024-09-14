<?php
// Database configuration
$host = 'localhost';
$user = 'root'; // Default XAMPP username
$password = ''; // Default XAMPP password (leave empty if not set)
$database = 'socialmedia';

// Create a connection to the database
$conn = new mysqli($host, $user, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Determine which operation to perform based on the HTTP request method
$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        // Fetch all posts
        $sql = "SELECT * FROM posts";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $posts = [];
            while ($row = $result->fetch_assoc()) {
                $posts[] = $row;
            }
            echo json_encode($posts);
        } else {
            echo json_encode([]);
        }
        break;

    case 'POST':
        // Add a new post
        $content = $_POST['content'];
        $user_id = $_POST['user_id'];
        $images = $_POST['images'];
        $videos = $_POST['videos'];

        $sql = "INSERT INTO posts (user_id, content, images, videos) VALUES ('$user_id', '$content', '$images', '$videos')";
        
        if ($conn->query($sql) === TRUE) {
            echo json_encode(["message" => "Post created successfully"]);
        } else {
            echo json_encode(["error" => "Error: " . $sql . "<br>" . $conn->error]);
        }
        break;

    case 'PUT':
        // Update a post
        parse_str(file_get_contents("php://input"), $_PUT);
        $post_id = $_PUT['post_id'];
        $content = $_PUT['content'];

        $sql = "UPDATE posts SET content='$content' WHERE post_id='$post_id'";
        
        if ($conn->query($sql) === TRUE) {
            echo json_encode(["message" => "Post updated successfully"]);
        } else {
            echo json_encode(["error" => "Error: " . $sql . "<br>" . $conn->error]);
        }
        break;

    case 'DELETE':
        // Delete a post
        parse_str(file_get_contents("php://input"), $_DELETE);
        $post_id = $_DELETE['post_id'];

        $sql = "DELETE FROM posts WHERE post_id='$post_id'";
        
        if ($conn->query($sql) === TRUE) {
            echo json_encode(["message" => "Post deleted successfully"]);
        } else {
            echo json_encode(["error" => "Error: " . $sql . "<br>" . $conn->error]);
        }
        break;

    default:
        echo json_encode(["error" => "Invalid request method"]);
        break;
}

// Close the database connection
$conn->close();
?>
