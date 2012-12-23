/// <reference path="../init.d.ts" />
/// <reference path="../b2Body.d.ts" />

module Box2D.Dynamics.Contacts {
	
	/**
	* A contact edge is used to connect bodies and contacts together in a contact graph where each body is a node and each contact is an edge. A contact edge belongs to a doubly linked list maintained in each attached body. Each contact has two contact nodes, one for each attached body.
	**/
	export class b2ContactEdge {

		/**
		* Contact.
		**/
		public contact: b2Contact;

		/**
		* Next contact edge.
		**/
		public next: b2ContactEdge;

		/**
		* Contact body.
		**/
		public other: b2Body;

		/**
		* Previous contact edge.
		**/
		public prev: b2ContactEdge;
	}
}