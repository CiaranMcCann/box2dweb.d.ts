/// <reference path="../../Common/Math/init.d.ts" />
/// <reference path="../../Common/Math/b2Vec2.d.ts" />
/// <reference path="b2Controller.d.ts" />

module Box2D.Dynamics.Controllers {

	/**
	* Applies an acceleration every frame, like gravity
	**/
	export class b2ConstantAccelController extends b2Controller {

		/**
		* The acceleration to apply.
		**/
		public A: b2Math.b2Vec2;

		/**
		* Step.
		* @step Internal b2TimeStep structure.
		**/
		public Step(step: any/* b2TimeStep*/): void;
	}
}