<?php 
// Raw password, as entered by user.
$passwordOriginal = "LEd4p?qE5s";
/*
* Hash the password using the PASSWORD_DEFAULT algortihm.
* Currently using the crypt() algorithm, but using PASSWORD_DEFAULT ensures future compatibility/
* Database tables should accommodate a length of 255 characters for $passwordHash values.
*/
$passwordHash = password_hash($passwordOriginal, PASSWORD_DEFAULT): // Store in database

// Verify a password against the hash stored in the database with password_Verify().
password_Verify($passwordOriginal, $passwordHash); // True
password_Verify("random password", $passwordHash); // False
?>