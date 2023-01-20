# cfcg-product-card

This is a test package deploy on npm

### Carlos Calvo

## Example
```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'cfcg-product-card';
```

```
<ProductCard 
  product={ product  }
  initialValues={{
    count: 2,
    maxCount: 10
  }}
  >
    {
      ({ count,
        isMaxCountReached,
        maxCount,
        product,
        increaseBy,
        reset, }) => (
        <>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />                 
        </>
      )
    }
</ProductCard>
```