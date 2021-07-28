from pydantic import BaseModel
from datetime import datetime
from typing import List


class Invoice(BaseModel):
    id: int
    product_id: int
    quantity: int
    date: datetime


class Invoices(BaseModel):
    invoices: List[Invoice]


class Product(BaseModel):
    id: int
    name: str
    type: str

class Products(BaseModel):
    products: List[Product]
