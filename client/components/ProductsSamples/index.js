import React from 'react';

import {
  ProductSamplesContainer,
  ProductSamplesWrapper,
  ProductSamplesMedia,
  ProductSamplesImage,
} from './ProductsSamplesIElements';

const image2Url = '../../images/flowers2.jpg';
// const image3Url = "../../images/flowers3.jpg";
const image4Url = '../../images/flowers4.jpg';
// const image5Url = "../../images/flowers5.jpg";

const ProductSamples = () => {
  return (
    <>
      <ProductSamplesContainer>
        <ProductSamplesWrapper>
          <ProductSamplesMedia>
            <ProductSamplesImage src={image2Url} width="200" height="200" />
            <ProductSamplesImage src={image4Url} width="200" height="200" />
            <ProductSamplesImage src={image2Url} width="200" height="200" />
            <ProductSamplesImage src={image4Url} width="200" height="200" />
          </ProductSamplesMedia>
        </ProductSamplesWrapper>
      </ProductSamplesContainer>
    </>
  );
};

export default ProductSamples;
