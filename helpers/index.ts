
// FAKE LOADING PAUSE

export async function pause(ms: number) {
   return new Promise(resolve => setTimeout(resolve, ms))
}

// SELECT STATISTICS DEFAULT VALUE

export function selectPlaceholder(params: string, value: string): string {
   if (!params || params === "all") return value;
   return params;
}


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





