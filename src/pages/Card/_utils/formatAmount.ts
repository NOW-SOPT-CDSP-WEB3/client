// 금액 3자리마다 , 붙이는 함수
export const formatAmount = (amount: number) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
