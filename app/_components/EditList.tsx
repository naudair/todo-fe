import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { useEditTodoMutation, useGetTodosQuery } from "@/src/generated";

export function EditList({ todo }: { todo: any }) {
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editingId, setEditingId] = useState(todo._id);

  const [editTodoMutation, { loading, error, data }] =
    useEditTodoMutation();
  // const { refetch } = useGetTodosQuery();
  // console.log(data)

  const editList = async () => {
    try {
      await editTodoMutation({
        // variables: {
        //   id: editingId,
        //   item: { title: editTitle },
        // },
      });
      // console.log(editList)
      // setEditTitle("");
      // setEditingId(null);
      // refetch();
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleEditInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Input
        className="h-14 rounded-xl font-lg"
        type="text"
        placeholder="Edit Title"
        value={editTitle}
        onChange={handleEditInput}
      />
      <button className="btn" onClick={() => setEditingId(null)}>
        Cancel
      </button>
      <button className="btn" onClick={editList}>
        Save
      </button>
    </div>
  );
}
