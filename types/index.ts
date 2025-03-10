type TransactionType = "INCOME" | "EXPENSE";

type IncomeCategory = "INCOME";

type ExpenseCategory =
   | "MAIN_EXPENSES"
   | "PRODUCTS"
   | "CAR"
   | "SELF_CARE"
   | "CHILD_CARE"
   | "HOUSEHOLD_PRODUCTS"
   | "EDUCATION"
   | "LEISURE"
   | "OTHER_EXPENSES";


export type Transaction =
   | {
      id: string;
      userId: string;
      type: "INCOME";
      category: IncomeCategory; // Only "INCOME" allowed
      comment: string;
      amount: number;
      createdAt: Date;
      updatedAt: Date;
   }
   | {
      id: string;
      userId: string;
      type: "EXPENSE";
      category: ExpenseCategory; // Only expense categories allowed
      comment: string;
      amount: number;
      createdAt: Date;
      updatedAt: Date;
   };

export interface TransactionsProps {
   transactions: Transaction[] | null; // Array of Transaction objects
}