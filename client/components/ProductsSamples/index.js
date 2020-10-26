import React from 'react';
// import image6 from '../../images/flowers6.jpg';
// import image2 from '../../images/flowers2.jpg';
// import image3 from '../../images/flowers3.jpg';
// import image4 from '../../images/flowers4.jpg';
import {
  ProductSamplesContainer,
  ProductSamplesWrapper,
  ProductSamplesMedia,
  // ProductSamplesImage,
} from './ProductsSamplesIElements';

const ProductSamples = () => {
  return (
    <>
      <ProductSamplesContainer>
        <ProductSamplesWrapper>
          <ProductSamplesMedia>
            {/* <ProductSamplesImage src={image2} />
            <ProductSamplesImage src={image4} />
            <ProductSamplesImage src={image2} />
            <ProductSamplesImage src={image4} /> */}
          </ProductSamplesMedia>
        </ProductSamplesWrapper>
      </ProductSamplesContainer>
    </>
  );
};

export default ProductSamples;
