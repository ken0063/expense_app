import { Test, TestingModule } from '@nestjs/testing';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';

describe('AppController', () => {
  let reportController: ReportController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ReportController],
      providers: [ReportService],
    }).compile();

    reportController = app.get<ReportController>(ReportController);
  });
  const data = [
    {
      id: '1',
      source: 'Salary',
      amount: 1700,
      type: 'income',
    },
    {
      id: '2',
      source: 'Youtube',
      amount: 8700,
      type: 'income',
    },
  ];

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(reportController.getAllReports('income')).toBe(data);
    });
  });
});
