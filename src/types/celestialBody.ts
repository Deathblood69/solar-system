import { Color, Vector3 } from "three";

export class CelestialBody {
  private _name: string;
  private _radius: number;
  private _mass: number;
  private _color: Color;
  private _position: Vector3;
  private _velocity: Vector3;

  constructor(
    name: string,
    radius: number,
    mass: number,
    color: string,
    position: [number, number, number],
    velocity?: [number, number, number],
  ) {
    this._name = name;
    this._radius = radius;
    this._mass = mass;
    this._color = new Color(color);
    this._position = new Vector3(position[0], position[1], position[2]);
    this._velocity = velocity
      ? new Vector3(velocity[0], velocity[1], velocity[2])
      : new Vector3(0, 0, 0);
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get radius(): number {
    return this._radius;
  }

  set radius(value: number) {
    this._radius = value;
  }

  get mass(): number {
    return this._mass;
  }

  set mass(value: number) {
    this._mass = value;
  }

  get color(): Color {
    return this._color;
  }

  set color(value: Color) {
    this._color = value;
  }

  get position(): Vector3 {
    return this._position;
  }

  set position(value: Vector3) {
    this._position = value;
  }

  get velocity(): Vector3 {
    return this._velocity;
  }

  set velocity(value: Vector3) {
    this._velocity = value;
  }
}
