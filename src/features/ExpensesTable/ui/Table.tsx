
import { useExpenses } from '../model/useExpenses';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import styles from './styles.module.scss';

export const Table = () => {
    const { data, selectedCategory, setSelectedCategory, categories, sortOrder, setSortOrder } = useExpenses();

    return (
        <div className={styles.container}>
            <TableHeader
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                categories={categories}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
            />
            <div className={styles.bottom}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Описание</th>
                            <th>Категория</th>
                            <th>Дата</th>
                            <th>Сумма</th>
                            <th>Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item, i) => (
                            <TableRow key={i} item={item} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};