<?php
/*
 * Extract the 'id' value from the query string.
 * We're filtering to ensure it matches the expected integer number we expect.
 */
$id    = filter_input(INPUT_GET, 'id',    FILTER_SANITIZE_NUMBER_INT);
// Filter the 'title' value, which can contain special characters (HTML entities and the like).
$title = filter_input(INPUT_GET, 'title', FILTER_SANITIZE_SPECIAL_CHARS);
// Build a simple URL with some good (matching) and bad values.
$goodURL = baseURL() . '?' . http_build_query(array('id' => 5276,           'title' => "Les Misérables"));
$badURL  = baseURL() . '?' . http_build_query(array('id' => "not a number", 'title' => "Les Misérables"));
function baseURL() {
  return (@$_SERVER['HTTPS']) ? "https://" : "http://" .
           $_SERVER["SERVER_NAME"] . 
          ($_SERVER['SERVER_PORT'] != 80 ? ":" . 
           $_SERVER['SERVER_PORT'] : null) . 
           $_SERVER['SCRIPT_NAME'];
}
?>
<!-- Our basic HTML output -->
<p>
  Your searched book <?= $title ? "is titled $title" : "has no title" ?> and has <?= $id ? "the ID $id." : "an invalid ID." ?>
</p>
<a href="<?= baseURL() ?>">Home</a><br/>
<a href="<?= $goodURL ?>">Good Link</a><br/>
<a href="<?= $badURL ?>">Bad Link</a><br/>