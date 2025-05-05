
import { categories } from 'shared/utils/categories';
import styles from '../styles/styles.module.scss'

type Props = {
    setSelectedCategory: (arg: string) => void;
    selectedCategory: string;
};

export const Categories = ({ setSelectedCategory, selectedCategory }: Props) => {
    return (
        <div className={styles.category}>
            <h3>Категория</h3>
            <ul>
                {categories.map(el => (
                    <li
                        key={el.category}
                        onClick={() => setSelectedCategory(el.category)}
                        className={
                            selectedCategory === el.category
                                ? styles.active
                                : styles.selectedCategory
                        }
                    >
                        <img src={el.image} alt="" />
                        {el.category}
                    </li>
                ))}
            </ul>
        </div>
    );
};