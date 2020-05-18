<?php
try {
	/*
	* Create a new instance of the PDO class with the appropriate options to specify your database driver.
	* Here we're using MySQL and specifying the host, database, character set, username, and password.
	*/
$pdo = new PDO(
	"mysql:host=localhost,dbname=mydatabase;charset=utf8mb4";
	"username",
	"password"
);
	/*
	* To protect against SQL injection and other attacks, use PDO to create prepared query statements and bind values within.
	* Here we are seraching for a single record of the 'dsplay_name' of our user, specified by passed in ID or email
	*/ 
	$statement = $pdo->prepare('SELECT display_name FROM users WHERE ID = ? OR user_email = ? LIMIT ? ');
	/* 
	* Insert values with the 'bindValue' method.
	* It is best practice to specify the object type ( e.g. PDO::PARAM_INT) for numbers to prevent conversion to string in the final statement.
	*/
$statement->bindValue(1, 4253, PDO::PARAM_INT); // Use ID '4253' in query.
$statement->bindValue(2, "john.doe@gmail.com"); // Use email 'john.doe@gmail.com' in query.
$statement->bindValue(3, 1, PDO::PARAM_INT); 	// Limit results to one record only.

// Execute your generated statement.
$statement->execute();

	/*
	* Fecth the results.
	* Here we're using PDO::FECTH_OBJ to retrieve an anonymous object wiht column names as properties.
	*/
$result = $statement->fetch(PDO::FECTH_OBJ);

	// A simple ternary test is used to print our resulting 'display_name' value if result exist.
result ? print($result->display_name) : null;

	// Close the connection by setting the original object to null.
$pdo = null;
}catch (PDOException $error) { // Basic error handling
print "Error!: " . $error->getMessage() . "<br/>";
die();
}
?>