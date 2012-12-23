/// <reference path="../../Common/Math/init.d.ts" />
/// <reference path="../../Common/Math/b2Vec2.d.ts" />
/// <reference path="b2Controller.d.ts" />

module Box2D.Dynamics.Controllers {

	/**
	* Calculates buoyancy forces for fluids in the form of a half plane.
	**/
	export class b2BuoyancyController extends b2Controller {

		/**
		* Linear drag co-efficient.
		* @default = 1
		**/
		public angularDrag: number;

		/**
		* The fluid density.
		* @default = 0
		**/
		public density: number;

		/**
		* Gravity vector, if the world's gravity is not used.
		* @default = null
		**/
		public gravity: b2Math.b2Vec2;

		/**
		* Linear drag co-efficient.
		* @default = 2
		**/
		public linearDrag: number;

		/**
		* The outer surface normal.
		**/
		public normal: b2Math.b2Vec2;

		/**
		* The height of the fluid surface along the normal.
		* @default = 0
		**/
		public offset: number;

		/**
		* If false, bodies are assumed to be uniformly dense, otherwise use the shapes densities.
		* @default = false.
		**/
		public useDensity: bool;

		/**
		* If true, gravity is taken from the world instead of the gravity parameter.
		* @default = true.
		**/
		public useWorldGravity: bool;

		/**
		* Fluid velocity, for drag calculations.
		**/
		public velocity: b2Math.b2Vec2;
	}
}
