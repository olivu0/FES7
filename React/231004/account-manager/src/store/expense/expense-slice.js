// reducer 선언
import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    // 사용자의 지출 목록 관리
    expenseList: [
      { name: "coffee", price: 5000 },
      { name: "icecream", price: 1500 },
    ],
    income: 1000000,
  },
  reducers: {
    // addExpenseAction => 액션 type의 이름
    // 이걸 누가 사용할까? => dispatch에서 사용
    // 사용자의 지출 내용을 store에 반영한다
    addExpenseAction: (currentSlice, action) => {
      // ExpenseInput에서 받은 name과 price를 가져와야함 === action.payload
      // slice의 expenseList에 접근하여 데이터를 수정한다
      currentSlice.expenseList.push(action.payload);
    },
    // 사용자의 수입을 store에 반영한다
    setIncomeAction: (currentSlice, action) => {
      console.log("setIncomeAction");
      currentSlice.income = action.payload;
    },
  },
});

// 액션을 디스패치에서 사용할 수 있도록 밖으로 내보낸다
export const { addExpenseAction, setIncomeAction } = expenseSlice.actions;

// slice에서 생성한 reducer들을 외부로 내보낸다
export default expenseSlice.reducer;
