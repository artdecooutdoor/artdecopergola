// Products Configuration
export interface Product {
  id: string;
  slug: string;
  nameKey: string;
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'retractable-louvered-roof',
    nameKey: 'products.retractableLouveredRoof.title',
  },
  {
    id: '2',
    slug: 'retractable-pergola-roof',
    nameKey: 'products.retractablePergolaRoof.title',
  },
  {
    id: '3',
    slug: 'sun-room-systems',
    nameKey: 'products.sunRoomSystems.title',
  },
  {
    id: '4',
    slug: 'lift-sliding-doors',
    nameKey: 'products.liftSlidingDoors.title',
  },
  {
    id: '5',
    slug: 'vertiglass-window',
    nameKey: 'products.vertiglassWindow.title',
  },
  {
    id: '6',
    slug: 'sliding-glass-doors',
    nameKey: 'products.slidingGlassDoors.title',
  },
];
