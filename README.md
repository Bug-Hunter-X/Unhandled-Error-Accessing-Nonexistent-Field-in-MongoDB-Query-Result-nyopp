# Unhandled Error Accessing Nonexistent Field in MongoDB Query Result

This code demonstrates a common error when working with MongoDB query results in JavaScript.  The issue arises when attempting to access a field that might not exist in the retrieved document. If the document does not have the expected field, an error is thrown.

The `bug.js` file contains the erroneous code.  The `bugSolution.js` file provides a corrected version.

## How to reproduce:

1.  Ensure you have a MongoDB instance running and a collection named 'users'.
2.  Insert at least one document into the 'users' collection.
3.  Run the code in `bug.js`.
4. Observe the error.  Test with a document that has a 'name' field and one that does not.

## Solution:

The improved solution in `bugSolution.js` addresses this issue by safely accessing the field, using optional chaining.