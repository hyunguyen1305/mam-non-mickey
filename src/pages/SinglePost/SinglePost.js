import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Lightbox from "react-image-lightbox";

const client = createClient({
  space: "0htr8e4wjyd9",
  accessToken: `vBO4C9cLXX5v6JbvNaplqfeVH9j-_HDp7WJeMnhEIOQ`,
});
const ImageComponent = ({ url }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container">
      <img
        src={url}
        alt="img-component"
        style={{
          maxWidth: "100%",
          maxHeight: "auto",
          objectFit: "scale-down",
          display: "block",
          margin: "1em auto",
        }}
        onClick={() => {
          setIsOpen(true);
        }}
      ></img>
      {isOpen && (
        <Lightbox
          mainSrc={url}
          onCloseRequest={() => setIsOpen(false)}
        ></Lightbox>
      )}
    </div>
  );
};
const CustomComponent = ({ url }) => {
  return (
    <div className="container">
      <a
        href={`https://view.officeapps.live.com/op/embed.aspx?src=http:${url}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textAlign: "center", display: "block" }}
      >
        Xem full màn hình
      </a>
      <iframe
        title="docx"
        src={`https://view.officeapps.live.com/op/embed.aspx?src=http:${url}`}
        width="100%"
        height="623px"
        frameBorder="0"
      ></iframe>
    </div>
  );
};
function SinglePost(props) {
  const postID = props.match.params.id;
  const [post, setPost] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    client.getEntry(postID).then(function (entry) {
      return setPost(entry.fields);
    });
  }, [postID]);

  if (!post) return <div>Loading</div>;
  else {
    const document = post.noidungbai;
    const options = {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
          console.log(node.data.target.fields);
          const { url, contentType } = node.data.target.fields.file;
          if (contentType === "image/jpeg") {
            return <ImageComponent url={url} />;
          } else {
            return <CustomComponent url={url}></CustomComponent>;
          }
        },
      },
    };
    return (
      <section className="container">
        <h1 style={{ textAlign: "center", marginBottom: 0 }}>{post.tieude}</h1>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <em>Ngày Đăng: {post.ngaytao}</em>
        </div>
        <div style={{ width: "100%", borderTop: "1px solid black" }}>
          <img
            src={post.anhdaidien.fields.file.url}
            alt="imageBig"
            onClick={() => {
              setIsOpen(true);
            }}
            style={{
              maxWidth: "100%",
              height: "auto",
              objectFit: "scale-down",
              margin: "1em auto",
              display: "block",
            }}
          ></img>
          {isOpen && (
            <Lightbox
              mainSrc={post.anhdaidien.fields.file.url}
              onCloseRequest={() => setIsOpen(false)}
            ></Lightbox>
          )}
        </div>
        <div>{documentToReactComponents(document, options)}</div>
      </section>
    );
  }
}

export default SinglePost;
