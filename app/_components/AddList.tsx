import { Input } from "@/components/ui/input";
import { useCreateTodoMutation, useGetTodosQuery } from "@/src/generated";
import React, { useState } from "react";

export function AddList() {
  const [title, setTitle] = useState("");

  const [createTodoMutation, { data, loading, error }] =
    useCreateTodoMutation();
  const { refetch } = useGetTodosQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error:{error.message}</p>;

  const addList = async () => {
    try {
      const res = await createTodoMutation({
        variables: {
          item: {
            title: title,
          },
        },
      });
      setTitle("");
      refetch();
    } catch (error) {
      console.error("Error while creating list:", error);
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div className="flex justify-around mb-[5vh]">
      <Input
        className="h-14 rounded-xl font-lg"
        type="text"
        placeholder="Todo Title"
        value={title}
        onChange={handleInput}
      />
      <button onClick={addList} className="btn">Add List</button>
    </div>
  );
}
