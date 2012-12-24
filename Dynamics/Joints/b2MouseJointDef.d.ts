/// <reference path="../../Common/Math/init.d.ts" />
/// <reference path="../../Common/Math/b2Vec2.d.ts" />
/// <reference path="b2JointDef.d.ts" />
/// <reference path="../b2Body.d.ts" />

module Box2D.Dynamics.Joints {

	/**
	* Mouse joint definition. This requires a world target point, tuning parameters, and the time step.
	**/
	export class b2MouseJointDef extends b2JointDef {

		/**
		* The damping ratio. 0 = no damping, 1 = critical damping.
		**/
		public dampingRatio: number;

		/**
		* The response speed.
		**/
		public frequencyHz: number;

		/**
		* The maximum constraint force that can be exerted to move the candidate body.
		**/
		public maxForce: number;

		/**
		* Constructor.
		**/
		constructor();
	}
}
