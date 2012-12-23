/// <reference path="../../Common/Math/init.d.ts" />
/// <reference path="../../Common/Math/b2Mat22.d.ts" />
/// <reference path="b2Controller.d.ts" />

module Box2D.Dynamics.Controllers {

	/**
	* Applies top down linear damping to the controlled bodies The damping is calculated by multiplying velocity by a matrix in local co-ordinates.
	**/
	export class b2TensorDampingController extends b2Controller {

		/**
		* Set this to a positive number to clamp the maximum amount of damping done.
		* @default = 0
		**/
		public maxTimeStep: number;

		/**
		* Tensor to use in damping model.
		**/
		public T: b2Math.b2Mat22;

		/**
		* Helper function to set T in a common case.
		* @xDamping x
		* @yDamping y
		**/
		public SetAxisAligned(xDamping: number, yDamping: number): void;

		/**
		* Step.
		* @step Internal b2TimeStep structure.
		**/
		public Step(step: any/* b2TimeStep*/): void;
	}
}
