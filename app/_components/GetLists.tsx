// "use client";

import { useGetTodosQuery } from "@/src/generated";
import { Togglee } from "./Togglee";
import { DeleteIcon, EditIcon } from "lucide-react";
import "../bla.css";
import Loading from "../../components/ui/loading";
import { Error } from "@/components/ui/error";
import { EditList } from "./EditList";

export function GetLists() {
  const { data, loading, error } = useGetTodosQuery();
  const list = data?.getTodos;
  console.log(data)

  if (loading) return <Loading />;
  if (error) return <Error error={error.message} />;

  return (
    <div>
      <div>
        {list?.map((todo, el) => (
          <div key={todo?._id} className="list">
            <p className="num">{el + 1}</p>
            <p className="title">{todo?.title}</p>
            <p className="status">{todo?.status}</p>
            <p className="date">June 1</p>
            <div className="actions">
              <Togglee />
              <EditIcon />
              <DeleteIcon />
              <EditList todo={todo} />
            </div>
          </div>
        ))}
      </div>
    </div>
    // <div>hello</div>
  );
}

// // const listItem = [
// //   {
// //     title: "Do Homework",
// //     status: "Pending",
// //     date: "June 1",
// //   },
// //   {
// //     title: "Do Homework",
// //     status: "Done",
// //     date: "June 1",
// //   },
// // ];
