import { Transaction } from "@/types";

export const months = [
   { name: "January", number: 1 },
   { name: "February", number: 2 },
   { name: "March", number: 3 },
   { name: "April", number: 4 },
   { name: "May", number: 5 },
   { name: "June", number: 6 },
   { name: "July", number: 7 },
   { name: "August", number: 8 },
   { name: "September", number: 9 },
   { name: "October", number: 10 },
   { name: "November", number: 11 },
   { name: "December", number: 12 }
];

// FAKE LOADING PAUSE

export async function pause(ms: number) {
   return new Promise(resolve => setTimeout(resolve, ms))
}

// SELECT STATISTICS DEFAULT VALUE
export const getUniqueYears = (transactions: Transaction[]): number[] => {
   const years = transactions.map(trans => new Date(trans.transactionDate).getFullYear());
   return [...new Set(years)].sort((a, b) => a - b); // Sort in descending order
};

export function getYearPlaceholder(param: string, uniquesYear: number[]): string {
   if (!param || param === "all") return "All years";
   const year = uniquesYear.find(y => y.toString() === param);
   return year?.toString() || "Invalid year"
}

export const getMonthPlaceholder = (monthNumber: string): string | null => {
   if (monthNumber === "all" || !monthNumber) return "All months"
   const month = months.find(m => m.number === Number(monthNumber));
   return month ? month.name : "Invalid month";
};


// DATE AND AMOuNT FORMATTING

export function formatAmount(amount?: number): string | undefined {
   if (!amount) return
   return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
   }).format(amount).replace(/,/g, ' ');
}

export const formatDate = (isoString: Date) => {
   const date = new Date(isoString);
   const year = date.getUTCFullYear();
   const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are 0-based
   const day = String(date.getUTCDate()).padStart(2, "0");
   return `${year}-${month}-${day}`;
}

export const formatCurrentDate = () => {
   const currentDate = new Date();
   const day = String(currentDate.getDate()).padStart(2, '0');
   const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
   const year = currentDate.getFullYear();
   return `${year}-${month}-${day}`;
}


// YOUR BALANCE EMOJI

export function categorizeAmount(amount: number): string {
   switch (true) {
      case amount > 1000:
         return "🔥";
      case amount > 0:
         return "😉";
      case amount === 0:
         return "💵"
      case amount < 0:
         return "😒";
      case amount < 1000:
         return "😢";
      default:
         return "💵"; // This should never be reached
   }
}





