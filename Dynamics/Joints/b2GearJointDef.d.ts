/// <reference path="b2JointDef.d.ts" />
/// <reference path="b2Joint.d.ts" />

module Box2D.Dynamics.Joints {

	/**
	* Gear joint definition. This definition requires two existing revolute or prismatic joints (any combination will work). The provided joints must attach a dynamic body to a static body.
	**/
	export class b2GearJointDef extends b2JointDef {

		/**
		* The first revolute/prismatic joint attached to the gear joint.
		**/
		public joint1: b2Joint;

		/**
		* The second revolute/prismatic joint attached to the gear joint.
		**/
		public joint2: b2Joint;

		/**
		* The gear ratio.
		**/
		public ratio: number;

		/**
		* Constructor.
		**/
		constructor();
	}
}
