```javascript
// Incorrect usage of $inc operator in MongoDB aggregation pipeline
db.collection.aggregate([
  { $match: { /* ... */ } },
  { $group: { _id: "$field", sum: { $sum: "$value" } } },
  { $inc: { sum: 1 } } // Incorrect: $inc cannot modify grouped field
]);
```