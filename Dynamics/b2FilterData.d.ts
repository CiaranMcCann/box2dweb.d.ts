
module Box2D.Dynamics {

	/**
	* This holds contact filtering data.
	**/
	export class b2FilterData {
		
		/**
		* The collision category bits. Normally you would just set one bit.
		**/
		public categoryBits: number;

		/**
		* Collision groups allow a certain group of objects to never collide (negative) or always collide (positive). Zero means no collision group. Non-zero group filtering always wins against the mask bits.
		**/
		public groupIndex: number;

		/**
		* The collision mask bits. This states the categories that this shape would accept for collision.
		**/
		public maskBits: number;

		/**
		* Creates a copy of the filter data.
		* @return Copy of this filter data.
		**/
		public Copy(): b2FilterData;
	}
}
