# Dev-Container mit Node.js & MongoDB

- Codespace Starten ... wird neu erstellt
- dann MongoDB-Shell starten mit **mongosh**

Demo:
https://www.w3schools.com/mongodb/mongodb_mongosh_create_database.php

YT-Beispiel:
https://www.youtube.com/watch?v=ocPOHZJ21jE

## Beispielcode 
```
// DBs anzeigen
show dbs;

// DB blog löschen
use blog;
db.dropDatabase(); 

// DB blog neu anlegen
const dbName = "blog";
const db = db.getSiblingDB(dbName);

// Collection in DB anlegen
db.createCollection("posts")

// JSON-Objekt in Collection schreiben 
db.posts.insertOne({
  title: "Post Title 1",
  body: "Body of post.",
  category: "News",
  likes: 1,
  tags: ["news", "events"],
  date: Date()
})

// mehrere JSON-Objekte in Collection schreiben 
db.posts.insertMany([  
  {
    title: "Post Title 2",
    body: "Body of post.",
    category: "Event",
    likes: 2,
    tags: ["news", "events"],
    date: Date()
  },
  {
    title: "Post Title 3",
    body: "Body of post.",
    category: "Technology",
    likes: 3,
    tags: ["news", "events"],
    date: Date()
  },
  {
    title: "Post Title 4",
    body: "Body of post.",
    category: "Event",
    likes: 4,
    tags: ["news", "events"],
    date: Date()
  }
])

// Collection anzeigen ...
db.posts.find()

db.posts.find( {category: "News"} )

```
