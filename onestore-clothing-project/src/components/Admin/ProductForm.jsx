import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import { createProduct } from "../../api/productApi";
import ProductRemoveForm from "./ProductRemoveForm";

const initialFormData = {
  title: "",
  description: "",
  price: "",
  rating: "",
  color: "",
  size: "",
  image: null,
  quantity: "",
  is_top_product: false,
  is_new_arrival: false,
};

const ProductForm = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, value, type, checked, files } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // 1. Create a new FormData container
      const data = new FormData();

      // 2. Append text & numerical fields
      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("price", Number(formData.price));
      data.append("rating", Number(formData.rating));
      data.append("color", formData.color);
      data.append("size", formData.size);
      data.append("quantity", Number(formData.quantity));

      // Append booleans as strings ("true" / "false") so FastAPI parses them accurately
      data.append("is_top_product", formData.is_top_product);
      data.append("is_new_arrival", formData.is_new_arrival);

      // 3. Append the binary file object (if selected)
      if (formData.image) {
        data.append("image", formData.image);
      }

      // 4. Send FormData to backend
      const createdProduct = await createProduct(data);
      toast.success("Product created successfully");

      // 5. Reset state
      setFormData(initialFormData);

      console.log(createdProduct);
    } catch (error) {
      console.error(error);
      toast.error("Failed to create product");
    }
  };

  return (
    <section>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex justify-center p-4">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-2 gap-4 w-full max-w-3xl text-lg"
          >
            <div className="col-span-2">
              <label className="block font-medium mb-1">Title</label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 bg-white border-none hover:outline-dark"
                placeholder="Enter product title"
              />
            </div>

            <div className="col-span-2">
              <label className="block font-medium mb-1">Description</label>

              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 bg-white border-none hover:outline-dark"
                placeholder="Enter product description"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Image</label>

              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 bg-white border-none hover:outline-dark"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Color</label>

              <input
                type="text"
                name="color"
                value={formData.color}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 bg-white border-none hover:outline-dark"
                placeholder="Enter color"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Size</label>

              <input
                type="text"
                name="size"
                value={formData.size}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 bg-white border-none hover:outline-dark"
                placeholder="Enter size"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Quantity</label>

              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 bg-white border-none hover:outline-dark"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Price</label>

              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 bg-white border-none hover:outline-dark"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Rating</label>

              <input
                type="float"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 bg-white border-none hover:outline-dark"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="is_top_product"
                checked={formData.is_top_product}
                onChange={handleChange}
              />

              <label>Top Product</label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="is_new_arrival"
                checked={formData.is_new_arrival}
                onChange={handleChange}
              />

              <label>New Arrival</label>
            </div>

            <button
              type="submit"
              className="bg-blue-600 w-50 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700"
            >
              Create Product
            </button>
          </form>
        </div>
        <div className="flex justify-center p-4">
          <ProductRemoveForm />
        </div>
      </div>
    </section>
  );
};

export default ProductForm;
