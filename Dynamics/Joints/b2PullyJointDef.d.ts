/// <reference path="../../Common/Math/init.d.ts" />
/// <reference path="../../Common/Math/b2Vec2.d.ts" />
/// <reference path="b2JointDef.d.ts" />
/// <reference path="../b2Body.d.ts" />

module Box2D.Dynamics.Joints {

	/**
	* Pulley joint definition. This requires two ground anchors, two dynamic body anchor points, max lengths for each side, and a pulley ratio.
	**/
	export class b2PullyJointDef extends b2JointDef {

		/**
		* The first ground anchor in world coordinates. This point never moves.
		**/
		public groundAnchorA: b2Math.b2Vec2;

		/**
		* The second ground anchor in world coordinates. This point never moves.
		**/
		public groundAnchorB: b2Math.b2Vec2;

		/**
		* The a reference length for the segment attached to bodyA.
		**/
		public lengthA: number;

		/**
		* The a reference length for the segment attached to bodyB.
		**/
		public lengthB: number;

		/**
		* The local anchor point relative to body1's origin.
		**/
		public localAnchorA: b2Math.b2Vec2;

		/**
		* The local anchor point relative to body2's origin.
		**/
		public localAnchorB: b2Math.b2Vec2;

		/**
		* The maximum length of the segment attached to bodyA.
		**/
		public maxLengthA: number;

		/**
		* The maximum length of the segment attached to bodyB.
		**/
		public maxLengthB: number;

		/**
		* The pulley ratio, used to simulate a block-and-tackle.
		**/
		public ratio: number;

		/**
		* Constructor.
		**/
		constructor();
		
		/**
		* Initialize the bodies, anchors, and length using the world anchors.
		* @bA Body A.
		* @bB Body B.
		* @gaA Ground anchor A.
		* @gaB Ground anchor B.
		* @anchorA Anchor A.
		* @anchorB Anchor B.
		**/
		public Initialize(bA: b2Body, bB: b2Body, gaA: b2Math.b2Vec2, gaB: b2Math.b2Vec2, anchorA: b2Math.b2Vec2, anchorB: b2Math.b2Vec2): void;
	}
}
