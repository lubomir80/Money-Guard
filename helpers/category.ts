import { Transaction } from "@/types";

type CategorySum = {
   totalAmount?: number;
   color: string;
};

type AllCalculationsResult = {
   categories: string[];
   categoriesWithSumAndColor: { [key: string]: CategorySum };
   totalExpanse: number;
   totalIncome: number;
};

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

// Assuming colorByCategory is defined somewhere
export function colorByCategory(category: string): string {
   switch (category) {
      case 'Main expenses':
         return '#FED057';
      case 'Products':
         return '#FFD8D0';
      case 'Car':
         return '#FD9498';
      case 'Self care':
         return '#C5BAFF';
      case 'Child care':
         return '#6E78E8';
      case 'Household products':
         return '#4A56E2';
      case 'Education':
         return '#81E1FF';
      case 'Leisure':
         return '#24CCA7';
      case 'Other expenses':
         return '#00AD84';
      default:
         return '#FBFBFB';
   }
}


//......... STATISTICS CALCULATION............ 


// Function to get unique expense categories
export const uniqueExpanseCategory = (transactions: Transaction[] | null): string[] => {
   const allCategories = [...new Set(transactions?.map(t => t.category))];
   const removeIncome = allCategories.filter(cat => cat.toLowerCase() !== "income");
   return removeIncome;
};

// Function to sum transactions by category and return categories with amounts and colors
export const sumTransactionsByCategories = (
   categories: string[],
   transactions: Transaction[] | null
): { [key: string]: CategorySum } => {
   return categories.reduce((result, category) => {
      // Calculate total amount for each category
      const total = transactions?.reduce((sum, trans) => {
         if (trans.category.toLowerCase() === category.toLowerCase()) {
            return sum + trans.amount;
         }
         return sum;
      }, 0);

      // Ensure that both `totalAmount` and `color` are set
      result[category] = {
         color: colorByCategory(category), // Assuming colorByCategory is defined
         totalAmount: total
      };
      return result;
   }, {} as { [key: string]: CategorySum });
};

// Function to calculate total income
export const calculateTotalIncome = (transactions: Transaction[]): number => {
   return transactions.reduce((sum, trans) =>
      trans.category.toLowerCase() === "income" ? sum + trans.amount : sum, 0
   );
};

// Function to calculate total expenses
export const calculateTotalExpanse = (transactions: Transaction[]): number => {
   return transactions.reduce((sum, trans) =>
      trans.category.toLowerCase() !== "income" ? sum + trans.amount : sum, 0
   );
};

// All calculations function returning the final result
export const FinalResult = (transactions: Transaction[]): AllCalculationsResult => {
   const categories = uniqueExpanseCategory(transactions);
   const categoriesWithSumAndColor = sumTransactionsByCategories(categories, transactions);
   const totalExpanse = calculateTotalExpanse(transactions);
   const totalIncome = calculateTotalIncome(transactions);

   return {
      categories,
      categoriesWithSumAndColor,
      totalExpanse,
      totalIncome
   };
};


export const filterTransactionsCategory = (
   transactions: Transaction[],
   year: number | "all" = "all",
   month: number | "all" = "all"
): Transaction[] => {
   return transactions.filter((transaction) => {
      const date = new Date(transaction.transactionDate);
      const transactionYear = date.getFullYear();
      const transactionMonth = date.getMonth() + 1; // JS months are 0-based (0 = Jan, 1 = Feb, etc.)

      // If year is "all", ignore year filter
      const matchesYear = year === "all" || transactionYear === year;

      // If month is "all", ignore month filter
      const matchesMonth = month === "all" || transactionMonth === month;

      return matchesYear && matchesMonth;
   });
};