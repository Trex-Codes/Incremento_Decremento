<?php
$searchTerm = "coding";
/*
 * Using the \b flag, we're searching only for whole words.
 */
if (preg_match("/\b$searchTerm\b/i", "Coding Dojo is the best!")) {
  echo "Match found.<br/>";
} else {
  echo "No match found.<br/>";
}
/*
 * Since our search term "coding" is only part of a larger word (decoding), no match will be found.
 */
if (preg_match("/\b$searchTerm\b/i", "Decoding encryptions is just one of my many sexy hobbies.")) {
  echo "Match found.<br/>";
} else {
  echo "No match found.<br/>";
}
?>