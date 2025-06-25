"use client";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import styles from "./library.module.css";
import { FaBookOpen } from "react-icons/fa";
import { FaChevronRight, FaChevronDown } from "react-icons/fa6";
import { MdBook } from "react-icons/md";
import { useRouter } from "next/navigation";
interface Book {
    _id: string;
    image: string;
    title: string;
    author: string;
}

const pages = () => {
    const router = useRouter();
    const [show, setShow] = useState(false);
    const [allBooks, setAllBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(true);
    return (
        <div className={styles.main}>
            <Navbar />
            <div className={styles.row}>
                <div className={styles.left}>
                    <div className={styles.menuMain}>
                        <FaBookOpen className={styles.bookicon} />
                        <p>Library</p>
                        {show ? (
                            <FaChevronDown
                                onClick={() => setShow(!show)}
                                className={styles.toRight}
                            /> 
                        ) : (
                            <FaChevronRight
                                onClick={() => setShow(!show)}
                                className={styles.toRight}
                            />
                        )}
                    </div>
                    {show && (
                        <div className={styles.menuItems}>
                            <span>All Titles</span>
                            <span>Books</span>
                            <span>Comics</span>
                            <span>Samples</span>
                        </div>
                    )}
                    <div className={styles.menuMain}>
                        <MdBook className={styles.bookicon2} />
                        <p>Notes & Highlights</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <h1>Trending</h1>
                    <div className={styles.books}>
                        {allBooks.map((book) => (
                            <div
                                onClick={() => {
                                    router.push(`/book/${book._id}`);
                                }}
                                key={book._id}
                                className={styles.bookItem}
                            >
                                <img
                                    src={book.image}
                                    alt={book.title}
                                    className={styles.bookImage}
                                />
                                <div className={styles.bookDetails}>
                                    <h3 className={styles.bookTitle}>{book.title}</h3>
                                    <p className={styles.bookAuthor}>{book.author}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default pages
