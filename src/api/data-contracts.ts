/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface BankDetails {
  /** @format int32 */
  bankId?: number;
  bankName?: string | null;
  accountName?: string | null;
  /** @format int32 */
  accountNumber?: number;
  sortCode?: string | null;
  otherInfo?: string | null;
  /** @format int32 */
  userId?: number;
}

export interface BillableService {
  /** @format int32 */
  billableServiceId?: number;
  serviceName?: string | null;
  /** @format int32 */
  rate?: number;
  isFixedFee?: boolean;
  isRegular?: boolean;
  regularDays?: Day[] | null;
  dayProvided?: DateOnly;
  time?: TimeOnly;
  /** @format int32 */
  duration?: number | null;
}

export interface Business {
  /** @format int32 */
  businessId?: number;
  businessName?: string | null;
  clients?: Client[] | null;
  /** @format int32 */
  userId?: number;
}

export interface Client {
  /** @format int32 */
  clientId?: number;
  clientName?: string | null;
  clientAddress?: string | null;
  clientPhone?: string | null;
  clientEmail?: string | null;
  clientContact?: string | null;
  /** @format int32 */
  businessId?: number;
}

export interface DateOnly {
  /** @format int32 */
  year?: number;
  /** @format int32 */
  month?: number;
  /** @format int32 */
  day?: number;
  dayOfWeek?: DayOfWeek;
  /** @format int32 */
  dayOfYear?: number;
  /** @format int32 */
  dayNumber?: number;
}

export interface Day {
  /** @format int32 */
  dayId?: number;
  dayName?: string | null;
}

/** @format int32 */
export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface Disclaimer {
  /** @format int32 */
  disclaimerId?: number;
  disclaimerName?: string | null;
  disclaimerText?: string | null;
  /** @format int32 */
  userId?: number;
}

export interface Invoice {
  /** @format int32 */
  invoiceId?: number;
  fileBlob?: string | null;
  /** @format int32 */
  userId?: number;
}

export interface InvoiceTemplate {
  /** @format int32 */
  invoiceTemplateId?: number;
  /** @format int32 */
  userId?: number;
  /** @format int32 */
  bankDetailsId?: number;
  /** @format int32 */
  businessId?: number;
  /** @format int32 */
  clientId?: number;
  /** @format int32 */
  disclaimerId?: number;
  applyTax?: boolean;
  displayNI?: boolean;
  regularBillableServices?: BillableService[] | null;
}

export interface TimeOnly {
  /** @format int32 */
  hour?: number;
  /** @format int32 */
  minute?: number;
  /** @format int32 */
  second?: number;
  /** @format int32 */
  millisecond?: number;
  /** @format int64 */
  ticks?: number;
}

export interface User {
  /** @format int32 */
  userId?: number;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  address?: string | null;
  phone?: string | null;
  website?: string | null;
  /** @format int32 */
  taxRate?: number | null;
  niNumber?: string | null;
  bankDetails?: BankDetails[] | null;
  disclaimers?: Disclaimer[] | null;
  businesses?: Business[] | null;
  invoices?: Invoice[] | null;
  invoiceTemplates?: InvoiceTemplate[] | null;
}
