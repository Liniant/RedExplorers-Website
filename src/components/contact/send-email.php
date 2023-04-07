<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $firstName = $_POST["firstName"];
  $lastName = $_POST["lastName"];
  $email = $_POST["email"];
  $phone = $_POST["phone"];
  $message = $_POST["message"];

  $to = "a.tauya@alustudent.com";
  $subject = "New message from website contact form";
  $body = "First Name: $firstName\nLast Name: $lastName\nEmail: $email\nPhone: $phone\n\nMessage: $message";

  // Send email
  if (mail($to, $subject, $body)) {
    echo "Message sent!";
  } else {
    echo "Error sending message.";
  }
}
?>
