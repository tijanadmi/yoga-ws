// app/blog/page.js
import { Suspense } from "react";
import Spinner from "@/components/Spinner";
import BlogList from "@/components/BlogList";
import Layout from "@/components/Layout";

export const metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <Layout>
      <section className="py-16 bg-gray-50 text-gray-800">
        <div>
          <h1 className="text-4xl mb-5 text-teal-700 font-medium text-center">
            Blog
          </h1>
          <Suspense fallback={<Spinner />}>
            <BlogList />
          </Suspense>
        </div>
      </section>
    </Layout>
  );
}
