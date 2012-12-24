/// <reference path="../../Common/Math/init.d.ts" />
/// <reference path="../../Common/Math/b2Vec2.d.ts" />
/// <reference path="b2JointDef.d.ts" />
/// <reference path="../b2Body.d.ts" />

module Box2D.Dynamics.Joints {

	/**
	* Weld joint definition. You need to specify local anchor points where they are attached and the relative body angle. The position of the anchor points is important for computing the reaction torque.
	**/
	export class b2WeldJointDef extends b2JointDef {

		/**
		* The local anchor point relative to body1's origin.
		**/
		public localAnchorA: b2Math.b2Vec2;

		/**
		* The local anchor point relative to body2's origin.
		**/
		public localAnchorB: b2Math.b2Vec2;

		/**
		* The body2 angle minus body1 angle in the reference state (radians).
		**/
		public referenceAngle: number;

		/**
		* Constructor.
		**/
		constructor();
		
		/**
		* Initialize the bodies, anchors, axis, and reference angle using the world anchor and world axis.
		* @bA Body A.
		* @bB Body B.
		* @anchor Anchor.
		**/
		public Initialize(bA: b2Body, bB: b2Body, anchor: b2Math.b2Vec2): void;
	}
}
