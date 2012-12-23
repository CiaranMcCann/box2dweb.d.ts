/// <reference path="../b2Body.d.ts" />
/// <reference path="../b2DebugDraw.d.ts" />
/// <reference path="../b2World.d.ts" />
/// <reference path="b2ControllerEdge.d.ts" />

module Box2D.Dynamics.Controllers {

	/**
	* Base class for controllers. Controllers are a convience for encapsulating common per-step functionality.
	**/
	export class b2Controller {
		
		/**
		* Body count.
		**/
		public m_bodyCount: number;

		/**
		* List of bodies.
		**/
		public m_bodyList: b2ControllerEdge;

		/**
		* Adds a body to the controller.
		* @body Body to add.
		**/
		public AddBody(body: b2Body): void;

		/**
		* Removes all bodies from the controller.
		**/
		public Clear(): void;

		/**
		* Debug drawing.
		* @debugDraw Handle to drawer.
		**/
		public Draw(debugDraw: b2DebugDraw): void;

		/**
		* Gets the body list.
		* @return Body list.
		**/
		public GetBodyList(): b2ControllerEdge;

		/**
		* Gets the next controller.
		* @return Next controller.
		**/
		public GetNext(): b2Controller;

		/**
		* Gets the world.
		* @return World.
		**/
		public GetWorld(): b2World;

		/**
		* Removes a body from the controller.
		* @body Body to remove from this controller.
		**/
		public RemoveBody(body: b2Body): void;

		/**
		* Step
		* @step b2TimeStep -> Private internal class.
		**/
		public Step(step: any/*b2TimeStep*/): void;
	}
}
