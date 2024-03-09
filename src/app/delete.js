"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function DeleteToDoNode({ id }) {
  const [isPrompted, setIsPrompted] = useState(false);

  const router = useRouter();
  return (
    <>
      {isPrompted ? (
        <div className="flex flex-col items-center justify-between">
          <button
            onClick={async () => {
              await fetch(
                `http://127.0.0.1:8090/api/collections/todos/records/${id}`,
                {
                  method: "DELETE",
                }
              );
              router.refresh();
            }}
          >
            Confirm
          </button>
          <button
            onClick={() => {
              setIsPrompted(false);
            }}
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            setIsPrompted(true);
          }}
        >
          Delete
        </button>
      )}
    </>
  );
}
