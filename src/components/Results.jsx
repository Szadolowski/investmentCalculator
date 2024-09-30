import { formatter, calculateInvestmentResults } from "../util/investment";

export default function Results({ data }) {
  const resultsData = calculateInvestmentResults(data);
  const initialInvestment =
    resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>{"Interst(Year)"}</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((e) => {
          const totalInterest = e.valueEndOfYear - e.annualInvestment * e.year - initialInvestment;
          const totalAmountInvested = e.valueEndOfYear - totalInterest;
          return (
            <tr key={e.year}>
              <td>{e.year}</td>
              <td>{formatter.format(e.valueEndOfYear)}</td>
              <td>{formatter.format(e.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
