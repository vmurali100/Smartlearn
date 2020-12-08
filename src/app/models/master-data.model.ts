import { UserInfo } from "./common.model";

export class Vendor {
  id: number;
  code: string;
  name: string;
  description: string;
  address_line_1: string;
  address_line_2: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  contact_name: string;
  contact_email: string;
  contact_tel: number;
  contact_fax: number;
}

export class Questionaire {
  id: number;
  code: string;
  name: string;
}

export class VendorUser {
  id: number;
  name: string;
  email: string;
  tel: number;
  password: string;
  address_line_1: string;
  address_line_2: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
}

export class Commodity {
  id: number;
  code: string;
  name: string;
  description: string;
}

export class Company {
  id: number;
  code: string;
  name: string;
  description: string;
}

export class CatalogueItem {
  id: number;
  code: string;
  name: string;
  description: string;
  img1: string;
  img2: string;
  price: string;
  vendor: string;
}

export class PurchaseOrg {
  id: number;
  code: string;
  name: string;
  description: string;
}

export class Unit {
  id: number;
  code: string;
  name: string;
  description: string;
}

export class Currency {
  id: number;
  code: string;
  name: string;
  description: string;
}

export class DeliveryAddress {
  id: number;
  code: string;
  name: string;
  description: string;
  address_line_1: string;
  address_line_2: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
}

export class GLAccount {
  id: number;
  code: string;
  name: string;
  description: string;
}

export class PaymentTerms {
  id: number;
  code: string;
  name: string;
  description: string;
}

export class PurchasingGroup {
  id: number;
  code: string;
  name: string;
  description: string;
}

export class Tax {
  id: number;
  code: string;
  name: string;
  description: string;
}

export class CostCenter {
  id: number;
  code: string;
  name: string;
  description: string;
  owner: UserInfo;
  financeController: UserInfo;
  finanaceControllerManager: UserInfo;
}

export class Location {
  id: number;
  code: string;
  name: string;
  description: string;
  createdBy: string;
  createdTs: Date;
  deleteFlg: string;
  displayFlg: string;
  updatedBy: string;
  updatedTs: Date;
}

export class Region {
  id: number;
  code: string;
  name: string;
  description: string;
  createdBy: string;
  createdTs: Date;
  deleteFlg: string;
  displayFlg: string;
  updatedBy: string;
  updatedTs: Date;
}

export class Country {
  id: number;
  code: string;
  name: string;
  description: string;
  createdBy: string;
  createdTs: Date;
  deleteFlg: string;
  displayFlg: string;
  updatedBy: string;
  updatedTs: Date;
}

export class Role {
  id: number;
  code: string;
  name: string;
  description: string;
  createdBy: string;
  createdTs: Date;
  deleteFlg: string;
  displayFlg: string;
  updatedBy: string;
  updatedTs: Date;
}

export class WorkFlowRule {
  id: number;
  minThreshold: number;
  maxThreshold: number;
  active: string;
}

