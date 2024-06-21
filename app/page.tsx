"use client";

// import {
//   useCreateTodoMutation,
//   useEditTodoMutation,
//   useDeleteTodoMutation,
//   useGetTodosQuery,
// } from "@/src/generated";

import "./bla.css";
import { GetLists } from "./_components/GetLists";
import { AddList } from "./_components/AddList";

export default function Home() {
  // const { data, loading, error } = useGetTodosQuery()

  return (
    <div>
      <h1 className="todo">To-Do List</h1>
      <div className="container">
        <AddList />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // gap: "10px",
            border: "1.5px solid grey",
            borderRadius: "10px",
            width: "50vw",
          }}
        >
          <div className="header">
            <span className="num">№</span>
            <span className="title">Title</span>
            <span className="status">Status</span>
            <span className="date">Date</span>
            <span className="actions">Actions</span>
          </div>
          <GetLists />
        </div>
      </div>

      {/* <div>
        <Card />
      </div> */}
    </div>
  );
}
