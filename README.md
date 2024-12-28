# MongoDB Aggregation Error: Incorrect Use of $inc Operator

This repository demonstrates a common error encountered when using the `$inc` operator within a MongoDB aggregation pipeline, specifically after a `$group` stage.

The `bug.js` file shows the erroneous code, attempting to increment a field created during the `$group` stage.  This will result in an error. 

The corrected code, showing the proper way to increment, is provided in `bugSolution.js`.