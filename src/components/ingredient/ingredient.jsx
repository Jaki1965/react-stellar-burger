import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredient.module.css"
import PropTypes from "prop-types";
import { ingredientPropType } from "../../utils/prop-types";

const Ingredient = (props) => {
    console.log(props.data.image);
    return (
        <>
            <li className={styles.item}>
                <Counter count={1} size="default" className={styles.counter} extraClass="m-1" />
                <img src={props.data.image} alt={`Изображение ${props.data.name}`} />
                <div className={`pb-2 pt-2 ${styles.price}`}>
                    <p className="text text_type_digits-default pr-2">{props.data.price}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <p className={`text text_type_main-default ${styles.text}`}>{props.data.name}</p>
            </li>
        </>
    )
}

Ingredient.propTypes = {
    data: PropTypes.arrayOf(ingredientPropType).isRequired,
};

export default Ingredient