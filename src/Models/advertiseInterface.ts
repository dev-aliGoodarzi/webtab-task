export interface I_Advertise {
  advertise_id: number;
  image: string;
  advertise_type_id: number;
  lat_lon: string;
  phone: string;
  address: string;
  discount_code?: string;
  discount_value?: string;
  description: string;
  duration: number;
  AdvertiseSocialMedias: AdvertiseSocialMedia[];
  favourite: boolean;
  AdvertiseGalleries?: AdvertiseGallery[];
}

interface AdvertiseGallery {
  path: string;
  url_path: string;
}

interface AdvertiseSocialMedia {
  social_media_id: string;
  value?: string;
  social_media: Socialmedia;
}

interface Socialmedia {
  id: number;
  name: string;
  type: string;
  url?: string;
}

