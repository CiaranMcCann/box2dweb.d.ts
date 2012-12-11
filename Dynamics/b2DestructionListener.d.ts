/// <reference path="Joints/b2Joint.d.ts" />
/// <reference path="b2Fixture.d.ts" />

module Box2D.Dynamics {

	/**
	* Joints and shapes are destroyed when their associated body is destroyed. Implement this listener so that you may nullify references to these joints and shapes.
	**/
	export class b2DestructionListener {

		/**
		* Called when any fixture is about to be destroyed due to the destruction of its parent body.
		* @fixture b2Fixture being destroyed.
		**/
		public SayGoodbyeFixture(fixture: b2Fixture): void;

		/**
		* Called when any joint is about to be destroyed due to the destruction of one of its attached bodies.
		* @joint b2Joint being destroyed.
		**/
		public SayGoodbyeJoint(joint: Joints.b2Joint): void;
	}
}