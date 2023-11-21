export default function Calendar() {
  return (
    <>
      <div className="container text-center">
        <div className="cal">
          <div className="cal-month">
            <button className="btn cal-btn" type="button">
              <svg className="bi" width="16" height="16"></svg>
            </button>
            <strong className="cal-month-name">June</strong>
            <select className="form-select cal-month-name d-none">
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option selected="" value="June">
                June
              </option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
            <button className="btn cal-btn" type="button">
              <svg className="bi" width="16" height="16"></svg>
            </button>
          </div>
          <div className="cal-weekdays text-body-secondary">
            <div className="cal-weekday">Sun</div>
            <div className="cal-weekday">Mon</div>
            <div className="cal-weekday">Tue</div>
            <div className="cal-weekday">Wed</div>
            <div className="cal-weekday">Thu</div>
            <div className="cal-weekday">Fri</div>
            <div className="cal-weekday">Sat</div>
          </div>
          <div className="cal-days">
            <button className="btn cal-btn" disabled="" type="button">
              30
            </button>
            <button className="btn cal-btn" disabled="" type="button">
              31
            </button>

            <button className="btn cal-btn" type="button">
              1
            </button>
            <button className="btn cal-btn" type="button">
              2
            </button>
            <button className="btn cal-btn" type="button">
              3
            </button>
            <button className="btn cal-btn" type="button">
              4
            </button>
            <button className="btn cal-btn" type="button">
              5
            </button>
            <button className="btn cal-btn" type="button">
              6
            </button>
            <button className="btn cal-btn" type="button">
              7
            </button>

            <button className="btn cal-btn" type="button">
              8
            </button>
            <button className="btn cal-btn" type="button">
              9
            </button>
            <button className="btn cal-btn" type="button">
              10
            </button>
            <button className="btn cal-btn" type="button">
              11
            </button>
            <button className="btn cal-btn" type="button">
              12
            </button>
            <button className="btn cal-btn" type="button">
              13
            </button>
            <button className="btn cal-btn" type="button">
              14
            </button>

            <button className="btn cal-btn" type="button">
              15
            </button>
            <button className="btn cal-btn" type="button">
              16
            </button>
            <button className="btn cal-btn" type="button">
              17
            </button>
            <button className="btn cal-btn" type="button">
              18
            </button>
            <button className="btn cal-btn" type="button">
              19
            </button>
            <button className="btn cal-btn" type="button">
              20
            </button>
            <button className="btn cal-btn" type="button">
              21
            </button>

            <button className="btn cal-btn" type="button">
              22
            </button>
            <button className="btn cal-btn" type="button">
              23
            </button>
            <button className="btn cal-btn" type="button">
              24
            </button>
            <button className="btn cal-btn" type="button">
              25
            </button>
            <button className="btn cal-btn" type="button">
              26
            </button>
            <button className="btn cal-btn" type="button">
              27
            </button>
            <button className="btn cal-btn" type="button">
              28
            </button>

            <button className="btn cal-btn" type="button">
              29
            </button>
            <button className="btn cal-btn" type="button">
              30
            </button>
            <button className="btn cal-btn" type="button">
              31
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
