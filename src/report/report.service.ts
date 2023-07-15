import { Injectable } from '@nestjs/common';
import { ReportType, data } from 'src/constants/data';
import { ReportResponseDTO } from 'src/dto/report.dto';
import { v4 as uuid } from 'uuid';

interface Report {
  amount: number;
  source: string;
}

interface UpdateReport {
  amount?: number;
  source?: string;
}

@Injectable()
export class ReportService {
  getAllReports(type: ReportType): ReportResponseDTO[] {
    const res = data?.report?.filter((report) => report?.type === type);
    return res?.map((data) => new ReportResponseDTO(data));
  }

  getReportById(type: ReportType, id: string): ReportResponseDTO {
    const report = data?.report
      ?.filter((report) => report?.type === type)
      .find((report) => report?.id === id);
    if (!report) return;
    return new ReportResponseDTO(report);
  }

  createReport(
    type: ReportType,
    { source, amount }: Report,
  ): ReportResponseDTO {
    const newReport = {
      id: uuid(),
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type,
    };
    data?.report?.push(newReport);
    return new ReportResponseDTO(newReport);
  }

  updateReport(
    type: ReportType,
    id: string,
    { source, amount }: UpdateReport,
  ): ReportResponseDTO {
    const updatedReport = data?.report
      ?.filter((report) => report?.type === type)
      .find((report) => report?.id === id);

    if (!updatedReport) {
      return;
    }

    const reportIndex = data?.report?.findIndex(
      (report) => report?.id === updatedReport?.id,
    );

    data.report[reportIndex] = {
      ...data?.report[reportIndex],
      source,
      amount,
      updated_at: new Date(),
    };
    const newData = data.report[reportIndex];
    return new ReportResponseDTO(newData);
  }

  deleteReport(id: string) {
    const reportIndex = data?.report?.findIndex((report) => report?.id === id);

    if (reportIndex === -1) return;
    data?.report?.splice(reportIndex, 1);
    return;
  }
}
