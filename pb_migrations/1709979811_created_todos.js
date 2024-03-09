/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "7yewetxy1mr0luc",
    "created": "2024-03-09 10:23:31.233Z",
    "updated": "2024-03-09 10:23:31.233Z",
    "name": "todos",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xdsjqaju",
        "name": "Title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "oo40xbk1",
        "name": "Done",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("7yewetxy1mr0luc");

  return dao.deleteCollection(collection);
})
