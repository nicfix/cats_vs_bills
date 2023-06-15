export class Vector2 {
    constructor(public x: number = 0, public y: number = 0) {
    }

    copy() {
        return new Vector2(this.x, this.y);
    }

    scalarDistanceTo(other: Vector2): number {
        return this.diff(other).module();
    }

    scale(scalar: number) {
        this.x *= scalar;
        this.y *= scalar
    }

    add(other: Vector2) {
        this.x += other.x;
        this.y += other.y;
    }

    subtract(other: Vector2) {
        this.x -= other.x;
        this.y -= other.y;
    }

    diff(other: Vector2): Vector2 {
        const copy = this.copy();
        copy.subtract(other);
        return copy;
    }

    sum(other: Vector2): Vector2 {
        const copy = this.copy();
        copy.add(other);
        return copy;
    }

    normalize() {
        const m = this.module();
        if (m > 0) {
            this.scale(1 / this.module());
        }
    }

    normalized(): Vector2 {
        const copy = this.copy();
        copy.normalize();
        return copy;
    }

    module() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    set(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    static sumVectors(v1: Vector2, v2: Vector2) {
        return v1.sum(v2);
    }

    static diffVectors(v1: Vector2, v2: Vector2) {
        return v1.diff(v2);
    }
}

