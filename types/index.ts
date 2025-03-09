type TransactionType = "INCOME" | "EXPENSE";


type CategoryType = "INCOME" | "MAIN_EXPENSES" | "PRODUCTS" | "CAR" |
   "SELF_CARE" | "CHILD_CARE" | "HOUSEHOLD_PRODUCTS" | "EDUCATION" | "LEISURE" | "OTHER_EXPENSES"



export type Transaction = {
   id: string;
   userId: string;
   type: TransactionType; // Assuming type can only be INCOME or EXPENSE
   category: string;
   comment: string;
   amount: number;
   createdAt: Date;
   updatedAt: Date;
};