

export type Transaction =
   {
      id: string;
      userId: string;
      type: boolean;
      category: string;
      comment: string;
      amount: number;
      transactionDate: Date;
      createdAt: Date;
      updatedAt: Date;
   }


export interface TransactionsProps {
   transactions: Transaction[] | null; // Array of Transaction objects
}


export type EditTransactionType =
   {
      id: string;
      type: boolean;
      category: string;
      comment: string;
      amount: number;
      transactionDate: Date;
      createdAt: Date;
   }

export type EditTransactionProps = {
   transaction: EditTransactionType
}


export type User = {
   name: string;
   email: string;
   image: string | null;
   id: string;
   isOauth?: boolean;
};

export type UserProps = {
   user?: User
};