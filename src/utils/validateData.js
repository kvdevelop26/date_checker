export default function validateData(inputData) {
  const inputDataArray = inputData.split('.');
  if (inputDataArray.length !== 3) return;
  const [day, month, year] = inputData.split('.').map(Number);

  const correctDate = new Date(year, month - 1, day);

  return (
    day === correctDate.getDate() &&
    month - 1 === correctDate.getMonth() &&
    year === correctDate.getFullYear()
  );
}
