"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function CreateToDo() {
  const [title, setTitle] = useState("");
  const [done, setDone] = useState(false);

  const setDefault = () => {
    setTitle("");
    setDone(false);
  };

  const router = useRouter();
  return (
    <form
      className="flex flex-col items-center justify-between"
      onSubmit={async (e) => {
        e.preventDefault();
        await fetch("http://127.0.0.1:8090/api/collections/todos/records", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Title: e.target[0].value,
            Done: e.target[1].checked,
          }),
        });
        router.refresh();
        setDefault();
      }}
    >
      <h2 className="items-center justify-between p-2">Create a To Do</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 bg-gradient-to-r from-zinc-500  backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30"
      />
      <label
        for="done"
        className="w-full p-2 bg-gradient-to-r from-zinc-500  backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30"
      >
        Done:{" "}
        <input
          type="checkbox"
          checked={done}
          name="done"
          onChange={(e) => setDone(e.target.checked)}
        />
      </label>

      <button type="submit">Create</button>
    </form>
  );
}
