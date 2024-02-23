import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const newValue = parseInt(event.target.value);
        if (!isNaN(newValue)) {
            const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
            if (newValue >= totalExpenses && newValue <= 20000) {
                setNewBudget(newValue);
                dispatch({
                    type: 'SET_BUDGET',
                    payload: newValue,
                });
            } else if (newValue < totalExpenses) {
                alert('Budget cannot be lower than total spending.');
            } else if (newValue > 20000) {
                alert('Budget cannot exceed 20,000.');
            }
        }
    }

    return (
        <div className='alert alert-secondary' style={{ width: '300px', height: '60px', fontSize: '16px', backgroundColor: '#d1ecf1', color: '#0d6efd', marginRight: '10px'}}>
            <span>Budget: £ </span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} />
        </div>
    );
};

export default Budget;