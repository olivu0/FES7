import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIncomeAction } from "../../store/expense/expense-slice";

export default function IncomeInput() {
  const income = useSelector((store) => store.expense.income);
  const dispatch = useDispatch();

  function setIncome(event) {
    dispatch(setIncomeAction(parseInt(event.target.value)));
  }

  return (
    <label>
      수익 입력
      <input type="number" defaultValue={income} onChange={setIncome} placeholder="Ex: 3000" />
    </label>
  );
}
