export interface TariffModel {
  id: number;
  name: string;
  downloadSpeed: number;
  uploadSpeed: number;
  benefits: string[];
  price: number;
}
