/// <reference path="../../Common/Math/init.d.ts" />
/// <reference path="../../Common/Math/b2Vec2.d.ts" />
/// <reference path="b2Joint.d.ts" />

module Box2D.Dynamics.Joints {

	/**
	* A line joint. This joint provides one degree of freedom: translation along an axis fixed in body1. You can use a joint limit to restrict the range of motion and a joint motor to drive the motion or to model joint friction.
	**/
	export class b2LineJoint extends b2Joint {

		/**
		* Enable/disable the joint limit.
		* @flag True to enable, false to disable limits
		**/
		public EnableLimit(flag: bool): void;

		/**
		* Enable/disable the joint motor.
		* @flag True to enable, false to disable the motor.
		**/
		public EnableMotor(flag: bool): void;

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
		* Get the current joint translation speed, usually in meters per second.
		* @return Joint speed.
		**/
		public GetJointSpeed(): number;

		/**
		* Get the current joint translation, usually in meters.
		* @return Joint translation.
		**/
		public GetJointTranslation(): number;

		/**
		* Get the lower joint limit, usually in meters.
		* @return Lower limit.
		**/
		public GetLowerLimit(): number;

		/**
		* Get the maximum motor force, usually in N.
		* @return Max motor force.
		**/
		public GetMaxMotorForce(): number;

		/**
		* Get the current motor force, usually in N.
		* @return Motor force.
		**/
		public GetMotorForce(): number;

		/**
		* Get the motor speed, usually in meters per second.
		* @return Motor speed.
		**/
		public GetMotorSpeed(): number;

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
		* Get the upper joint limit, usually in meters.
		* @return Upper limit.
		**/
		public GetUpperLimit(): number;

		/**
		* Is the joint limit enabled?
		* @return True if enabled otherwise false.
		**/
		public IsLimitEnabled(): bool;

		/**
		* Is the joint motor enabled?
		* @return True if enabled, otherwise false.
		**/
		public IsMotorEnabled(): bool;

		/**
		* Set the joint limits, usually in meters.
		* @lower Lower limit.
		* @upper Upper limit.
		**/
		public SetLimits(lower: number, upper: number): void;

		/**
		* Set the maximum motor force, usually in N.
		* @force New max motor force.
		**/
		public SetMaxMotorForce(force: number): void;

		/**
		* Set the motor speed, usually in meters per second.
		* @speed New motor speed.
		**/
		public SetMotorSpeed(speed: number): void;
	}
}
