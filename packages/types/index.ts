// packages/types/index.ts
export enum TransactionType {
    SEND = 'SEND',
    RECEIVE = 'RECEIVE',
    DEPOSIT = 'DEPOSIT',
    WITHDRAWAL = 'WITHDRAWAL'
  }
  
  export enum TransactionCategory {
    SAVINGS = 'SAVINGS',
    FOOD = 'FOOD',
    SALARY = 'SALARY',
    TRANSPORTATION = 'TRANSPORTATION',
    ENTERTAINMENT = 'ENTERTAINMENT',
    UTILITIES = 'UTILITIES',
    HEALTHCARE = 'HEALTHCARE',
    EDUCATION = 'EDUCATION',
    MISCELLANEOUS = 'MISCELLANEOUS'
  }
  
  export interface User {
    id: string;
    username: string;
    email: string;
    isActive: boolean;
    createdAt: Date;
  }
  
  export interface Wallet {
    id: string;
    userId: string;
    balance: number;
    currency: string;
    isFrozen: boolean;
  }
  
  export interface Transaction {
    id: string;
    walletId: string;
    type: TransactionType;
    amount: number;
    category: TransactionCategory;
    description?: string;
    timestamp: Date;
    isRecurring?: boolean;
  }
  
  export interface CreateUserDTO {
    username: string;
    email: string;
    password: string;
  }
  
  export interface CreateTransactionDTO {
    walletId: string;
    type: TransactionType;
    amount: number;
    category: TransactionCategory;
    description?: string;
  }