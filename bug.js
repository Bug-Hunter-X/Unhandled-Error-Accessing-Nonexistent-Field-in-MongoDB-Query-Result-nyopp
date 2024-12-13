```javascript
const query = { name: 'John Doe' };

db.collection('users').findOne(query, { projection: { _id: 0, name: 1 } }).then((result) => {
  if (!result) {
    console.log('User not found');
    return;
  }
  console.log(result.name); //This will produce an error if no name field is found
}).catch((error) => {
  console.error('Error:', error);
});
```