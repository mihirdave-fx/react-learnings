import { useEffect, useState } from "react";
import { getPostData, deletePostData } from "./AxiosMain";
import "../AxiosCRUD/index.css";
import { Form } from "./Form";

export const ApiData = () => {
  const [data, setData] = useState([]);
  const [updateDataApi, setUpdateDataApi] = useState({});

  //function to get post data
  const getApiData = async () => {
    const res = await getPostData();
    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    getApiData();
  }, []);

  //function to delete post data
  const handleDeletePost = async (id) => {
    try {
      const res = await deletePostData(id);
      if (res.status === 200) {
        const updatedPostData = data.filter((curPost) => {
          return curPost.id !== id;
        });
        setData(updatedPostData);
      } else {
        console.log("Failed to delete the post: ", res.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdatePost = (curPost) => setUpdateDataApi(curPost);

  return (
    <>
      <section className="p-3 rounded-sm bg-sky-200 my-8 mx-auto w-5xl text-2xl">
        <Form
          data={data}
          setData={setData}
          updateDataApi={updateDataApi}
          setUpdateDataApi={setUpdateDataApi}
        />
      </section>
      <section className="max-w-dvw px-60 my-8">
        <ol className="grid grid-cols-3 gap-10">
          {data.map((curPost) => {
            const { id, body, title } = curPost;
            return (
              <li
                key={id}
                className="p-4 border border-white rounded-sm text-white text-xl leading-8"
              >
                <p className="mb-2">Title: {title}</p>
                <p className="mb-2">Body: {body}</p>
                <div className="inline-flex gap-4 mt-4">
                  <button
                    className="bg-sky-500 hover:bg-sky-700 text-white cursor-pointer rounded-md px-4 py-1"
                    onClick={() => handleUpdatePost(curPost)}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      handleDeletePost(id);
                    }}
                    className="bg-red-500 hover:bg-red-700 text-white cursor-pointer rounded-md px-4 py-1"
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
};
