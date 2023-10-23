export enum SelectedPage {
  Home = "home",
  AboutUs = "About Us",
  ServiceProvider = "Service providers",
  ContactUs = "Contact Us",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
