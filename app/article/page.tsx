"use client";
import { Suspense } from "react";
import Article from "./components/Article";

export default function ArticlePage() {
  return (
    <Suspense fallback={<div>Loading article...</div>}>
      <Article />
    </Suspense>
  );
}
