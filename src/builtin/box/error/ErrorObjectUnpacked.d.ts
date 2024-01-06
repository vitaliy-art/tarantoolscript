import { ErrorObjectTrace } from './ErrorObjectTrace';

export interface ErrorObjectUnpacked {
  code: number;
  base_type: string;
  type: string;
  custom_type?: string;
  message: string;
  trace?: ErrorObjectTrace[];
}
