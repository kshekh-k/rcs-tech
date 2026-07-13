export interface PolicySection {
  id: string;
  title: string;
  content: string[];
}

export interface PolicyData {
  badge: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: PolicySection[];
}