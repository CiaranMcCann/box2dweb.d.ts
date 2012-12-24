/// <reference path="../../Common/Math/init.d.ts" />
/// <reference path="../../Common/Math/b2Vec2.d.ts" />
/// <reference path="b2Joint.d.ts" />

module Box2D.Dynamics.Joints {

	/**
	* The pulley joint is connected to two bodies and two fixed ground points. The pulley supports a ratio such that: length1 + ratio length2 <= constant Yes, the force transmitted is scaled by the ratio. The pulley also enforces a maximum length limit on both sides. This is useful to prevent one side of the pulley hitting the top.
	**/
	export class b2PullyJoint extends b2Joint {

		/**
		* Get the anchor point on bodyA in world coordinates.
		* @return Body A anchor.
		**/
		public GetAnchorA(): b2Math.b2Vec2;

		/**
		* Get the anchor point on bodyB in world coordinates.
		* @return Body B anchor.
		**/
		public GetAnchorB(): b2Math.b2Vec2;

		/**
		* Get the first ground anchor.
		**/
		public GetGroundAnchorA(): b2Math.b2Vec2;

		/**
		* Get the second ground anchor.
		**/
		public GetGroundAnchorB(): b2Math.b2Vec2;

		/**
		* Get the current length of the segment attached to body1.
		**/
		public GetLength1(): number;

		/**
		* Get the current length of the segment attached to body2.
		**/
		public GetLength2(): number;

		/**
		* Get the pulley ratio.
		**/
		public GetRatio(): number;

		/**
		* Get the reaction force on body2 at the joint anchor in N.
		* @inv_dt
		* @return Reaction force in N.
		**/
		public GetReactionForce(inv_dt: number): b2Math.b2Vec2;

		/**
		* Get the reaction torque on body 2 in N.
		* @return Reaction torque in N.
		**/
		public GetReactionTorque(inv_dt: number): number;
	}
}
