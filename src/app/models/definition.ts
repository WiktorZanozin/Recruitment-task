export interface Definition{
  marketingName: string;
  technicialName?: string;
  description?: string;
  startDate?:  Date | string;
  endDate?:  Date | string;
  otherPromotionsConnection?: boolean;
  backPromotion?: boolean;
  portal?: PortalType;
  conditionType?: ConditionType;
  businessConditionType?: BusinessConditionType
}

export enum BusinessConditionType{
  BusinessCondition = "Business Condtition",
  BasePrice = "Base Price"
}

export enum PortalType{
  Portal1="Portal 1",
  Portal2="Portal 2",
  Portal3="Portal 3"
}

export enum ConditionType{
  Condition1= "Condition 1",
  Condition2= "Condition 2",
  Condition3= "Condition 3",
}
