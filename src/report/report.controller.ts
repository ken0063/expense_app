import { ReportService } from './report.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseEnumPipe,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ReportType } from '../constants/data';
import {
  CreateReportDTO,
  ReportResponseDTO,
  UpdateReportDTO,
} from 'src/dto/report.dto';

@Controller('report/:type')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get()
  getAllReports(
    @Param('type', new ParseEnumPipe(ReportType)) type: ReportType,
  ): ReportResponseDTO[] {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;

    return this?.reportService?.getAllReports(reportType);
  }

  @Get(':id')
  getReportById(
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
    @Param('id', ParseUUIDPipe) id: string,
  ): ReportResponseDTO {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;

    return this?.reportService?.getReportById(reportType, id);
  }

  @Post()
  createReport(
    @Body() { amount, source }: CreateReportDTO,
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
  ): ReportResponseDTO {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;

    return this?.reportService?.createReport(reportType, { amount, source });
  }

  @Put(':id')
  updateReport(
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: UpdateReportDTO,
  ): ReportResponseDTO {
    const { amount, source } = body;
    console.log({ body });
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;

    return this?.reportService?.updateReport(reportType, id, {
      source,
      amount,
    });
  }

  @HttpCode(204)
  @Delete(':id')
  deleteReport(@Param('id', ParseUUIDPipe) id: string) {
    return this?.reportService?.deleteReport(id);
  }
}
