import {SortTable} from "./Components/SortTable/SortTable";
import React, {useRef, useState} from "react";
import {content} from "./Components/SortTable/Content";

export const Catalog = () => {


    const [array, setArray] = useState(content);
    const [sorted, setSorted] = useState({name: true, price: true, inStock: true, discount: true});


    const sort = (byWhat) => {
        const direction = sorted[byWhat] ? 1 : -1;
        const goodsCopy = [...array].sort((a, b) => {
            if (a.new && !b.new) {
                return -1; 
            }
            if (!a.new && b.new) {
                return 1; 
            }
    
            let aValue = a[byWhat];
            let bValue = b[byWhat];
    
            if (byWhat === "price") {
                aValue = a.discount ? (a.price * (100 - a.discount)) / 100 : a.price;
                bValue = b.discount ? (b.price * (100 - b.discount)) / 100 : b.price;
            }
    
            if (aValue > bValue) {
                return direction;
            }
            if (aValue < bValue) {
                return -direction;
            }
            return 0;
        });
    
        const newSorted = { ...sorted, [byWhat]: !sorted[byWhat] };
        setSorted(newSorted);
        setArray(goodsCopy);
    };
    
      
    const sorts = () => {
        return (
            <div className="sorts">
                <button onClick={() => sort("name")}>
                    Название
                </button>
                <button onClick={() => sort("price")}>
                    Цена
                </button>
                <button onClick={() => sort("inStock")}>
                    В наличии
                </button>
                <button onClick={() => sort("discount")}>
                    Скидка
                </button>
            </div>
        );
    }
    const goods = () => {
        return array.map((item) => {
            return (
                <div className="one_good">
                    <div className="wrapper">
                        <img src={item.img} alt=""/>
                        <div className="text">
                            <h2>{item.name}</h2>
                            {item.new ? <div className="new">Новое!!!</div> : null}
                            <div className="prices">
                                {item.discount && <h2>{(item.price * (100 - item.discount)) / 100}$</h2>}
                                <h3>{item.price}$</h3>
                            </div>
                            <h3>{item.inStock} едениц(ы)</h3>
                        </div>
                    </div>
                    <div className="description"><h3>Модель:</h3><span className="description-text">{item.desc}</span></div>
                </div>
            );
        });
    }

    return (
        <>
            {sorts()}
            <div className="goods">
                {goods()}
            </div>
            <SortTable content={array}/>
        </>
    );
}
