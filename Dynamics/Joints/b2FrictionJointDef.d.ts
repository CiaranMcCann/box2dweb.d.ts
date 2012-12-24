/// <reference path="../../Common/Math/init.d.ts" />
/// <reference path="../../Common/Math/b2Vec2.d.ts" />
/// <reference path="b2JointDef.d.ts" />
/// <reference path="../b2Body.d.ts" />

module Box2D.Dynamics.Joints {

	/**
	* Friction joint defintion.
	**/
	export class b2FrictionJointDef extends b2JointDef {

		/**
		* The local anchor point relative to body1's origin.
		**/
		public localAnchorA: b2Math.b2Vec2;

		/**
		* The local anchor point relative to body2's origin.
		**/
		public localAnchorB: b2Math.b2Vec2;

		/**
		* The maximum force in N.
		**/
		public maxForce: number;

		/**
		* The maximum friction torque in N-m.
		**/
		public maxTorque: number;

		/**
		* Constructor.
		**/
		constructor();
		
		/**
		* Initialize the bodies, anchors, axis, and reference angle using the world anchor and world axis.
		* @bA Body A.
		* @bB Body B.
		* @anchor World anchor.
		**/
		public Initialize(bA: b2Body, bB: b2Body, anchor: b2Math.b2Vec2): void;
	}
}
