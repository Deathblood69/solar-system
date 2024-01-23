import { Color, Vector3 } from "three";

export class CelestialBody {
  name: string;
  radius: number;
  mass: number;
  color: Color;
  position: Vector3;

  constructor(
    name: string,
    radius: number,
    mass: number,
    color: string,
    position: [number, number, number],
  ) {
    this.name = name;
    this.radius = radius;
    this.mass = mass;
    this.color = new Color(color);
    this.position = new Vector3(position[0], position[1], position[2]);
  }
}
