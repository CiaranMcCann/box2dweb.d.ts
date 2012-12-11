/// <reference path="../Common/Math/init.d.ts" />
/// <reference path="../Common/Math/b2Vec2.d.ts" />

module Box2D.Dynamics {

	/**
	* Contact impulses for reporting. Impulses are used instead of forces because sub-step forces may approach infinity for rigid body collisions. These match up one-to-one with the contact points in b2Manifold.
	**/
	export class b2ContactImpulse {

		/**
		* Normal impulses.
		**/
		public normalImpulses: b2Math.b2Vec2;

		/**
		* Tangent impulses.
		**/
		public tangentImpulses: b2Math.b2Vec2;
	}
}