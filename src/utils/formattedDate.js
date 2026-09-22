export default function formatedData(inputData) {
   const [day, month, year] = inputData.split('.').map(Number);

   const correctDate = new Date(year, month - 1, day);
  return correctDate.toLocaleDateString('en-US', {
    month: 'long', // "December"
    day: 'numeric', // "31"
    year: 'numeric' // "2026"
  });
}
