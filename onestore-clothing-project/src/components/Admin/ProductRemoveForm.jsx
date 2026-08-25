import { useState } from "react";
import { toast } from "react-toastify";
import { getProduct, deleteProduct } from "../../api/productApi";

const ProductRemoveForm = () => {
  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGetProduct = async () => {
    if (!productId) {
      return;
    }

    try {
      setLoading(true);

      const fetchedProduct = await getProduct(productId);

      setProduct(fetchedProduct);
      console.log(fetchedProduct);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async () => {
    try {
      await deleteProduct(product.id);

      toast.success("Product deleted successfully");

      setProduct(null);

      setProductId("");
    } catch (error) {
      console.error(error);

      toast.error("Failed to delete product");
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-2 w-100 text-lg">
        <label className="block font-medium mb-1">Write a Product ID</label>

        <input
          type="number"
          value={productId}
          onChange={(event) => setProductId(event.target.value)}
          className="w-full border rounded px-3 py-2 bg-white border-none hover:outline-dark"
          placeholder="Enter Product Id"
        />
        <button
          type="button"
          onClick={handleGetProduct}
          className="bg-blue-600 w-50 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-800"
        >
          Get Product
        </button>

        {loading && <p className="text-blue-600 font-medium">Loading...</p>}
        {product && (
          <div className="border rounded-lg p-4 mt-6 shadow space-y-2 w-100">
            <h2 className="text-xl font-bold">Product Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p>
                  <strong>ID:</strong> {product.id}
                </p>
                <p>
                  <strong>Title:</strong> {product.title}
                </p>
                <p>
                  <strong>Color:</strong> {product.color}
                </p>

                <p>
                  <strong>Size:</strong> {product.size}
                </p>
                <p>
                  <strong>Top Product:</strong>{" "}
                  {product.is_top_product ? "Yes" : "No"}
                </p>
              </div>
              <div className="space-y-2">
                <p>
                  <strong>Price:</strong> ${product.price}
                </p>

                <p>
                  <strong>Rating:</strong> {product.rating}
                </p>
                <p>
                  <strong>Image:</strong> {product.image}
                </p>

                <p>
                  <strong>Quantity:</strong> {product.quantity}
                </p>
                <p>
                  <strong>New Arrival:</strong>{" "}
                  {product.is_new_arrival ? "Yes" : "No"}
                </p>
              </div>
            </div>
            <p>
              <strong>Description:</strong> {product.description}
            </p>

            <button
              onClick={handleDeleteProduct}
              className="mt-4 bg-red-600 w-50 text-white px-4 py-2 rounded hover:bg-red-700 cursor-pointer"
            >
              Delete Product
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductRemoveForm;
