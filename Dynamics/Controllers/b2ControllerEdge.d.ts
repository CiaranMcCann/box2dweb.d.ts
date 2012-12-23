/// <reference path="../b2Body.d.ts" />
/// <reference path="b2Controller.d.ts" />

module Box2D.Dynamics.Controllers {

	/**
	* Controller Edge.
	**/
	export class b2ControllerEdge {
		
		/**
		* Body.
		**/
		public body: b2Body;

		/**
		* Provides quick access to the other end of this edge.
		**/
		public controller: b2Controller;

		/**
		* The next controller edge in the controller's body list.
		**/
		public nextBody: b2ControllerEdge;

		/**
		* The next controller edge in the body's controller list.
		**/
		public nextController: b2ControllerEdge;

		/**
		* The previous controller edge in the controller's body list.
		**/
		public prevBody: b2ControllerEdge;

		/**
		* The previous controller edge in the body's controller list.
		**/
		public prevController: b2ControllerEdge;
	}
}
