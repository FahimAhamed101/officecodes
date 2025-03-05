import Image from "next/image";
import { loadHomePage, loadPosts } from "@/apiService/apiService";

import Link from "next/link";
import imageUrl from "@/utils/generate-image-url";

export default async function Home() {
  const homePageData = await loadHomePage();
  const postsData = await loadPosts();

  return (
    <div className="container mt-5">
      <div className="content">
        <h1>{homePageData?.title}</h1>
        <div className="row">
          {postsData?.map((post, index) => {
            return (
              <div className="col-4" key={"post" + index}>
                <div className="card">
                  <div className="card-body">
                    <Image
                      src={imageUrl(
                        post?.attributes?.image?.data?.attributes?.url
                      )}
                      alt={"post details"}
                      width={350}
                      height={250}
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                    <h5 className="card-title">{post?.attributes?.title}</h5>
                    <p className="card-text">
                      {post?.attributes?.shortDescription}
                    </p>
                    <Link
                      href={`/${post?.attributes?.slug}`}
                      className="card-link"
                    >
                      Continue Reading
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}