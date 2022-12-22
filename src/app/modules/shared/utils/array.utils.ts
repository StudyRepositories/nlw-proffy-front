export enum Direction {
	LEFT, RIGHT
}

export abstract class ArrayUtils {

	public static rotate(array: Array<any>, direction: Direction): void {
		switch (direction) {
			case Direction.LEFT:
				this.rotateLeft(array);
				break;
			case Direction.RIGHT:
				this.rotateRight(array);
				break;
		}
	}

	public static rotateRight(array: Array<any>): void {
		array.unshift(array.pop());
	}

	public static rotateLeft(array: Array<any>): void {
		array.push(array.shift());
	}
}
