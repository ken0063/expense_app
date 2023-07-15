export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export const data: Data = {
  report: [
    {
      id: '9dae7029-eafe-4d22-a9f6-79a07c88dc15',
      source: 'Salary',
      amount: 1700,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },

    {
      id: '2',
      source: 'Youtube',
      amount: 8700,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: '3',
      source: 'Food',
      amount: 700,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
    {
      id: '4',
      source: 'Car',
      amount: 5700,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
  ],
};

export interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    type: ReportType;
  }[];
}
