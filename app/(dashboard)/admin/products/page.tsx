"use client";

import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import ProductTable from "../../components/products/product-table";
import ProductModal from "../../components/products/product-modal";
import { useEffect, useState } from "react";
import { Product } from "@/app/types";
import { getAllProducts } from "@/app/services/product.service";

const ProductManagement = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [products, setProducts] = useState<Product[]>([])

    const fetchProducts = async () => {
        try {
            const data = await getAllProducts();
            if (data) {
                setProducts(data)
            }
        } catch(error) {
            console.log("Failed to fetch products", error)
        }
    }

    useEffect(() => {
        fetchProducts();
    },[]);

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <div>
            <h1 className="font-bold text-2xl">Product Management</h1>
            <p className="opacity-50">Manage your inverntory, prices and stock.</p>
                </div>
                <Button className="rounded-lg" onClick={() => setIsOpen(true)}>
                    <FiPlus size={24} />
                    Add Product
                </Button>
            </div>
            <ProductTable products={products}/>
            <ProductModal isOpen={isOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default ProductManagement;