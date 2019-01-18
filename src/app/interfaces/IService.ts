export interface IService {
  header: string;
  description: string;
  image: string;
  price?: number;
  currency?: string;
  priceLabel: string;
  period?: string;
  entityId: string;
  headerAndPrice: string;
  noPriceValue?: string;
}
