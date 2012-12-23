/// <reference path="../b2Body.d.ts" />

module Box2D.Dynamics.Joints {
	
	/**
	* Joint definitions are used to construct joints.
	**/
	export class b2JointDef {

		/**
		* The first attached body.
		**/
		public bodyA: b2Body;

		/**
		* The second attached body.
		**/
		public bodyB: b2Body;

		/**
		* Set this flag to true if the attached bodies should collide.
		**/
		public collideConnected: bool;

		/**
		* The joint type is set automatically for concrete joint types.
		**/
		public type: number;

		/**
		* Use this to attach application specific data to your joints.
		**/
		public userData: any;

		/**
		* Constructor.
		**/
		constructor();
	}
}
