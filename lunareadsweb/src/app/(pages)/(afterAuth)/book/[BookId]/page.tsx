"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import styles from "./Book.module.css";
import { useParams, useRouter } from "next/navigation";

const apiurl = process.env.NEXT_PUBLIC_API_URL;

interface Book {
    _id: string;
    image: string;
    title: string;
    author: string;
    description: string;
    price: string;
    amazonLink: string;
    pdf: string;
}

const Page = () => {
    const { bookId } = useParams(); // ✅ CORRECTED
    const router = useRouter();
    const [book, setBook] = useState<Book | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await fetch(`${apiurl}/api/books/${bookId}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch book data");
                }
                const data = await response.json();
                setBook(data);
                setLoading(false);
            } catch (err: any) {
                setError(err.message);
                setLoading(false);
            }
        };
        if (bookId) fetchBook();
    }, [bookId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className={styles.main}>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <img src={book?.image} alt={book?.title} className={styles.bookImage} />
                </div>
                <div className={styles.details}>
                    <h1 className={styles.bookTitle}>{book?.title}</h1>
                    <p className={styles.bookAuthor}>by {book?.author}</p>
                    <div
                        className={styles.bookDescription}
                        dangerouslySetInnerHTML={{ __html: book?.description || "" }}
                    />
                    <p className={styles.bookPrice}>₹ {book?.price}</p>

                    <button
                        className={styles.purchaseButton}
                        onClick={() => {
                            // Payment logic goes here if needed
                            router.push(`/read/${bookId}`); // ✅ FIXED
                        }}
                    >
                        Start Reading
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Page;
