from sqlalchemy import String, Integer, Float, Boolean, text
from sqlalchemy.orm import Mapped, mapped_column

from app.db.database import Base

class Product(Base):
    __tablename__ = "products"

    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(String(255))
    description: Mapped[str] = mapped_column(String(1000), nullable=True)
    price: Mapped[float] = mapped_column(Float)
    rating: Mapped[float] = mapped_column(Float)
    color: Mapped[str] = mapped_column(String(100))
    size: Mapped[str] = mapped_column(String(20))
    image: Mapped[str] = mapped_column(String(255))
    quantity: Mapped[int] = mapped_column(Integer, default=1, server_default=text("1"))
    is_top_product: Mapped[bool] = mapped_column(Boolean, default=False)
    is_new_arrival: Mapped[bool] = mapped_column(Boolean, default=False)