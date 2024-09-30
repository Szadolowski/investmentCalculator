export default function UserInput({ userInputData, handlerChanger }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">
            INITIAL INVESTMENT
            <input
              type="number"
              name="initialInvestment"
              required
              value={userInputData.initialInvestment}
              onChange={handlerChanger}
              min={0}
            />
          </label>
        </p>
        <p>
          <label htmlFor="annualInvestment">
            ANNUAL INVESTMENT
            <input
              type="number"
              name="annualInvestment"
              required
              value={userInputData.annualInvestment}
              onChange={handlerChanger}
              min={0}
            />
          </label>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">
            EXPECTED RETURN
            <input
              type="number"
              name="expectedReturn"
              required
              value={userInputData.expectedReturn}
              onChange={handlerChanger}
              min={0}
            />
          </label>
        </p>
        <p>
          <label htmlFor="duration">
            DURATION
            <input
              type="number"
              name="duration"
              required
              value={userInputData.duration}
              onChange={handlerChanger}
              min={0}
            />
          </label>
        </p>
      </div>
    </section>
  );
}
