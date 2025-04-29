
import { Table } from 'features/ExpensesTable/ui/Table';
import styles from './styles.module.scss';
import { AddExpense } from 'features/AddExpense/ui/AddExpense';

export const MainPage = () => {
    return (
        <div className={styles.wrapper}>
            <Table />
            <AddExpense />
        </div>
    );
};