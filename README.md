# Coding along with Node Beginner Book

I'm just going to be adding to this repo as I go through the book!

## Notes

### Synchronousity

#### Synchronous

```
var result = database.query("SELECT * FROM hugetable");
console.log("Hello World");
```

#### Asynchronous

```
database.query("SELECT * FROM hugetable", function(rows) {
    var result = rows;
    });
console.log("Hello World");
```
