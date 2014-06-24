var key1 = 0; /* TODO - change this to the value of key #1 */
var key2 = 0; /* TODO - change this to the value of key #2 */
var key3 = 0; /* TODO - change this to the value of key #3 */

///////////////////////////////////////////////////////////////////////////////
//
// To find the information within the encrypted string, do the following tasks
// in this order:
//
//   1. Remove chunks of random padding characters
//
// The padding pattern is as follows: given a source string of "XYZ" and
// a key of value 3, the string might look something like "H5RXI8GYKOLZR9E".
// If the key had a value of 2, the string might be "O9X7DYT4ZBK".
//
// Remove all the padding characters using the value of key #1 to
// determine the size of each padding chunk, produce a new unpadded string,
// and use that string in the next step.
//
//   2. Offset each remaining character
//
// Subtract the value of key #2 from each character's code value in the string,
// and produce a new string with each character having that offset applied. Use
// the resulting string in the next step. For example, given the string "ABC123"
// and a key value of 2, the resulting string would be "?@A/01".
//
//   3. XOR each character
//
// Bitwise XOR each character value of the remaining string with the value of
// key #3 and produce the final unencrypted string to return. If you've done
// everything correctly, the MD5 hash of your string will match the expected
// hash value, and you'll know that you're done.
//
///////////////////////////////////////////////////////////////////////////////

function decrypt(text) {
  // TODO - decrypt the data in "text" using the 3 puzzle keys by following the
  // instructions above. Don't forget to return the decrypted string at the end.

  return "Not implemented yet.";
}

function getEncryptedString() {
  // The information you seek is hidden within this string.
  return "H85jclApFRno0SpPNMTkGGeaqWO8QeH755qsCmvg4aHHwriR7$NrujrnhcyngzaJsG0KmqMUpKpVm2ffNoo9CKX8X#mfmGTMftA$NCB63e0rBU5qp5hHMMjg7p69SR03Kr3h9XlPbNYhqZTV0Su5a$6gOo0SEOM{wOiyTzDh8qt6Au5L29TwXlOsQEsMYvJbWNQp4sY$wa2V51YjyvQfihCd7z1ghyKnk0h1WuPCkT8EHwBwIVHNG0kkfoLcNkPTs7BgVGyPIGafK$V9vlW8y2rcraZoMZssqpykUQ1E46xq1WFRKFAKyrVa5qHG2WTijXgLQri0O$8KZzzsBvcytKt2cWiVDkukX9jfEFCxlmF7BG5XklaEuZfdxsO$JqK1iS2t3{oYO6wgncAqHtm9reBUcw3NdfqiTz2viM361CwHf$tE6UU4I74ek2LVFfLW2qS7z8JOX6IhW3am4DbJDg4guqfP9xGh8Nc0ahGwY$q2E9mLdjYuE1EoDLzrfqZRX6xD3mbpUYTG47a8TwOYCZdDvITxqQzqPSG0KkBsZ0xYj53qVWJuT9b32r8okJVHNM8$L3XjQWLH9xGVGwVp3wgqm5romIJR3$gouFxwRxrxRWGdFoTHOlHeKr7eKB1kRjhKllIBNu3eZD83ud2$Gps3GssffjPVVvw9wrbkU6x0KW83Arx4zt1ydLJcNTdfunlK4pYH5HyneI9$7od9NXFIMtcDq5i2pYnvAB2Qe0Rzoqhf4Oy1AZ7fmSLdl0N8Oplve5QE1NUgSzkNjlg9MoLf9XfiMQ9$EO1uSjIzJxyiUwcyiLTq9KMU7jHQL$m7wOqM7vYtM3D1oQmsmqsVt7dZVtRkKVKtTix9pvAZ8EdMlG4qru9G1Fb1jxUgH2FhiIyDkM2jy5oXxxbUOOnunOPk6fq0r7SjHoRQpkE7cvug79OWfXHwxxlFnStVObvvibVVDbvuhcAvKAM7z7ThPKpFD8xQPgVVbN7nlgX2F9tx5FFDmeW8ygQyw2Pqpg6lTyGJ4oTtDq0ScRa2hMXAxxo9F";
}

function solveItClicked() {
  // When you decrypt the string correctly, this will be its MD5 hash value.
  var originalHash = "3112b6c8bb58672878699b8018ca4a76";

  var encrypted = getEncryptedString();
  var revealed = decrypt(encrypted);
  var revealedHash = CryptoJS.MD5(revealed).toString();

  var msg = "";
  if (revealedHash === originalHash) {
    // All done! Let's see what the hidden message says.
    msg += "<strong>" + revealed + "</strong>";
    msg += "<p/>Your result hashed correctly as: " + originalHash;
  }
  else {
    msg += "<strong>Your solution is not correct yet - but keep trying!</strong>";
    msg += "<br>Your result should hash as: " + originalHash;
    msg += "<br>Unfortunately it hashed as: " + revealedHash;
    document.getElementById("decrypted").innerHTML = "You decrypted the above as:<p/>"+revealed;
  }
  document.getElementById("message").innerHTML = msg;
}
