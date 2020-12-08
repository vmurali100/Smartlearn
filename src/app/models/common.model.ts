export class DisplayColumn {
  ColumnCode: string;
  ColumnName: string;
}

export class ReportDisplayColumn {
  ColumnCode: string;
  ColumnName: string;
  RedirectURL: string;
  Type: string;
}

export class SectionTransferObject {
  requestType: string;
  sourcingTypeStr: string;
  showSourceRecommendation: string;
  showCompetativeQuotes: string;
  showCommercialsConfirmation: string;
  showRisksConfirmation: string;
}

export class SAA {
  saaNumber: number;
  requestType: string;
  projectName: string;
  projectDesc: string;
  buyerRequestor: string;
  programManager: string;
  submittedBy: string;
  division: string;
  businessUnit: string;
  purchasingRegion: string;
  purchasingGroup: string;
  productGroup: string;
  productionPlant: string;
  customer: string;
  programName: string;
  programLife: number;
  pastSpend12M: number;
  pastSpend24M: number;
  pastSpend36M: number;
  effectiveDate: Date;
  contractTerm: number;
  contractValue: number;
  paymentTerm: number;
  incoTerm: number;
  annualBudgetPurchase: string;
  primaryVendorCommodity: string;
  secondaryVendorCommodity: string;
  sopDeliveryDate: Date;
  costBudgetTarget: number;
  sourcingPlanNumber: string;
  carNumber: string;
  toolingAuthNumber: string;
  targetAwardedNPV: number;
  currentSupplier: string;
  supplierOptions: string[];
  supplierEvalualtionList: SAASupplierEvaluation[];
  recommendedSupplier: string;
  comments: string;
  sourcingType: string;
  sourcingRegion: string;
  globalSourcing: string;
  globalSourcingType: string;
  savingsStartDate: Date;
  startofProduction: Date;
  initialSSOWReceiptDate: Date;
  approvedSSOWReceiptDate: Date;
  plannedTargetSourcingDate: Date;
  plusPhase: number;
  plusFeasibilityProductEventDate: Date;
  plusDVReleaseDate: Date;
  supplierQuoteDesc: string;
  supplierQuoteAttachment: string;
  sowDesc: string;
  sowAttachment: string;
  documentsList: SAADocuments[];
  hasSupplierDoc: string;
  hasSignedAll: string;
  additionInfoComments: string;
  additionInfoList: SAAAdditionalInfo[];
  baselineCost: number;
  negotiatedCost: number;
  unitPrice: number;
  annualVolume: number;
  baselineSpent: number;
  year1NegotiatedCost: number;
  year2NegotiatedCost: number;
  year3NegotiatedCost: number;
  year1Savings: number;
  year2Savings: number;
  year3Savings: number;
  recommendedSupplierPastSpend12M: number;
  recommendedSupplierContractTerm: number;
  recommendedSupplierYear1Cost: number;
  recommendedSupplierEffectiveStartDate: Date;
  recommendedSupplierContractValue: number;
  category: string;
  subCategory: string;
}

export class SAAAdditionalInfo {
  additionInfoQuestion: string;
  additionInfoAnswer: string;
}

export class SAADocuments {
  attachmentType: string;
  attachmentDesc: string;
  attachment: File;
}
export class SAASupplierEvaluation {
  isCurrent: boolean;
  supplierNameandNum: string;
  supplierCountryCode: string;
  supplierBCCCountry: string;
  supplierType: string;
  isPreferredSupplier: string;
  isCritialSupplier: string;
  isLLC: string;
  hasAwardedSupplierMBBP: string;
  isMBESupplier: string;
  hasPACT: string;
  financialRiskRating: number;
  termsofPayment: number;
  incoTerm: number;
  deliveryTime: number;
  firstNegotiatedPrice: number;
  secondNegotiatedPrice: number;
  FinalNegotiatedPrice: number;
  transportCost: number;
  packagingCost: number;
  additionalCost: number;
  deliveryPrice: number;
}

export class UserInfo {
  public globalId: string;
  public businessPhones: string[];
  public displayName: string;
  public givenName: string;
  public jobTitle: string;
  public mail: any;
  public mobilePhone: string;
  public officeLocation: any;
  public preferredLanguage: string;
  public surname: string;
  public userPrincipalName: string;
  public profilePic: any;
}

export class UserRoleMap {
  id: number;
  globalId: string;
  name: string;
  email: string;
  officeLocation: any;
  createdBy: string;
  createdTs: Date;
  deleteFlg: string;
  updatedBy: string;
  updatedTs: Date;
  userRole: UserRole;
}

export class UserRole {
  id: number;
  code: string;
  name: string;
  createdBy: string;
  createdTs: Date;
  deleteFlg: string;
  updatedBy: string;
  updatedTs: Date;
}

export class CreateRequestData {
  name: string;
  data: any;
}

export class PageData {
  pageName: string;
  data: SectionData[] = [];
}

export class SectionData {
  displayName: string;
  name: string;
  type: string;
  value: any;
}
