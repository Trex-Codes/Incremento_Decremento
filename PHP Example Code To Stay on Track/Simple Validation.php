<?php
// Returns 'john.doe@gmail.com', a valid email.
echo filter_var("john.doe@gmail.com", FILTER_VALIDATE_EMAIL), '<br/>';
// Return 'http://www.codingdojo.com/', a valid URL.
echo filter_var("http://www.codingdojo.com/", FILTER_VALIDATE_URL), '<br/>';
// Return '192.168.0.0', a valid IP.
echo filter_var("192.168.0.0", FILTER_VALIDATE_IP), '<br/>';
?>