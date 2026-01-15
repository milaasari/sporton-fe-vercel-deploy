export interface Category {
    _id: string;
    mame: string;
    description: string;
    imageUrl: string;
    createdAt: string;
    updateAt: string;
}

export interface Product {
    _id: string;
    mame: string;
    description: string;
    imageUrl: string;
    category: Category;
    stock: number;
    price: number;
    createdAt: string;
    updateAt: string;

}

export interface Bank {
  _id: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
  createdAt: string;
  updatedAt: string;
}

export interface Transaction {
    _id: string;
    paymentProof: string;
    status: "pending" | "paid" | "rejection",
    purchasedItems: {
        production: string;
        qty: number;
    },
    totalPayment: string;
    customerName: string;
    customerContact: number | null;
    customerAddress: string;
    createdAt: string;
    updatedAt: string;
}