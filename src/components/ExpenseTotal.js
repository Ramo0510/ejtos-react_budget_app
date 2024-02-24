import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    const { expenses, currency, dispatch } = useContext(AppContext);
    const [selectedCurrency, setSelectedCurrency] = useState(currency);

    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value;
        setSelectedCurrency(newCurrency);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });
    };

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    return (
        <div className='d-flex justify-content-between'>

            <div className='alert alert-primary' style={{ width: '250px', height: '60px', fontSize: '16px', backgroundColor: '#cfe2f3', color: '#1c4b87', marginRight: '10px' }}>
            <span>Spent so far: {selectedCurrency} {totalExpenses}</span>
            </div>

            <div className="currency-dropdown" style={{ width: '250px', height: '60px', fontSize: '16px', backgroundColor: '#f8d7da', color: '#721c24', marginLeft: '10px', borderRadius: '6px', paddingTop: '14px'}}>
            
            <label style={{ marginLeft: '1rem' }}>Currency</label>
            <select value={selectedCurrency} onChange={handleCurrencyChange} style={{ marginLeft: '0.5rem', fontSize: '16px', padding: '8px', backgroundColor: '#f8d7da', color: 'white' }}>
                <option value="$">Dollar</option>
                <option value="£">Pound</option>
                <option value="€">Euro</option>
                <option value="₹">Rupee</option>
            </select>
            
            </div>
            
        </div>
    );
};

export default ExpenseTotal;
