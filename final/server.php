<?php
// This PHP script handles the form submission from contact.html.
// It retrieves the submitted values and redirects to confirmation.html,
// passing the data in the URL (query string) for the JavaScript to display.

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // 1. COLLECT AND SANITIZE THE DATA
    $fullName = htmlspecialchars($_POST['fullName'] ?? 'N/A');
    $email = htmlspecialchars($_POST['email'] ?? 'N/A');
    $topic = htmlspecialchars($_POST['topic'] ?? 'N/A');
    $question = htmlspecialchars($_POST['question'] ?? 'N/A');
    
    // Checkbox is set to 'Yes' only if checked
    $newsletter = isset($_POST['newsletter']) ? 'Yes, sign me up' : 'No';

    // 2. CONSTRUCT THE URL WITH ALL DATA
    $query_string = http_build_query([
        'name' => $fullName,
        'email' => $email,
        'topic' => $topic,
        'q' => $question,
        'news' => $newsletter
    ]);

    // 3. REDIRECT TO THE CONFIRMATION PAGE (REQUIRED SERVER-SIDE ACTION)
    header("Location: confirmation.html?" . $query_string);
    exit;

} else {
    // Redirect if accessed directly
    header("Location: contact.html");
    exit;
}

?>