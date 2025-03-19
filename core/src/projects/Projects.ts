import Technologies from "../technologies/Technologies";
import { Kind } from "./kind";
import { Level } from "./Level";

export default interface Projects {
    id: number;
    name: string;
    description: string;
    images: string;
    kind: Kind;
    level: Level;
    repository: string;
    emphasis: boolean;
    technologies: Technologies[];
}