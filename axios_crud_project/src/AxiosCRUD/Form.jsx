import { useEffect, useState } from "react";
import { postData, updateData } from "./AxiosMain";

export const Form = ({ data, setData, updateDataApi, setUpdateDataApi }) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  let isEmpty = Object.keys(updateDataApi).length === 0;

  useEffect(() => {
    updateDataApi &&
      setAddData({
        title: updateDataApi.title || "",
        body: updateDataApi.body || "",
      });
  }, [updateDataApi]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAddData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const addPostData = async () => {
    const res = await postData(addData);
    console.log(res);
    if (res.status === 201) {
      setData([...data, res.data]);
      setAddData({ title: "", body: "" });
    }
  };

  const updatePostData = async () => {
    try {
      const res = await updateData(updateDataApi.id, addData);
      console.log(res.data);

      if (res.status === 200) {
        setData((prev) => {
          return prev.map((curElem) => {
            return curElem.id === res.data.id ? res.data : curElem;
          });
        });
        setAddData({ title: "", body: "" });
        setUpdateDataApi({});
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const action = e.nativeEvent.submitter.value;
    if (action === "Add") {
      addPostData();
    } else if (action === "Edit") {
      updatePostData();
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className="flex gap-6">
        <div>
          <label htmlFor="title"></label>
          <input
            type="text"
            autoComplete="off"
            id="title"
            placeholder="Add Title"
            name="title"
            className="border rounded-sm p-2 outline-0 w-sm bg-white"
            value={addData.title}
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="body"></label>
          <input
            type="text"
            autoComplete="off"
            id="body"
            placeholder="Add Discription"
            name="body"
            className="border rounded-sm p-2 outline-0 w-sm bg-white"
            value={addData.body}
            onChange={handleInput}
          />
        </div>
        <button
          className="cursor-pointer rounded-md px-4 py-1 border bg-sky-600 hover:bg-sky-400 w-100"
          type="submit"
          value={isEmpty ? "Add" : "Edit"}
        >
          {isEmpty ? "Add" : "Edit"}
        </button>
      </form>
    </>
  );
};
