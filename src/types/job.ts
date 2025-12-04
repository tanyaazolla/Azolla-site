export interface Job {
  team: string;
  jobInfo: {
    id: number;
    role: string;
    location: string;
    link: string
  }[];
}

export interface Jobs {
  data: {
    id: number;
    attributes: Job;
  }[];
}
