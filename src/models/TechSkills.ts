export interface TechItem {
  name: string;
  /** Chemin absolu vers /public/logos/xxx.svg */
  logo: string;
}

export interface TechGroup {
  title: string;
  items: TechItem[];
}

export interface TechSkillsData {
  groups: TechGroup[];
}
