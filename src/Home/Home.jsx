import { useEffect, useState } from "react";
import { Layout } from "../Layout/Layout";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export function Home() {
    const [items, setItems] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(respose => setItems(respose))
    }, [])

    return (
        <Layout className="bg-red-100">
            Home
            <div className="grid p-6 gap-16 grid-cols-4 w-full max-w-screen-lg">
                {
                    items?.map((item) => (
                        <ShoppingCart key={item.id} data={item} />
                    ))
                }
            </div>
        </Layout>
    );
}