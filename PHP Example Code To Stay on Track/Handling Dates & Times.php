<?php 
	// setting the timezone (UTC by default is STRONGLY recommended)
	date_default_timezone_set('UCT');

	/*
	* Creating our initial DateTime object to the current time or 'now'.
	* A value of 'null' is also equivalent to the current timestamp.
	*/
	$date = new DateTime('now');
	// Output with using standar date() string formatting.
	echo $date->format('y-m-d h:i:s e'); "<br/>";

	// We can also manually set the timezone when instantiating our Datetime object.
	$date = new Datetime('now', new DateTimeZone('America/Los_Angeles')); 
	echo $date->format('y-m-d h:i:s e'); "<br/>";

	// You can also manually set the timezone after the fact if desired.
	$date->setTimezone(new DateTimeZone('America/New York'));
	echo $date->format('y-m-d h:i:s e'); "<br/>";

	/* 
	* Modifying the date by adding a DateInterval().
	* Format is 'P' for period, the integers followed by letters to indicate the 
	* period designation. 'T' indicates time elements.
	* see: http://php.net/manual/en/daterinterval.construct.php
	*/ 
	$date->add(new DateInterval('P4DT10M')); // Added 4 days (4D) and 10 minutes (10M)
	echo $date->format('Y-m-d h:i:s e'), "<br/>";
?> 