import Image from "next/image";
import { loadHomePage, loadPosts } from "@/apiService/apiService";

import Link from "next/link";
import imageUrl from "@/utils/generate-image-url";

export default async function Home() {
  const homePageData = await loadHomePage();
  const postsData = await loadPosts();
console.log(postsData)
  return (
    <div className="container mt-5">
      <div className="content"> d d d
        <h1>{homePageData?.title}</h1>
        <div className="row">
          {postsData?.map((post, index) => {
            return (
              <div className="col-4" key={"post" + index}>
                <div className="card">
                  <div className="card-body">
                    <Image
                      src={imageUrl(
                        post?.image?.url
                      )}
                      alt={"post details"}
                      width={350}
                      height={250}
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                    <h5 className="card-title">{post?.title}</h5>
                    <p className="card-text">
                      {post?.shortDescription}
                    </p>
                    <Link
                      href={`/${post?.slug}`}
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