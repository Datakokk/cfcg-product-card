import React from "react";
import renderer from "react-test-renderer"
import { ProductCard, ProductTitle } from '../../src/components';
import { product1 } from "../data/products";


describe('Test on <ProductTitle /> ', () => { 
    
    test('show display component correctly with custom title', () => { 
        

        const wrapper = renderer.create(
            <ProductTitle title="Custom test Product" className="custom-class"/>
        );

        expect( wrapper.toJSON() ).toMatchSnapshot();
     });

     test('should display component with the product name', () => { 

        const wrapper = renderer.create(
            <ProductCard product={ product1 }>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        );
        expect( wrapper.toJSON() ).toMatchSnapshot();
      })
 })