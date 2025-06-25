import { calculateInvestmentResults, formatter } from "../util/investment";

const ResultTable = ({ data }) => {
  const investmentResults = calculateInvestmentResults(data);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Valuet</th>
          <th>Interest (year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {investmentResults.map((entry)=>(
            <tr key = {entry.year}>
                <td>{entry.year}</td>
                <td>{formatter.format(entry.valueEndOfYear)}</td>
                <td>{formatter.format(entry.interest)}</td>
                <td>{formatter.format(entry.totalInterest)}</td>
                <td>{formatter.format(entry.investedCapital)}</td>
            </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultTable;
