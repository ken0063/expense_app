import { Exclude, Expose } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
} from 'class-validator';
import { ReportType } from 'src/constants/data';

export class CreateReportDTO {
  @IsNumber()
  @IsPositive()
  amount: number;

  @IsString()
  @IsNotEmpty()
  source: string;
}

export class UpdateReportDTO {
  @IsNumber()
  @IsPositive()
  @IsOptional()
  amount: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  source: string;
}

export class ReportResponseDTO {
  @IsUUID()
  id: string;

  @IsString()
  source: string;

  @IsNumber()
  @IsPositive()
  amount: number;

  @Exclude()
  @IsDate()
  created_at: Date;

  @Exclude()
  @IsDate()
  updated_at: Date;

  @IsEnum(ReportType)
  type: ReportType;

  @Expose({ name: 'createdAt' })
  transformCreatedAt() {
    return this?.created_at;
  }

  constructor(partial: Partial<ReportResponseDTO>) {
    Object.assign(this, partial);
  }
}
