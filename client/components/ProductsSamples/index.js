import React from "react";

import {
  ProductSamplesContainer,
  ProductSamplesWrapper,
  ProductSamplesMedia,
  ProductSamplesImage,
} from "./ProductsSamplesIElements";

const image6Url = "../../images/flowers6.jpg";
const image2Url = "../../images/flowers2.jpg";
const image3Url = "../../images/flowers3.jpg";
const image4Url = "../../images/flowers4.jpg";

const ProductSamples = () => {
  return (
    <>
      <ProductSamplesContainer>
        <ProductSamplesWrapper>
          <ProductSamplesMedia>
            <ProductSamplesImage src={image2Url} />
            <ProductSamplesImage src={image4Url} />
            <ProductSamplesImage src={image6Url} />
            <ProductSamplesImage src={image3Url} />
          </ProductSamplesMedia>
        </ProductSamplesWrapper>
      </ProductSamplesContainer>
    </>
  );
};

export default ProductSamples;
