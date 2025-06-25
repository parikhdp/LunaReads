"use client";
import React, { useEffect, useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import Navbar from "@/components/Navbar";
import styles from "./Read.module.css";
import { useParams, useRouter } from 'next/navigation';

interface Book {
  _id: string;
  image: string;
  title: string;
  author: string;
}

const Page = () => {
  const router = useRouter();
  const { bookid } = useParams();
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (    
    <div className={styles.main}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.viewer}>
          {pdfUrl ? (
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <Viewer
                fileUrl={pdfUrl}
                plugins={[defaultLayoutPluginInstance]}
                theme="dark"
              />
            </Worker>
          ) : (
            <p>Loading PDF...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;