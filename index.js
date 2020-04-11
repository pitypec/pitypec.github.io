import covid19ImpactEstimator from './estimator';

const form = document.forms['estimator-form'];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.querySelector('input[name="data-name"]').value;
  const avgAge = form.querySelector('input[name="data-average-age"]').value;
  const avgIncome = form.querySelector(
    'input[name="data-average-daily-income"]'
  ).value;
  const avgIncomePopulation = form.querySelector(
    'input[name="data-average-daily-income-population"]'
  ).value;
  const population = form.querySelector('input[name="data-population"]').value;
  const timeToElapse = form.querySelector('input[name="data-time-to-elapse"]')
    .value;
  const reportedCases = form.querySelector('input[name="data-reported-cases"]')
    .value;
  const totalHospitalBed = form.querySelector(
    'input[name="data-total-hospital-bed"]'
  ).value;
  const periodTypes = form.querySelector('#data-period-type');
  const periodType = periodTypes.options[periodTypes.selectedIndex].text;

  const data = {
    name,
    avgAge,
    avgIncome,
    avgIncomePopulation,
    population,
    timeToElapse,
    reportedCases,
    totalHospitalBed,
    periodType
  };
  covid19ImpactEstimator(data);
});
