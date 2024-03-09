import { DeleteToDoNode } from "./delete";

async function getToDo() {
  const response = await fetch(
    "http://127.0.0.1:8090/api/collections/todos/records",
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  return data;
}

function Note({ item }) {
  return (
    <div className="w-full p-2 py-5 bg-gradient-to-r from-zinc-500  backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30">
      <p className="grid grid-cols-3 gap-2 min-w-[40vw]">
        <span>{item.Title || "Default Text"}</span>
        <DeleteToDoNode
          id={item.id}
          key={item.id}
        />
        <button
          className={
            (item.Done ? "text-green-600" : "text-red-600") + " text-right"
          }
        >
          {item.Done ? "Complete" : "Incomplete"}
        </button>
      </p>
    </div>
  );
}
export default async function ViewToDo() {
  const toDoData = await getToDo();

  const {
    items: toDo,
    page,
    totalPages,
    totalItems,
    perPage,
  } = toDoData || {
    items: [],
    page: 1,
    totalPages: 0,
    totalItems: 0,
    perPage: 0,
  };

  return (
    <div className="flex  flex-col items-center justify-between">
      <h2 className="items-center justify-between p-2">To Do List</h2>
      <div className=" justify-between flex flex-col w-full max-w-5xl min-w-44 gap-4">
        {toDo.map((item) => (
          <Note
            key={item.id}
            item={item}
          ></Note>
        ))}
      </div>
      <div className="stats text-center p-2">
        <p> {totalItems} items</p>
        <p>
          Page {page} of {totalPages}
        </p>
        <p>Showing {perPage} per page</p>
      </div>
    </div>
  );
}
