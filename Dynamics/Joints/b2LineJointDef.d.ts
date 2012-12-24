/// <reference path="../../Common/Math/init.d.ts" />
/// <reference path="../../Common/Math/b2Vec2.d.ts" />
/// <reference path="b2JointDef.d.ts" />
/// <reference path="../b2Body.d.ts" />

module Box2D.Dynamics.Joints {

	/**
	* Line joint definition. This requires defining a line of motion using an axis and an anchor point. The definition uses local anchor points and a local axis so that the initial configuration can violate the constraint slightly. The joint translation is zero when the local anchor points coincide in world space. Using local anchors and a local axis helps when saving and loading a game.
	**/
	export class b2LineJointDef extends b2JointDef {

		/**
		* Enable/disable the joint limit.
		**/
		public enableLimit: bool;

		/**
		* Enable/disable the joint motor.
		**/
		public enableMotor: bool;

		/**
		* The local anchor point relative to body1's origin.
		**/
		public localAnchorA: b2Math.b2Vec2;

		/**
		* The local anchor point relative to body2's origin.
		**/
		public localAnchorB: b2Math.b2Vec2;

		/**
		* The local translation axis in bodyA.
		**/
		public localAxisA: b2Math.b2Vec2;

		/**
		* The lower translation limit, usually in meters.
		**/
		public lowerTranslation: number;

		/**
		* The maximum motor torque, usually in N-m.
		**/
		public maxMotorForce: number;

		/**
		* The desired motor speed in radians per second.
		**/
		public motorSpeed: number;

		/**
		* The upper translation limit, usually in meters.
		**/
		public upperTranslation: number;

		/**
		* Constructor.
		**/
		constructor();
		
		/**
		* Initialize the bodies, anchors, and length using the world anchors.
		* @bA Body A.
		* @bB Body B.
		* @anchor Anchor.
		* @axis Axis.
		**/
		public Initialize(bA: b2Body, bB: b2Body, anchor: b2Math.b2Vec2, axis: b2Math.b2Vec2): void;
	}
}
