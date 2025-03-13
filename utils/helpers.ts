export const formatCurrentDate = () => {
   const currentDate = new Date();

   const day = String(currentDate.getDate()).padStart(2, '0');
   const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
   const year = currentDate.getFullYear();

   return `${year}-${month}-${day}`;
}


export const categories = [
   { name: 'Main expenses' },
   { name: 'Products' },
   { name: 'Car' },
   { name: 'Self care' },
   { name: 'Child care' },
   { name: 'Household products' },
   { name: 'Education' },
   { name: 'Leisure' },
   { name: 'Other expenses' },
]