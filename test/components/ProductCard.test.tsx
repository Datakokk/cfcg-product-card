import React from "react";
import renderer, { act } from "react-test-renderer";
import ProductCard from "../../src/components";
import { product1 } from "../data/products";

describe('Test on <ProductCard />', () => { 

    test('should display component correctly', () => { 

        const wrapper = renderer.create(
            <ProductCard product={ product1}>
                {
                    () => (
                        <h1>Product Card</h1>
                    )
                }
            </ProductCard>
        );
        expect ( wrapper.toJSON() ).toMatchSnapshot();
     });

     test('should increase counter', () => { 

        const wrapper = renderer.create(
            <ProductCard product={ product1}>
                {
                    ({ count, increaseBy }) => (
                        <>
                            <h2>Product Card</h2>
                            <span>{ count }</span>
                            <button onClick={ () => increaseBy(5)}></button>
                        </>
                    )
                }
            </ProductCard>
        );
        
        let tree = wrapper.toJSON();

        expect ( tree ).toMatchSnapshot();

        act(() => {
            (tree as any).children[2].props.onClick();
          });

        tree = wrapper.toJSON();

        expect((tree as any).children[1].children[0]).toBe("5")
     });
 })