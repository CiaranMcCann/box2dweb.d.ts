/// <reference path="../../Common/Math/init.d.ts" />
/// <reference path="../../Common/Math/b2Vec2.d.ts" />
/// <reference path="../../Common/Math/b2Mat22.d.ts" />
/// <reference path="b2Joint.d.ts" />

module Box2D.Dynamics.Joints {

	/**
	* Friction joint. This is used for top-down friction. It provides 2D translational friction and angular friction.
	**/
	export class b2FrictionJoint extends b2Joint {

		/**
		* Angular mass.
		**/
		public m_angularMass: number;

		/**
		* Linear mass.
		**/
		public m_linearMass: b2Math.b2Mat22;

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
		* Gets the max force.
		* @return Max force.
		**/
		public GetMaxForce(): number;

		/**
		* Gets the max torque.
		* @return Max torque.
		**/
		public GetMaxTorque(): number;

		/**
		* Get the reaction force on body2 at the joint anchor in N.
		* @inv_dt
		* @return Reaction force in N.
		**/
		public GetReactionForce(inv_dt: number); b2Math.b2Vec2;

		/**
		* Get the reaction torque on body 2 in N.
		* @return Reaction torque in N.
		**/
		public GetReactionTorque(inv_dt: number): number;

		/**
		* Sets the max force.
		* @force New max force.
		**/
		public SetMaxForce(force: number): void;

		/**
		* Sets the max torque.
		* @torque New max torque.
		**/
		public SetMaxTorque(torque: number): void;
	}
}
