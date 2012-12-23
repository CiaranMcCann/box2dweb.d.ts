/// <reference path="../../Collision/init.d.ts" />
/// <reference path="../../Collision/b2ContactID.d.ts" />
/// <reference path="../../Collision/Shapes/init.d.ts" />
/// <reference path="../../Collision/Shapes/b2Shape.d.ts" />

/// <reference path="../../Common/Math/init.d.ts" />
/// <reference path="../../Common/Math/b2Vec2.d.ts" />

module Box2D.Dynamics.Contacts {
	
	/**
	* This structure is used to report contact point results.
	**/
	export class b2ContactResult {

		/**
		* The contact id identifies the features in contact.
		**/
		public id: b2Collision.b2ContactID;

		/**
		* Points from shape1 to shape2.
		**/
		public normal: b2Math.b2Vec2;

		/**
		* The normal impulse applied to body2.
		**/
		public normalImpulse: number;

		/**
		* Position in world coordinates.
		**/
		public position: b2Math.b2Vec2;

		/**
		* The first shape.
		**/
		public shape1: b2Shapes.b2Shape;

		/**
		* The second shape.
		**/
		public shape2: b2Shapes.b2Shape;

		/**
		* The tangent impulse applied to body2.
		**/
		public tangentImpulse: number;
	}
}
