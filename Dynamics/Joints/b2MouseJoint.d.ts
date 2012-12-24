/// <reference path="../../Common/Math/init.d.ts" />
/// <reference path="../../Common/Math/b2Vec2.d.ts" />
/// <reference path="b2Joint.d.ts" />

module Box2D.Dynamics.Joints {

	/**
	* A mouse joint is used to make a point on a body track a specified world point. This a soft constraint with a maximum force. This allows the constraint to stretch and without applying huge forces. Note: this joint is not fully documented as it is intended primarily for the testbed. See that for more instructions.
	**/
	export class b2MouseJoint extends b2Joint {

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
		* Gets the damping ratio.
		* @return Damping ratio.
		**/
		public GetDampingRatio(): number;

		/**
		* Gets the frequency.
		* @return Frequency.
		**/
		public GetFrequency(): number;

		/**
		* Gets the max force.
		* @return Max force.
		**/
		public GetMaxForce(): number;

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

		/**
		* Gets the target.
		* @return Target.
		**/
		public GetTarget(): b2Math.b2Vec2;

		/**
		* Sets the damping ratio.
		* @ratio New damping ratio.
		**/
		public SetDampingRatio(ratio: number): void;

		/**
		* Sets the frequency.
		* @hz New frequency (hertz).
		**/
		public SetFrequency(hz: number): void;

		/**
		* Sets the max force.
		* @maxForce New max force.
		**/
		public SetMaxForce(maxForce: number): void;

		/**
		* Use this to update the target point.
		* @target New target.
		**/
		public SetTarget(target: b2Math.b2Vec2): void;
	}
}
