from pydantic import BaseModel, ConfigDict


class ProductBase(BaseModel):
    title: str
    description: str
    price: float
    rating: float
    color: str
    size: str
    image: str
    quantity: int
    is_top_product: bool = False
    is_new_arrival: bool = False


class ProductCreate(ProductBase):
    pass

class ProductUpdate(ProductBase):
    pass

class ProductResponse(ProductBase):
    id: int

    model_config = ConfigDict(
        from_attributes=True
    )