/// <reference path="../../Common/Math/init.d.ts" />
/// <reference path="../../Common/Math/b2Vec2.d.ts" />
/// <reference path="b2Controller.d.ts" />

module Box2D.Dynamics.Controllers {

	/**
	* Applies simplified gravity between every pair of bodies.
	**/
	export class b2GravityController extends b2Controller {

		/**
		* Specifies the strength of the gravitation force.
		* @default = 1
		**/
		public G: number;

		/**
		* If true, gravity is proportional to r^-2, otherwise r^-1.
		**/
		public invSqr: bool;

		/**
		* Step.
		* @step Internal b2TimeStep structure.
		**/
		public Step(step: any/* b2TimeStep*/): void;
	}
}
