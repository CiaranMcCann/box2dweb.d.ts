/// <reference path="../Collision/Shapes/init.d.ts" />
/// <reference path="../Collision/Shapes/b2Shape.d.ts" />
/// <reference path="b2FilterData.d.ts" />

module Box2D.Dynamics {
	
	/**
	* A fixture definition is used to create a fixture. This class defines an abstract fixture definition. You can reuse fixture definitions safely.
	**/
	export class b2FixtureDef {

		/**
		* The density, usually in kg/m^2.
		**/
		public density: number;

		/**
		* Contact filtering data.
		**/
		public filter: b2FilterData;

		/**
		* The friction coefficient, usually in the range [0,1].
		**/
		public friction: number;

		/**
		* A sensor shape collects contact information but never generates a collision response.
		**/
		public isSensor: bool;

		/**
		* The restitution (elasticity) usually in the range [0,1].
		**/
		public restitution: number;

		/**
		* The shape, this must be set. The shape will be cloned, so you can create the shape on the stack.
		**/
		public shape: b2Shapes.b2Shape;

		/**
		* Use this to store application specific fixture data.
		**/
		public userData: any;

		/**
		* The constructor sets the default fixture definition values.
		**/
		constructor();
	}
}
