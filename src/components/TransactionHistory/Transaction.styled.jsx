import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  margin: 60px auto;
  text-align: center;
  font-size: 14px;
  line-height: 1.2;
  border-radius: 2px;
  border-spacing: 0;
  border-collapse: collapse;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.2), 0px 2px 0px rgba(0, 0, 0, 0.08),
    0px 1px 0px rgba(0, 0, 0, 0.08);
thead {
    color: #ffffff;
    text-transform: uppercase;
    border-collapse: separate;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  th {
    width: 240px;
    padding: 10px;
    background-color: #20B2AA;
    :not(:last-child) {
      border-right: 1px solid #ffffff;
    }
    :first-of-type {
      border-top-left-radius: 4px;
    }
    :last-child {
      border-top-right-radius: 4px;
    }
}
  tbody {
    tr {
      :nth-of-type(2n) {
        background-color: #F5F5F5;
      }
    }
  }
  td {
    width: 200px;
    padding: 10px;
    text-transform: capitalize;
    color: #696969;
    border: 1px solid #d7d7d7;
  }
`;