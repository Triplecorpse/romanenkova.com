import {IModal} from './IModal';

export interface IAppointmentModal extends IModal {
  name: string;
  phone: string;
  phoneOption: string;
  nickname: string;
  contact: string;
  contactOption: string;
  contactValueControl?: string;
  contactNameControl?: any;
  email: string;
  date: string;
  datesubscr: string;
  time: string;
  service: string;
  message: string;
  checkbox: string;
  instructions: string;
  selectClear: string;
  timezone?: string;
  agreepp?: [string, string];
}
