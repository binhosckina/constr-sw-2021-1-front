import { Skill } from "./skill.model";

export interface Curricula {
  id: string;
  name: string;
  courses: any;
  skills: Skill[];
}
