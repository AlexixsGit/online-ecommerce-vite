import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { Layout } from "../Layout/Layout";

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
            {
                items?.map((item) => (
                    <Card key={item.id} data={item} />
                ))
            }
        </Layout>
    );
}