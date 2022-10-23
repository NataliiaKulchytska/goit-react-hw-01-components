import PropTypes from 'prop-types';
import {
    TransactionHistoryTable,
} from './Transaction.styled';

export const Transaction = ({ items }) => {
    return (
        <TransactionHistoryTable>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) =>
                    <tr key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
                )}  
   
            </tbody>
        </TransactionHistoryTable>
    )
};
Transaction.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired,
}