import Image from "next/image";
import { loadPostDetails, loadPostsPath } from "@/apiService/apiService";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import imageUrl from "@/utils/generate-image-url";



export default async function PostDetails({ params }) {
  const postDetails = await loadPostDetails(params?.slug);

  return (
    <div className="container mt-5">
      <div className="content">
        <Image
          src={imageUrl(postDetails?.image?.url)}
          alt={"post details"}
          width={600}
          height={400}
        />
        <h1>{postDetails?.title}</h1>
        <BlocksRenderer content={postDetails?.content} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const postsPath = await loadPostsPath();
  return postsPath?.map((post) => ({
    slug: post?.slug,
  }));
}
export const revalidate = 60;