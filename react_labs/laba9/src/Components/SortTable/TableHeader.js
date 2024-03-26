import {ArrowButtons} from "./ArrowButtons";

export const TableHeader = ({handler}) => {
    return (
        <thead>
        <tr>
            <th>
                <div className="head-items">
                    <span>Номер</span>
                </div>
            </th>
            <th>
                <div className="head-items">
                    <span>Название</span>
                    <ArrowButtons arrowAttribute="name" handler={handler}/>
                </div>
            </th>
            <th>
                <div className="head-items">
                    <span>Цена</span>
                    <ArrowButtons arrowAttribute="price" handler={handler}/>
                </div>
            </th>
            <th>
                <div className="head-items">
                    <span>В наличии</span>
                    <ArrowButtons arrowAttribute="inStock" handler={handler}/>
                </div>
            </th>
            <th>
                <div className="head-items">
                    <span>Изображение</span>
                </div>
            </th>
            <th>
                <div className="head-items">
                    <span>Модель</span>
                </div>
            </th>
            <th>
                <div className="head-items">
                    <span>Новое?</span>
                </div>
            </th>
            <th>
                <div className="head-items">
                    <span>Скидка</span>
                    <ArrowButtons arrowAttribute="Discount" handler={handler}/>
                </div>
            </th>


        </tr>
        </thead>
    )

}