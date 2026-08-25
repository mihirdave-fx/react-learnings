import os
import shutil
import uuid

from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, Form
from sqlalchemy.orm import Session
from sqlalchemy import select

from app.dependencies import get_db
from app.models.product import Product
from app.schemas.product import ProductCreate, ProductResponse, ProductUpdate

router = APIRouter(
    prefix="/products",
    tags=["Products"],
)

#create product
@router.post("/", response_model=ProductResponse,)
def create_product(
    title: str = Form(...),
    description: str = Form(...),
    price: float = Form(...),
    rating: float = Form(...),
    color: str = Form(...),
    size: str = Form(...),
    quantity: int = Form(...),
    is_top_product: bool = Form(False),
    is_new_arrival: bool = Form(False),
    image: UploadFile = File(...), # 1. Accept binary file upload
    db: Session = Depends(get_db)
):
    
    # 2. Save the uploaded image file to local disk
    upload_dir = "app/static/uploads"
    
    # Generate a unique filename using UUID so files with identical names don't overwrite each other
    file_extension = os.path.splitext(image.filename)[1]
    unique_filename = f"{uuid.uuid4()}{file_extension}"
    file_path = os.path.join(upload_dir, unique_filename)

    # Write the binary bytes from memory onto the disk
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(image.file, buffer)

    # 3. Create the relative URL path to store in database
    image_url = f"/static/uploads/{unique_filename}"

    # One way to do it easily
    # db_product = Product(**product.model_dump())

    # Second way to know how it actually working bts
    db_product = Product(
        title=title,
        description=description,
        price=price,
        rating=rating,
        color=color,
        size=size,
        image=image_url, # Saves the URL path string (e.g., /static/uploads/uuid.png)
        quantity=quantity,
        is_top_product=is_top_product,
        is_new_arrival=is_new_arrival,
    )

    db.add(db_product)
    db.commit()
    db.refresh(db_product)

    return db_product

#get products
@router.get("/", response_model=list[ProductResponse],)
def get_products(db: Session = Depends(get_db)):
    statement = select(Product)
    db_product = db.execute(statement).scalars().all()
    return db_product

#get single product
@router.get("/{product_id}", response_model=ProductResponse,)
def get_product(product_id: int, db: Session = Depends(get_db)):
    statement = select(Product).where(Product.id == product_id)
    db_product  = db.execute(statement).scalars().first()

    if db_product is None:
        raise HTTPException(
            status_code=404,
            detail="Product not found",
        )
    return db_product

#update product
@router.put("/{product_id}", response_model=ProductResponse,)
def update_product(product_id: int, product: ProductUpdate, db: Session = Depends(get_db)):
    statement = select(Product).where(Product.id == product_id)
    db_product  = db.execute(statement).scalars().first()

    if db_product is None:
        raise HTTPException(
            status_code=404,
            detail="Product not found",
        )

    update_data = product.model_dump()

    for key, value in update_data.items():
        setattr(db_product, key, value)

    db.commit()
    db.refresh(db_product)

    return db_product

#delete product
@router.delete("/{product_id}")
def delete_product(product_id: int, db: Session = Depends(get_db)):
    statement = select(Product).where(Product.id == product_id)
    db_product  = db.execute(statement).scalars().first()

    if db_product is None:
        raise HTTPException(
            status_code=404,
            detail="Product not found",
        )

    db.delete(db_product)
    db.commit()

    return {
        "message": "Product deleted successfully"
    }