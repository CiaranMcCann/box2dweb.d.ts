/// <reference path="../../Common/Math/init.d.ts" />
/// <reference path="../../Common/Math/b2Vec2.d.ts" />
/// <reference path="b2JointDef.d.ts" />
/// <reference path="../b2Body.d.ts" />

module Box2D.Dynamics.Joints {

	/**
	* Distance joint definition. This requires defining an anchor point on both bodies and the non-zero length of the distance joint. The definition uses local anchor points so that the initial configuration can violate the constraint slightly. This helps when saving and loading a game.
	* @warning Do not use a zero or short length.
	**/
	export class b2DistanceJointDef extends b2JointDef {

		/**
		* The damping ratio. 0 = no damping, 1 = critical damping.
		**/
		public dampingRatio: number;

		/**
		* The mass-spring-damper frequency in Hertz.
		**/
		public frequencyHz: number;

		/**
		* The natural length between the anchor points.
		**/
		public length: number;

		/**
		* The local anchor point relative to body1's origin.
		**/
		public localAnchorA: b2Math.b2Vec2;

		/**
		* The local anchor point relative to body2's origin.
		**/
		public localAnchorB: b2Math.b2Vec2;

		/**
		* Constructor.
		**/
		constructor();
		
		/**
		* Initialize the bodies, anchors, and length using the world anchors.
		* @bA Body A.
		* @bB Body B.
		* @anchorA Anchor A.
		* @anchorB Anchor B.
		**/
		public Initialize(bA: b2Body, bB: b2Body, anchorA: b2Math.b2Vec2, anchorB: b2Math.b2Vec2): void;
	}
}
