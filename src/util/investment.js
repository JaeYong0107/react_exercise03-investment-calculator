// 이 함수는 JS 객체를 매개변수로 받습니다.
// 객체는 다음 속성을 포함해야 합니다.
// - initialInvestment: 초기 투자 금액
// - annualInvestment: 매년 투자하는 금액
// - expectedReturn: 예상 수익률 (연간)
// - duration: 투자 기간 (시간 프레임)
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    annualData.push({
      year: i + 1, // 연도 식별자
      interest: interestEarnedInYear, // 이번 해에 얻은 이자 금액
      valueEndOfYear: investmentValue, // 연말 투자 가치
      annualInvestment: annualInvestment, // 이번 해에 추가된 투자
    });
  }

  return annualData;
}

// 브라우저에서 제공하는 Intl API를 사용하여 포매터 객체를 준비합니다.
// 이 객체는 숫자를 통화로 형식화하는 "format()" 메서드를 제공합니다.
// 사용 예: formatter.format(1000) => "$1,000"을 생성합니다.
export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
