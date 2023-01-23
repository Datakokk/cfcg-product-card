import React from "react";
import renderer from "react-test-renderer"
import ProductCard, { ProductImage } from '../../src/components';
import { product2 } from "../data/products";


describe('Test on <ProductImage /> ', () => { 
    
    test('show display component without image', () => { 
        

        const wrapper = renderer.create(
            <ProductImage img="someOne.jpg"/>
        );

        expect( wrapper.toJSON() ).toMatchSnapshot();
     });

     test('should display component with image', () => { 

        const wrapper = renderer.create(
            <ProductCard product={ product2 }>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        );
        expect( wrapper.toJSON() ).toMatchSnapshot();
      })
 })