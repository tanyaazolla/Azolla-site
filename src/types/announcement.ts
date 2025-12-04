export interface Announcement {
  id: number;
  attributes: { text: string; link: string | null; linkText: string | null };
}
