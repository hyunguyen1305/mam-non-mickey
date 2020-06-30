import React, { useState } from "react";
import ImageMasonry from "react-image-masonry";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import TitleText from "../../components/TitleText";

function ThuVienAnh({ data }) {
  const imgLinks = data.map((item) => `http:${item.fields.file.url}`);
  const [photoIndex, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <TitleText text="Thư Viện ảnh"></TitleText>
      <div className="container-fluid" style={{ marginBottom: "2em" }}>
        <ImageMasonry
          numCols={4}
          animate={true}
          forceOrder={true}
          className="masonry-div"
        >
          {imgLinks.map((image, i) => {
            return (
              <div
                key={i}
                style={{ padding: "4px" }}
                onClick={() => {
                  setIsOpen(true);
                  setIndex(i);
                }}
              >
                <img src={image} alt={image} />
              </div>
            );
          })}
        </ImageMasonry>

        {isOpen && (
          <Lightbox
            mainSrc={imgLinks[photoIndex]}
            nextSrc={imgLinks[(photoIndex + 1) % imgLinks.length]}
            prevSrc={
              imgLinks[(photoIndex + imgLinks.length - 1) % imgLinks.length]
            }
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setIndex((photoIndex + imgLinks.length - 1) % imgLinks.length)
            }
            onMoveNextRequest={() =>
              setIndex((photoIndex + 1) % imgLinks.length)
            }
          />
        )}
      </div>
    </div>
  );
}

export default ThuVienAnh;
